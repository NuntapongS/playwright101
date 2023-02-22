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
    await this.page.getByPlaceholder("First Name").type("Topgun");
  }
  
}
