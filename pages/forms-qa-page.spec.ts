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

  async clickForms(forms: string) {
    await this.page.click(forms);
  }

  async expectPracticeForm() {
    await expect(this.page.getByText(/Practice Form/i)).toBeVisible();
  }
}
