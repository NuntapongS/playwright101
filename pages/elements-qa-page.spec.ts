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
    await this.page.getByPlaceholder("Full Name").type(fullname);
  }

  async typeEmail(email: string) {
    await this.page.getByPlaceholder("name@example").type(email);
  }

  async typeCurrentAddress(currentAddress: string) {
    await this.page.getByPlaceholder("Current Address").type(currentAddress);
  }

  async typePermanentAddress(permanentAddress: string) {
    const address = await this.page.$("#permanentAddress.form-control");
    await address?.type(permanentAddress);
  }

  async clickSubmit() {
    await this.page.click("text=Submit");
  }

  async expectContainName() {
    await expect(this.page.getByText(/Maverick/i)).toBeVisible();
  }

  async expectContainEmail() {
    await expect(this.page.getByText(/marverick@gmail.com/i)).toBeVisible();
  }

  async expectContainCurrentAddress() {
    await expect(this.page.getByText(/Bangkok/i)).toBeVisible();
  }

  async expectContainPermanentAddress() {
    await expect(this.page.getByText(/Phuket/i)).toBeVisible();
  }

  async checkbox() {
    await this.page.click("text=Home");
  }

  async clickRadioButtonYes() {
    await this.page.click("text=Yes");
  }

  async clickRadioButtonImpressive() {
    await this.page.click("text=Impressive");
  }

  async clickAddButton() {
    await this.page.click("id=addNewRecordButton");
  }

  typeFirstName(firstName: string) {
    return this.page.getByPlaceholder("First Name").type(firstName);
  }

  typeLastName(lastName: string) {
    return this.page.getByPlaceholder("Last Name").type(lastName);
  }

  typeAge(age: string) {
    return this.page.getByPlaceholder("Age").type(age);
  }
}
