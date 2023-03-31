import { Page, expect } from "@playwright/test";

export class DemoQaPageBookStoreApplication {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextBookStoreApplication() {
    await expect(this.page.getByText(/Book Store Application/i)).toBeVisible();
  }

  async clickBookStoreApplication(bookStoreApplication: string) {
    await this.page.click(bookStoreApplication);
  }

  async expectTabLogin() {
    await expect(this.page.locator("text=Login").first()).toBeVisible();
  }

  async clickTablogin() {
    await this.page.click("text=Login");
  }

  async expectContaintextInTabLogin() {
    await expect(this.page.getByText(/Welcome,/i)).toBeVisible();
    await expect(this.page.getByText(/Login in Book Store/i)).toBeVisible();
  }

  async expectContaintextUsername() {
    await expect(this.page.getByText(/Username/i)).toBeVisible();
  }

  async expectContainTextPassword() {
    await expect(this.page.getByText(/Password/i)).toBeVisible();
  }

  async expectContainTextLogin() {
    await expect(this.page.getByText(/Login/i).nth(2)).toBeVisible();
  }

  async expectContainTextNewUser() {
    await expect(this.page.getByText(/New User/i)).toBeVisible();
  }

  async clickNewUserButton() {
    await this.page.click("text=New User");
  }

  async expectContaintextRegister() {
    await expect(this.page.getByText(/Register to Book Store/i)).toBeVisible();
  }

  async expectTextFirstName() {
    await expect(this.page.getByText(/First Name/i)).toBeVisible();
  }

  async fillFirstName(firstName: string) {
    await this.page.getByPlaceholder("First Name").type(firstName);
  }

  async expectTextLastName() {
    await expect(this.page.getByText(/Last Name/i)).toBeVisible();
  }
}
