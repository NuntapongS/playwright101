import { Locator, Page, expect } from "@playwright/test";

export class DemoQaPageAlertFrameAndWindows {
  readonly page: Page;
  readonly textForm: Locator;
  readonly textNewWindow: Locator;
  readonly textAlert: Locator;
  readonly textAlertWillAppearFiveSecond: Locator;
  readonly textAlertOkCancle: Locator;
  readonly textPromptBox: Locator;
  readonly textTabFrame: Locator;
  readonly textNestedFrames: Locator;
  readonly textModelDialogs: Locator;
  readonly textInSmallModal: Locator;
  readonly textInLargeModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textForm = page.getByText(/Alerts, Frame & Windows/i);
    this.textNewWindow = page.getByRole("button", {
      name: "New Window",
      exact: true,
    });
    this.textAlert = page.getByText(/Click Button to see alert/i);
    this.textAlertWillAppearFiveSecond = page.getByText(
      /On button click, alert will appear after 5 seconds/i
    );
    this.textAlertOkCancle = page.getByText(
      /On button click, confirm box will appear/i
    );
    this.textPromptBox = page.getByText(
      /On button click, prompt box will appear/i
    );
    this.textTabFrame = page.getByText(
      /Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below/i
    );
    this.textNestedFrames = page.getByText(
      /Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame./i
    );
    this.textModelDialogs = page.getByText(/Click on button to see modal/i);
    this.textInSmallModal = page.getByText(
      /This is a small modal. It has very less content/i
    );
    this.textInLargeModal = page.getByText(/Large Modal/i).last();
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectTextAlertFrameAndWindows() {
    await expect(this.textForm).toBeVisible();
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
    await this.textNewWindow.click();
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
    await expect(this.textAlert).toBeVisible();
  }

  async clickButtonToSeeAlert(clickMe: string) {
    await this.page.locator(clickMe).first().click();
  }

  async expectButtonAlertWillAppearAfterFiveSecond() {
    await expect(this.textAlertWillAppearFiveSecond).toBeVisible();
  }

  async clickButtonToSeeAlertWillAppearAfterFiveSecond(clickMe: string) {
    await this.page.locator(clickMe).nth(1).click();
  }

  async expectButtonAlertWithOkCancel() {
    await expect(this.textAlertOkCancle).toBeVisible();
  }

  async clickButtonConfirmBoxWillAppear(clickMe: string) {
    await this.page.locator(clickMe).nth(2).click();
  }

  async expectTextPromptBox() {
    await expect(this.textPromptBox).toBeVisible();
  }

  async clickButtonPromptBox(clickMe: string) {
    await this.page.locator(clickMe).nth(3).click();
  }

  async clickFrames(frames: string) {
    await this.page.click(frames);
  }

  async expectTextInTabFrames() {
    await expect(this.textTabFrame).toBeVisible();
  }

  async clickNestedFrames(nestedFrames: string) {
    await this.page.click(nestedFrames);
  }

  async expectTextInTabNestedFrames() {
    await expect(this.textNestedFrames).toBeVisible();
  }

  async clickModalDialogs(modalDialogs: string) {
    await this.page.click(modalDialogs);
  }

  async expectContainTextInTabModalDialogs() {
    await expect(this.textModelDialogs).toBeVisible();
  }

  async clickSmallModal(smallModal: string) {
    await this.page.click(smallModal);
  }

  async expectContainTextInTabSmallModal() {
    await expect(this.textInSmallModal).toBeVisible();
  }

  async clickCloseSmallModal(close: string) {
    await this.page.locator(close).last().click();
  }

  async clickLargeModal(largeModal: string) {
    await this.page.click(largeModal);
  }

  async expectContainTextInModalLargeModal() {
    await expect(this.textInLargeModal).toBeVisible();
  }

  async clickCloseLargeModal(close: string) {
    await this.page.locator(close).last().click();
  }

  async clickWidgets(widgets: string) {
    await this.page.click(widgets);
  }
}
