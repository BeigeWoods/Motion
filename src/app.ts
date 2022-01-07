import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/pages/page.js";
import { ImageComponent } from "./components/pages/items/image.js";
import { VideoComponent } from "./components/pages/items/video.js";
import { NoteComponent } from "./components/pages/items/note.js";
import { TodoComponent } from "./components/pages/items/todo.js";
import { Component } from "./components/base.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent("shine", "https://picsum.photos/600/300");
    this.page.addChild(image);

    const video = new VideoComponent(
      "music",
      "https://www.youtube.com/watch?v=X4Ojh53pJRg"
    );
    this.page.addChild(video);

    const note = new NoteComponent("Note", "hellow");
    this.page.addChild(note);

    const todo = new TodoComponent("Todo", "what to do");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
