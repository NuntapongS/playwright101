import { test } from "@playwright/test";
import { DemoQaPageBookStoreApplication } from "../pages/book-store-application-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("Book Store Application", () => {
  test("ผู้ใช้งานสมัครสมาชิก", async ({ page }) => {
    const demoQaPage = new DemoQaPageBookStoreApplication(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextBookStoreApplication();
    await demoQaPage.clickBookStoreApplication("text=Book Store Application");
    await demoQaPage.expectTabLogin();
    await demoQaPage.clickTablogin();
    await demoQaPage.expectContaintextInTabLogin();
    await demoQaPage.expectContaintextUsername();
    await demoQaPage.expectContainTextPassword();
    await demoQaPage.expectContainTextLogin();
    await demoQaPage.expectContainTextNewUser();
    await demoQaPage.clickNewUserButton();
    await demoQaPage.expectContaintextRegister();
    await demoQaPage.expectTextFirstName();
    await demoQaPage.fillFirstName("Topgun");
    await demoQaPage.expectTextLastName();
    await demoQaPage.fillLastName("Maverick");
    await demoQaPage.expectTextUserName();
    await demoQaPage.fillUserName("TopgunMaverick");
    await demoQaPage.expectTextPassword();
    await demoQaPage.fillPassword("1999");
    await demoQaPage.expectTextRegister();
    await demoQaPage.expectTextBackToLogin();
  });
});
