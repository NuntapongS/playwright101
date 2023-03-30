import { Page, expect } from "@playwright/test";

export class DemoQaPageBookStoreApplication {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextBookStoreApplication() {
    await expect(this.page.getByText(/Book Store Application/i)).toBeVisible();
  }

  async clickBookStoreApplication(bookStoreApplication: string) {
    await this.page.click(bookStoreApplication);
  }

  async expectTabLogin() {
    await expect(this.page.locator("text=Login").first()).toBeVisible();
  }

  async clickTablogin() {
    await this.page.click("text=Login");
  }
}
