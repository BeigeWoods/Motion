import { PageComponent } from "./components/pages/page.js";
import { ImageComponent } from "./components/pages/image.js";
import { VideoComponent } from "./components/pages/video.js";
import { NoteComponent } from "./components/pages/note.js";
import { TodoComponent } from "./components/pages/todo.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent("shine", "https://picsum.photos/600/300");
    image.attachTo(appRoot, "beforeend");
    const video = new VideoComponent("music", "https://youtu.be/X4Ojh53pJRg");
    video.attachTo(appRoot, "beforeend");
    const note = new NoteComponent("Note", "hellow");
    note.attachTo(appRoot, "beforeend");
    const todo = new TodoComponent("Todo", "what to do");
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
