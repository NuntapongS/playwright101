import { Page, expect } from "@playwright/test";
export class DemoQaPageWidgets {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectDemoqaPageUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextWidgets() {
    await expect(this.page.getByText(/Widgets/i)).toBeVisible();
  }

  async clickWidgets(selector: string) {
    await this.page.click(selector);
  }
}
