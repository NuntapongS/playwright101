import { expect, Page } from "@playwright/test";

export class DemoQaPageInteractions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }
}
