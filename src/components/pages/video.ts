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
    const modUrl = url.substring(17);
    videoElement.src = `https://www.youtube.com/embed/${modUrl}`;

    const titleElement = this.element.querySelector(
      ".video_title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
