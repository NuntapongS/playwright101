import { DemoQaPage } from "../pages/elements-qa-page.spec";
import { test } from "@playwright/test";
import { DemoQaPageAlertFrameAndWindows } from "../pages/alert-frame-and-windows";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกดปุ่มต่างๆใน step alert frame and windows", () => {
  test("ผู้งานกดปุ่มใน tab browser windows", async ({ page }) => {
    const demoQaPage = new DemoQaPageAlertFrameAndWindows(page);
    await demoQaPage.expectUrl();
  });
});
