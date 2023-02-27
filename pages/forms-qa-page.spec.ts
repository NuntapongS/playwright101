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
}
