import { expect, Page } from "@playwright/test";

export class DemoQaPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async clickElement(element: string) {
    await this.page.click(element);
  }

  async clickTextbox(element: string) {
    await this.page.click(element);
  }
}
