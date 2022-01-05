import { BaseComponent } from "../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todoContext: string) {
    super(`<section class="todo">
            <h2 class="todo_title"></h2>
            <input class="todo_checkbox" type="checkbox"></input>
          </section>`);
    const titleElement = this.element.querySelector(
      ".todo_title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
    const todoElement = this.element.querySelector(
      ".todo_checkbox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todoContext);
  }
}
