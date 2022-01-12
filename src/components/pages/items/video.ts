import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
              <div class="video-container">
                <iframe class="video-iframe">
                </iframe>
              </div>
              <h2 class="page-item_title video-title"></h2>
          </section>`);

    const videoElement = this.element.querySelector(
      ".video-iframe"
    )! as HTMLIFrameElement;
    videoElement.src = this.extractUrlId(url);

    const titleElement = this.element.querySelector(
      ".video-title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  private extractUrlId(url: string): string {
    if (url.includes("watch?v=")) {
      return `https://www.youtube.com/embed/${url.substring(32)}`;
    } else {
      return `https://www.youtube.com/embed/${url.substring(17)}`;
    }
  }
}
