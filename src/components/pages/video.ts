import { BaseComponent } from "../base.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
              <div class="video_holder">
                <iframe class="video_thumbnail">
                </iframe>
              </div>
              <p class="video_title"></p>
          </section>`);

    const videoElement = this.element.querySelector(
      ".video_thumbnail"
    )! as HTMLIFrameElement;
    videoElement.src = this.extractUrlId(url);

    const titleElement = this.element.querySelector(
      ".video_title"
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
