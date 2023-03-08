import { test } from "@playwright/test";
import { DemoQaPageWidgets } from "../pages/widgets-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกรอกข้อมูลใน step widgets ครบถ้วน", () => {
  test("ผู้ใช้งานเห็นข้อความใน tab accordian", async ({ page }) => {
    const demoQaPage = new DemoQaPageWidgets(page);
    await demoQaPage.expectDemoqaPageUrl();
  });
});
