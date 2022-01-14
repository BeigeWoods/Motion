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

  private extractUrlId(url: string): string | never {
    const regExp =
      /(?:(?:youtu\.be\/)|(?:youtube\.com\/(?:(?:watch\?v\=)|(?:embed\/))))([a-zA-Z0-9-]{11})/;
    const match = url.match(regExp);
    console.log(match);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    } else {
      throw new Error("invalid URL");
    }
  }
}
