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

  async typeFullname(fullname: string) {
    await this.page
      .getByPlaceholder("Full Name")
      .type(fullname, { delay: 100 });
  }

  async typeEmail(email: string) {
    await this.page
      .getByPlaceholder("name@example")
      .type(email, { delay: 100 });
  }

  async typeCurrentAddress(currentAddress: string) {
    await this.page
      .getByPlaceholder("Current Address")
      .type(currentAddress, { delay: 100 });
  }
}
