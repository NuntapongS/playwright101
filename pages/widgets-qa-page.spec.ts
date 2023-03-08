import { Page } from "@playwright/test";
export class DemoPageWidgets {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
