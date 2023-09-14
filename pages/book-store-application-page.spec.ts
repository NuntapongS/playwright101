import { Locator, Page, expect } from "@playwright/test";

export class DemoQaPageBookStoreApplication {
  readonly page: Page;
  readonly textBookStoreApplication: Locator;
  readonly textLogin: Locator;
  readonly textWelcome: Locator;
  readonly textLoginBookStore: Locator;
  readonly textUsername: Locator;
  readonly textPassword: Locator;
  readonly textNewUser: Locator;
  readonly textRegisterBookStore: Locator;
  readonly textFirstName: Locator;
  readonly textLastName: Locator;
  readonly textRegister: Locator;
  readonly textBacktoLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textBookStoreApplication = page.getByText(/Book Store Application/i);
    this.textLogin = page.getByRole("listitem").filter({ hasText: "Login" });
    this.textWelcome = page.getByText(/Welcome,/i);
    this.textLoginBookStore = page.getByText(/Login in Book Store/i);
    this.textUsername = page.getByText(/Username/i);
    this.textPassword = page.getByText(/Password/i);
    this.textNewUser = page.getByText(/New User/i);
    this.textRegisterBookStore = page.getByText(/Register to Book Store/i);
    this.textFirstName = page.getByText(/First Name/i);
    this.textLastName = page.getByText(/Last Name/i);
    this.textRegister = page.getByText(/Register/i).nth(2);
    this.textBacktoLogin = page.getByText(/Back to Login/i);
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextBookStoreApplication() {
    await expect(this.textBookStoreApplication).toBeVisible();
  }

  async clickBookStoreApplication(bookStoreApplication: string) {
    await this.page.click(bookStoreApplication);
  }

  async expectTabLogin() {
    await expect(this.textLogin).toBeVisible();
  }

  async clickTablogin() {
    await this.textLogin.click();
  }

  async expectContaintextInTabLogin() {
    await expect(this.textWelcome).toBeVisible();
    await expect(this.textLoginBookStore).toBeVisible();
  }

  async expectContaintextUsername() {
    await expect(this.textUsername).toBeVisible();
  }

  async expectContainTextPassword() {
    await expect(this.textPassword).toBeVisible();
  }

  async expectContainTextLogin() {
    await expect(this.textLogin).toBeVisible();
  }

  async expectContainTextNewUser() {
    await expect(this.textNewUser).toBeVisible();
  }

  async clickNewUserButton() {
    await this.textNewUser.click();
  }

  async expectContaintextRegister() {
    await expect(this.textRegisterBookStore).toBeVisible();
  }

  async expectTextFirstName() {
    await expect(this.textFirstName).toBeVisible();
  }

  async fillFirstName(firstName: string) {
    await this.page.getByPlaceholder("First Name").type(firstName);
  }

  async expectTextLastName() {
    await expect(this.textLastName).toBeVisible();
  }

  async fillLastName(lastName: string) {
    await this.page.getByPlaceholder("Last Name").type(lastName);
  }

  async expectTextUserName() {
    await expect(this.textUsername).toBeVisible();
  }

  async fillUserName(userName: string) {
    await this.page.getByPlaceholder("UserName").type(userName);
  }

  async expectTextPassword() {
    await expect(this.textPassword).toBeVisible();
  }

  async fillPassword(password: string) {
    await this.page.getByPlaceholder("Password").type(password);
  }

  async expectTextRegister() {
    await expect(this.textRegister).toBeVisible();
  }

  async expectTextBackToLogin() {
    await expect(this.textBacktoLogin).toBeVisible();
  }
}
