import { test } from "@playwright/test";
import { DemoQaPageBookStoreApplication } from "../pages/book-store-application-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("Book Store Application", () => {
  test("ผู้ใช้งานเข้าสู่ระบบ", async ({ page }) => {
    const demoQaPage = new DemoQaPageBookStoreApplication(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextBookStoreApplication();
    await demoQaPage.clickBookStoreApplication("text=Book Store Application");
    await demoQaPage.expectTabLogin();
  });
});
