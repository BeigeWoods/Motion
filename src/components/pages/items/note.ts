import { BaseComponent } from "../../base.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, noteContext: string) {
    super(`<section class="note">
            <h2 class="page-item_title note-title"></h2>
            <p class="note-body"></p>
          </section>`);
    const titleElement = this.element.querySelector(
      ".note-title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
    const noteElement = this.element.querySelector(
      ".note-body"
    )! as HTMLParagraphElement;
    noteElement.textContent = noteContext;
  }
}
