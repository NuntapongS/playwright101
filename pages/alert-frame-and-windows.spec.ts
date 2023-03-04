import { Page, expect } from "@playwright/test";

export class DemoQaPageAlertFrameAndWindows {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectTextAlertFrameAndWindows() {
    await expect(this.page.getByText(/Alerts, Frame & Windows/i)).toBeVisible();
  }

  async clickAlertFrameAndWindows(alertFrameAndWindows: string) {
    await this.page.click(alertFrameAndWindows);
  }

  async clickBrowserWindows(browserWindows: string) {
    await this.page.click(browserWindows);
  }

  async clickNewTab(newTab: string) {
    await this.page.click(newTab);
  }
}
