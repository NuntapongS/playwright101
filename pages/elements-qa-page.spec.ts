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

  async typeFirstName(firstName: string) {
    await this.page.getByPlaceholder("First Name").type(firstName);
  }

  async typeLastName(lastName: string) {
    await this.page.getByPlaceholder("Last Name").type(lastName);
  }

  async typeAge(age: string) {
    await this.page.getByPlaceholder("Age").type(age);
  }

  async typeSalary(salary: string) {
    await this.page.getByPlaceholder("Salary").type(salary);
  }

  async typeDepartment(department: string) {
    await this.page.getByPlaceholder("Department").type(department);
  }

  async clickSubmitButton() {
    await this.page.click("text=Submit");
  }

  async expectContainFirstName() {
    await expect(this.page.getByText(/Topgun/i)).toBeVisible();
  }

  async expectContainLastName() {
    await expect(this.page.getByText(/Maverick/i)).toBeVisible();
  }

  async expectContaiDepartment() {
    await expect(this.page.getByText(/Develop/i)).toBeVisible();
  }

  async doubleClick() {
    await this.page.dblclick("text=Double Click Me");
  }

  async expectContainDoubleClick() {
    await expect(
      this.page.getByText(/You have done a double click/i)
    ).toBeVisible();
  }

  async clickRightClick() {
    await this.page.locator("text=Right Click Me").click({ button: "right" });
  }

  async expectContainRightClick() {
    await expect(
      this.page.getByText(/You have done a right click/i)
    ).toBeVisible();
  }

  async expectContainLinkOpenNewTab() {
    await expect(
      this.page.getByText(/Following links will open new tab/)
    ).toBeVisible();
  }

  async clickLinkHome() {
    await this.page.click("text=Home");
  }

  async expectContainLinkHome() {
    expect(this.page.url()).toContain("demoqa.com");
  }

  async expectContainLinkApiCall() {
    await expect(
      this.page.getByText(/Following links will send an api call/)
    ).toBeVisible();
  }

  async clickCreatedLink() {
    await this.page.click("text=Created");
  }

  async expectContainTextCratedLink() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 201 and status text Created/i
      )
    ).toBeVisible();
  }

  async clickNoContentLink() {
    await this.page.click("text=No Content");
  }

  async expectContainTextNoContent() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 204 and status text No Content/i
      )
    ).toBeVisible();
  }

  async clickMoved() {
    await this.page.click("text=Moved");
  }

  async expectContainTextMoved() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 301 and status text Moved Permanently/i
      )
    ).toBeVisible();
  }

  async clickBadRequest() {
    await this.page.click("text=Bad Request");
  }
}
