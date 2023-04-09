import { expect, Page, Locator } from "@playwright/test";

export class DemoQaPage {
  readonly page: Page;
  readonly textElements: Locator;
  readonly textBox: Locator;
  readonly fullName: Locator;
  readonly email: Locator;
  readonly address: Locator;
  readonly permanentAddress: Locator;
  readonly submitButton: Locator;
  readonly expectName: Locator;
  readonly expectEmail: Locator;
  readonly expectCurrentAddress: Locator;
  readonly expectPermanentAddress: Locator;
  readonly checkBox: Locator;
  readonly checkBoxHome: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textElements = page.getByText(/Elements/i);
    this.textBox = page.getByText(/Text Box/i);
    this.fullName = page.getByPlaceholder("Full Name");
    this.email = page.getByPlaceholder("name@example");
    this.address = page.getByPlaceholder("Current Address");
    this.permanentAddress = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.expectName = page.getByText(/Maverick/i);
    this.expectEmail = page.getByText(/marverick@gmail.com/i);
    this.expectCurrentAddress = page.getByText(/Bangkok/i);
    this.expectPermanentAddress = page.getByText(/Phuket/i);
    this.checkBox = page.getByText(/Check Box/i);
    this.checkBoxHome = page.getByText(/Home/i);
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextElements() {
    await expect(this.textElements).toBeVisible();
  }

  async clickElement() {
    await this.textElements.click();
  }

  async clickTextbox() {
    await this.textBox.click();
  }

  async typeFullname() {
    await this.fullName.type("Maverick");
  }

  async typeEmail() {
    await this.email.type("marverick@gmail.com");
  }

  async typeCurrentAddress() {
    await this.address.type("Bangkok");
  }

  async typePermanentAddress() {
    await this.permanentAddress.type("Phuket");
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async expectContainName() {
    await expect(this.expectName).toBeVisible();
  }

  async expectContainEmail() {
    await expect(this.expectEmail).toBeVisible();
  }

  async expectContainCurrentAddress() {
    await expect(this.expectCurrentAddress).toBeVisible();
  }

  async expectContainPermanentAddress() {
    await expect(this.expectPermanentAddress).toBeVisible();
  }

  async expectContainCheckBox() {
    await expect(this.checkBox).toBeVisible();
  }

  async clickTabCheckBox() {
    await this.checkBox.click();
  }

  async checkbox() {
    await this.page.getByText(/Home/i).click();
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

  async expectContainTextBadRequest() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 400 and status text Bad Request/i
      )
    ).toBeVisible();
  }

  async clickUnauthorized() {
    await this.page.click("text=Unauthorized");
  }

  async expectContainTextUnauthorized() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 401 and status text Unauthorized/i
      )
    ).toBeVisible();
  }

  async clickForbidden() {
    await this.page.click("text=Forbidden");
  }

  async expectContainTextForbidden() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 403 and status text Forbidden/i
      )
    ).toBeVisible();
  }

  async clickNotFound() {
    await this.page.click("text=Not Found");
  }

  async expectContainTextNotFound() {
    await expect(
      this.page.getByText(
        /Link has responded with staus 404 and status text Not Found/i
      )
    ).toBeVisible();
  }

  async expectContainTextValidImage() {
    await expect(this.page.getByText(/Valid image/i)).toBeVisible();
  }

  async expectContainTextBrokenImage() {
    await expect(this.page.getByText(/Broken image/i)).toBeVisible();
  }

  async clickValidLink() {
    await this.page.click("text=Click Here for Valid Link");
  }

  async clickBrokenLink() {
    await this.page.click("text=Click Here for Broken Link", { timeout: 9000 });
  }

  async expectUrlBrokenLink() {
    await expect(this.page).toHaveURL(
      "http://the-internet.herokuapp.com/status_codes/500"
    );
  }

  async clickDownloadButton() {
    await this.page.click("text=Download");
  }

  async expectContainTextSelectAFile() {
    await expect(this.page.getByText(/Select a file/i)).toBeVisible();
  }

  async chooseFile() {
    await this.page.setInputFiles(
      "input[type=file]",
      "/Users/nuntapongsiripanyawong/workspace/learning/playwright101/images/click-PNG-free-PNG-Images_82736.html"
    );
  }

  async expectContaintextDynamicProperties() {
    await expect(this.page.getByText(/This text has random id/i)).toBeVisible();
  }

  async expectContainTextEnableButton() {
    await expect(this.page.getByText(/Will enable 5 seconds/i)).toBeVisible();
  }

  async clickEnableButton() {
    await this.page.click("text=Will enable 5 seconds", { timeout: 10000 });
  }

  async expectContainTextColorChangeButton() {
    await expect(this.page.getByText(/Color Change/i)).toBeVisible();
  }
}
