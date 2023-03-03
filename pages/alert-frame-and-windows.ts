import { Page } from "@playwright/test";

export class DemoQaPageAlertFrameAndWindows {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
