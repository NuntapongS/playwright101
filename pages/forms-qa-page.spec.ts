import { expect, Page } from "@playwright/test";

export class DemoQaPageForms {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectDemoqaUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextForms() {
    await expect(this.page.getByText(/Forms/i)).toBeVisible();
  }

  async expectPracticeForm() {
    await expect(this.page.getByText(/Practice Form/i)).toBeVisible();
  }

  async clickForms(forms: string) {
    await this.page.click(forms);
  }

  async expectStudentRegistrationForm() {
    await expect(this.page.getByText(/Student Registration Form/i)).toBeVisible();
  }

  async expectName() {
    await expect(this.page.getByText(/Name/i)).toBeVisible();
  }

  async typeFirstName(firstName: string) {
    await this.page.getByPlaceholder("First Name").type(firstName);
  }

  async typeLastName(lastName: string) {
    await this.page.getByPlaceholder("Last Name").type(lastName);
  }

  async expectEmail() {
    await expect(this.page.getByText(/Email/i)).toBeVisible();
  }
  
  async typeEmail(email: string) {
    await this.page.getByPlaceholder("name@example").type(email);
  }

  async expectGender() {
    await expect(this.page.getByText(/Gender/i)).toBeVisible();
  }

  async checkGender() {
    await this.page.click("input#gender-radio-1", {force: true});
  }

  async expectMobileNumber() {
    await expect(this.page.getByText(/Mobile/i)).toBeVisible();
  }

  async typeMobileNumber(mobileNumber: string) {
    await this.page.getByPlaceholder("Mobile Number").type(mobileNumber);
  }

  async expectDateOfBirth() {
    await expect(this.page.getByText(/Date of Birth/i)).toBeVisible();
  }

  async clickDateOfBirth() {
    await this.page.click("input#dateOfBirthInput");
    await this.page.locator("text=10").last().click();
  }

  async expectSubjects() {
    await expect(this.page.getByText(/Subjects/i)).toBeVisible();
  }

  async typeSubjects(subjects : string) {
    const subjectsInput = await this.page.$("input#subjectsInput");
    await subjectsInput?.type(subjects);
  }

  async expectHobbies() {
    await expect(this.page.getByText(/Hobbies/i)).toBeVisible();
  }

  async checkSportsHobbies() {
    await this.page.click("input#hobbies-checkbox-1", {force: true});
  }

  async checkReadingHobbies() {
    await this.page.click("input#hobbies-checkbox-2", {force: true});
  }

  async checkMusicHobbies() {
    await this.page.click("input#hobbies-checkbox-3", {force: true});
  }

  async expectPicture() {
    await expect(this.page.locator('text=Picture').first()).toBeVisible();
  }

  async expectSelectPicture() {
    await expect(this.page.getByText(/Select Picture/i)).toBeVisible();
  }

  async clickChooseFile() {
    await this.page.setInputFiles("input[type='file']", '/Users/nuntapongsiripanyawong/workspace/learning/playwright101/images/click-PNG-free-PNG-Images_82736.html');
  }

  async expectCurrentAddress() {
    await expect(this.page.getByText(/Current Address/i)).toBeVisible();
  }

  async typeCurrentAddress(currentAddress: string) {
    await this.page.getByPlaceholder("Current Address").type(currentAddress);
  }

  async expectStateAndCity() {
    await expect(this.page.getByText(/State and City/i)).toBeVisible();
  }

  async enterSubmit() {
    await this.page.press("body", "Enter");
  }
}
