import { BaseComponent, Component } from "../base.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
  dragListener(parent: HTMLElement): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item" draggable="true">
            <section class="page-item_body"></section>
            <button class="page-item_controls">
              <span class="close">&times;</span>
            </button>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  dragListener(parent: HTMLElement) {
    let dragged: HTMLLIElement;
    let drop: HTMLElement;
    let dropIndex: number;
    parent.addEventListener("drag", () => {}, false);
    parent.addEventListener(
      "dragstart",
      (event) => {
        dragged = event.target! as HTMLLIElement;
      },
      false
    );
    parent.addEventListener(
      "dragover",
      function (event) {
        event.preventDefault();
      },
      false
    );
    parent.addEventListener(
      "dragenter",
      (event) => {
        const target = event.target! as HTMLElement;
        drop = target.parentNode?.parentNode! as HTMLElement;
        dropIndex = Array.from(parent.children).indexOf(drop);
      },
      false
    );
    parent.addEventListener(
      "drop",
      (event) => {
        event.preventDefault();
        dropIndex <= -1 ? 0 : dropIndex;
        if (drop.className.includes("page-item")) {
          parent.removeChild(dragged);
          parent.insertBefore(
            dragged,
            parent.childNodes[dropIndex]! as HTMLElement
          );
        }
      },
      false
    );
  }
}

export class PageComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);
  }
  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
    item.dragListener(this.element);
  }
}
