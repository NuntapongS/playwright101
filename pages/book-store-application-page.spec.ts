import { Page, expect } from "@playwright/test";

export class DemoQaPageBookStoreApplication {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }
}
