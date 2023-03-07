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

  async gotoNewTabFromNewTabButton() {
    const newTab = await this.page.waitForEvent("popup");
    await newTab.goto("https://demoqa.com/sample");
    await newTab.close();
  }

  async gotoModalNewWindows() {
    await this.page.click("text=New Window");
    const newWindow = await this.page.waitForEvent("popup");
    await newWindow.goto("https://demoqa.com/sample");
    await newWindow.close();
  }

  async clickNewTabNewWindowMessage(newTabNewWindowMessage: string) {
    await this.page.click(newTabNewWindowMessage);
  }

  async clickAlerts(alerts: string) {
    await this.page.locator(alerts).last().click();
  }

  async expectButtonAlert() {
    await expect(
      this.page.getByText(/Click Button to see alert/i)
    ).toBeVisible();
  }

  async clickButtonToSeeAlert(clickMe: string) {
    await this.page.locator(clickMe).first().click();
  }

  async expectButtonAlertWillAppearAfterFiveSecond() {
    await expect(
      this.page.getByText(/On button click, alert will appear after 5 seconds/i)
    ).toBeVisible();
  }

  async clickButtonToSeeAlertWillAppearAfterFiveSecond(clickMe: string) {
    await this.page.locator(clickMe).nth(1).click();
  }

  async expectButtonAlertWithOkCancel() {
    await expect(
      this.page.getByText(/On button click, confirm box will appear/i)
    ).toBeVisible();
  }

  async clickButtonConfirmBoxWillAppear(clickMe: string) {
    await this.page.locator(clickMe).nth(2).click();
  }

  async expectTextPromptBox() {
    await expect(
      this.page.getByText(/On button click, prompt box will appear/i)
    ).toBeVisible();
  }

  async clickButtonPromptBox(clickMe: string) {
    await this.page.locator(clickMe).nth(3).click();
  }

  async clickFrames(frames: string) {
    await this.page.click(frames);
  }

  async expectTextInTabFrames() {
    await expect(
      this.page.getByText(
        /Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below/i
      )
    ).toBeVisible();
  }
}
