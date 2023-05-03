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
  readonly checkBoxTextHome: Locator;
  readonly radioButtonText: Locator;
  readonly radioButtonYes: Locator;
  readonly expectTextWhenClickRadioButtonYes: Locator;
  readonly radioButtonImpressive: Locator;
  readonly expectTextWhenClickRadioButtonImpressive: Locator;
  readonly webTables: Locator;
  readonly addButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly expectFirstName: Locator;
  readonly expectLastName: Locator;
  readonly expectAge: Locator;
  readonly expectDepartment: Locator;
  readonly buttonsTab: Locator;
  readonly doubleClickMe: Locator;
  readonly expectTextWhenDoubleClick: Locator;
  readonly rightClickMe: Locator;
  readonly expectTextWhenRightClick: Locator;
  readonly dynamicButton: Locator;
  readonly expectTextWhenClickDynamicButton: Locator;
  readonly links: Locator;
  readonly expectTextInLinkOpenNewTab: Locator;
  readonly home: Locator;
  readonly expectTextLinkApiCall: Locator;
  readonly textCreated: Locator;
  readonly expectTextWhenClickTextCreatedLink: Locator;
  readonly noContent: Locator;
  readonly expectTextNoContent: Locator;
  readonly moved: Locator;
  readonly expectTextWhenClickMovedLink: Locator;
  readonly badRequest: Locator;
  readonly expectTextWhenClickBadRequestLink: Locator;
  readonly unauthorized: Locator;
  readonly expectTextWhenClickUnauthorizedLink: Locator;
  readonly forbidden: Locator;
  readonly expectContainTextWhenClickForbiddenLink: Locator;
  readonly notFound: Locator;
  readonly expectContainTextWhenUserClickNotFoundLink: Locator;

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
    this.checkBoxTextHome = page.getByText(/Home/i);
    this.radioButtonText = page.getByText(/Radio Button/i);
    this.radioButtonYes = page.getByText(/Yes/i);
    this.expectTextWhenClickRadioButtonYes = page.getByText(
      /You have selected Yes/i
    );
    this.radioButtonImpressive = page.getByText(/Impressive/i);
    this.expectTextWhenClickRadioButtonImpressive = page.getByText(
      /You have selected Impressive/i
    );
    this.webTables = page.getByText(/Web Tables/i);
    this.addButton = page.getByRole("button", { name: "Add" });
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.age = page.getByPlaceholder("Age");
    this.salary = page.getByPlaceholder("Salary");
    this.department = page.getByPlaceholder("Department");
    this.expectFirstName = page.getByText(/Topgun/i);
    this.expectLastName = page.getByText(/Maverick/i);
    this.expectAge = page.getByText(/30/i);
    this.expectDepartment = page.getByText(/Developer/i);
    this.buttonsTab = page.getByText(/Buttons/i);
    this.doubleClickMe = page.getByText(/Double Click Me/i);
    this.expectTextWhenDoubleClick = page.getByText(
      /You have done a double click/i
    );
    this.rightClickMe = page.getByText(/Right Click Me/i);
    this.expectTextWhenRightClick = this.page.getByText(
      /You have done a right click/i
    );
    this.dynamicButton = page.getByRole("button", {
      name: "Click Me",
      exact: true,
    });
    this.expectTextWhenClickDynamicButton = page.getByText(
      "You have done a dynamic click"
    );
    this.links = page.getByText(/Links/i).first();
    this.expectTextInLinkOpenNewTab = page.getByText(
      "Following links will open new tab"
    );
    this.home = page.getByText(/Home/i).first();
    this.expectTextLinkApiCall = page.getByText(
      /Following links will send an api call/
    );
    this.textCreated = page.getByText(/Created/i);
    this.expectTextWhenClickTextCreatedLink = page.getByText(
      /Link has responded with staus 201 and status text Created/i
    );
    this.noContent = page.getByText("No Content");
    this.expectTextNoContent = page.getByText(
      /Link has responded with staus 204 and status text No Content/i
    );
    this.moved = page.getByText("Moved");
    this.expectTextWhenClickMovedLink = page.getByText(
      /Link has responded with staus 301 and status text Moved Permanently/i
    );
    this.badRequest = page.getByText("Bad Request");
    this.expectTextWhenClickBadRequestLink = page.getByText(
      /Link has responded with staus 400 and status text Bad Request/i
    );
    this.unauthorized = page.getByText("Unauthorized");
    this.expectTextWhenClickUnauthorizedLink = page.getByText(
      /Link has responded with staus 401 and status text Unauthorized/i
    );
    this.forbidden = page.getByText("Forbidden");
    this.expectContainTextWhenClickForbiddenLink = page.getByText(
      /Link has responded with staus 403 and status text Forbidden/i
    );
    this.notFound = page.getByText("Not Found");
    this.expectContainTextWhenUserClickNotFoundLink = page.getByText(
      /Link has responded with staus 404 and status text Not Found/i
    );
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
    await this.checkBoxTextHome.click();
  }

  async expectContainRadioButton() {
    await expect(this.radioButtonText).toBeVisible();
  }

  async clickTabRadioButton() {
    await this.radioButtonText.click();
  }

  async expectRadioButtonYes() {
    await expect(this.radioButtonYes).toBeVisible();
  }

  async clickRadioButtonYes() {
    await this.radioButtonYes.click();
  }

  async expectContainTextWhenClickRadioButtonYes() {
    await expect(this.expectTextWhenClickRadioButtonYes).toBeVisible();
  }

  async expectRadioButtonImpressive() {
    await expect(this.radioButtonImpressive).toBeVisible();
  }

  async clickRadioButtonImpressive() {
    await this.radioButtonImpressive.click();
  }

  async expectContainTextWhenClickRadioButtonImpressive() {
    await expect(this.expectTextWhenClickRadioButtonImpressive).toBeVisible();
  }

  async expectContainWebTables() {
    await expect(this.webTables).toBeVisible();
  }

  async clickTabWebTables() {
    await this.webTables.click();
  }

  async expectContainAddButton() {
    await expect(this.addButton).toBeVisible();
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async typeFirstName() {
    await this.firstName.type("Topgun");
  }

  async typeLastName() {
    await this.lastName.type("Maverick");
  }

  async typeAge() {
    await this.age.type("30");
  }

  async typeSalary() {
    await this.salary.type("42500");
  }

  async typeDepartment() {
    await this.department.type("Developer");
  }

  async expectSubmitButton() {
    await expect(this.submitButton).toBeVisible();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async expectContainFirstName() {
    await expect(this.expectFirstName).toBeVisible();
  }

  async expectContainLastName() {
    await expect(this.expectLastName).toBeVisible();
  }

  async expectContainAge() {
    await expect(this.expectAge).toBeVisible();
  }

  async expectContaiDepartment() {
    await expect(this.expectDepartment).toBeVisible();
  }

  async expectContainButtons() {
    await expect(this.buttonsTab).toBeVisible();
  }

  async clickButtonsTab() {
    await this.buttonsTab.click();
  }

  async expectContainDoubleClickButton() {
    await expect(this.doubleClickMe).toBeVisible();
  }

  async doubleClick() {
    await this.doubleClickMe.dblclick();
  }

  async expectContainDoubleClick() {
    await expect(this.expectTextWhenDoubleClick).toBeVisible();
  }

  async expectContainRightClickMeButton() {
    await expect(this.rightClickMe).toBeVisible();
  }

  async clickRightClick() {
    await this.rightClickMe.click({ button: "right" });
  }

  async expectContainRightClick() {
    await expect(this.expectTextWhenRightClick).toBeVisible();
  }

  async expectContainDynamicClickMeButton() {
    await expect(this.dynamicButton).toBeVisible();
  }

  async clickDynamicClickMeButton() {
    await this.dynamicButton.click();
  }

  async expectContainDynamicClick() {
    await expect(this.expectTextWhenClickDynamicButton).toBeVisible();
  }

  async expectContainLinks() {
    await expect(this.links).toBeVisible();
  }

  async clickLinksTab() {
    await this.links.click();
  }

  async expectContainLinkOpenNewTab() {
    await expect(this.expectTextInLinkOpenNewTab).toBeVisible();
  }

  async expectLinkHome() {
    await expect(this.home).toBeVisible();
  }

  async clickLinkHome() {
    await this.home.click();
  }

  async expectContainLinkHome() {
    expect(this.page.url()).toContain("demoqa.com");
  }

  async expectContainLinkApiCall() {
    await expect(this.expectTextLinkApiCall).toBeVisible();
  }

  async expectTextCreated() {
    await expect(this.textCreated).toBeVisible();
  }

  async clickCreatedLink() {
    await this.textCreated.click();
  }

  async expectContainTextCratedLink() {
    await expect(this.expectTextWhenClickTextCreatedLink).toBeVisible();
  }

  async expectContainNoContentLink() {
    await expect(this.noContent).toBeVisible();
  }

  async clickNoContentLink() {
    await this.noContent.click();
  }

  async expectContainTextNoContent() {
    await expect(this.expectTextNoContent).toBeVisible();
  }

  async expectContainMoved() {
    await expect(this.moved).toBeVisible();
  }

  async clickMoved() {
    await this.moved.click();
  }

  async expectContainTextMoved() {
    await expect(this.expectTextWhenClickMovedLink).toBeVisible();
  }

  async expectContainBadRequest() {
    await expect(this.badRequest).toBeVisible();
  }

  async clickBadRequest() {
    await this.badRequest.click();
  }

  async expectContainTextBadRequest() {
    await expect(this.expectTextWhenClickBadRequestLink).toBeVisible();
  }

  async expectContainUnauthorized() {
    await expect(this.unauthorized).toBeVisible();
  }

  async clickUnauthorized() {
    await this.unauthorized.click();
  }

  async expectContainTextUnauthorized() {
    await expect(this.expectTextWhenClickUnauthorizedLink).toBeVisible();
  }

  async expectContainForbidden() {
    await expect(this.forbidden).toBeVisible();
  }

  async clickForbidden() {
    await this.forbidden.click();
  }

  async expectContainTextForbidden() {
    await expect(this.expectContainTextWhenClickForbiddenLink).toBeVisible();
  }

  async expectContainNotFound() {
    await expect(this.notFound).toBeVisible();
  }

  async clickNotFound() {
    await this.notFound.click();
  }

  async expectContainTextNotFound() {
    await expect(this.expectContainTextWhenUserClickNotFoundLink).toBeVisible();
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
