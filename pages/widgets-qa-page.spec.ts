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

  async expectContainTextAccordian() {
    await expect(this.page.getByText(/Accordian/i)).toBeVisible();
  }

  async clickAccordian(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextWhatIsLoremIpsum() {
    await expect(this.page.getByText(/What is Lorem Ipsum?/i)).toBeVisible();
  }

  async clickWhatIsLoremIpsum(selector: string) {
    await this.page.click(selector);
  }

  async clickWhatIsLoremIpsumAgain(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInFieldWhatIsLoremIpsum() {
    await expect(
      this.page.getByText(
        /Lorem Ipsum is simply dummy text of the printing and typesetting industry./i
      )
    ).toBeVisible();
  }

  async expectContainTextWhereDoesItComeFrom() {
    await expect(
      this.page.getByText(/Where does it come from?/i)
    ).toBeVisible();
  }

  async clickWhereDoesItComeFrom(selector: string) {
    await this.page.click(selector);
  }

  async expectTextFieldWhereDoesItComeFrom() {
    await expect(
      this.page.getByText(
        /Contrary to popular belief, Lorem Ipsum is not simply random text./i
      )
    ).toBeVisible();
  }

  async expectContainTextWhyDoWeUseIt() {
    await expect(this.page.getByText(/Why do we use it?/i)).toBeVisible();
  }

  async clickWhyDoWeUseIt(selector: string) {
    await this.page.click(selector);
  }
}
