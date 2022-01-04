export class ImageComponent {
  private element: HTMLDivElement;
  private image: HTMLImageElement;
  private caption: HTMLSpanElement;
  constructor(title: string, url: string) {
    this.image = document.createElement("img");
    this.image.src = url;
    this.caption = document.createElement("span");
    this.caption.textContent = title;
    this.element = document.createElement("div");
    this.element.setAttribute("class", "image_container");
    this.element.insertAdjacentElement("afterbegin", this.image);
    this.element.insertAdjacentElement("afterbegin", this.caption);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
