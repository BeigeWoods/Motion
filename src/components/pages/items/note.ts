import { BaseComponent } from "../../base.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, noteContext: string) {
    super(`<section class="note">
            <h2 class="note_title"></h2>
            <p class="note_content"></p>
          </section>`);
    const titleElement = this.element.querySelector(
      ".note_title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
    const noteElement = this.element.querySelector(
      ".note_content"
    )! as HTMLParagraphElement;
    noteElement.textContent = noteContext;
  }
}
