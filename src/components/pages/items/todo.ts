import { BaseComponent } from "../../base.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todoContext: string) {
    super(`<section class="todo">
            <h2 class="page-item_title todo-title"></h2>
            <input id="todo-checkbox" type="checkbox"></input>
            <label for="todo-checkbox" class="todo-label"></label>
            </section>`);
    const titleElement = this.element.querySelector(
      ".todo-title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
    const todoElement = this.element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    todoElement.textContent = todoContext;
  }
}
