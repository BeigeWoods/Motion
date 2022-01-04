import { PageComponent } from "./pages/page.js";
import { ImageComponent } from "./pages/items/image.js";

class App {
  private readonly page: PageComponent;
  private readonly image: ImageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.image = new ImageComponent("shine", "https://picsum.photos/200/300");
    this.page.attachTo(appRoot);
    this.image.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
