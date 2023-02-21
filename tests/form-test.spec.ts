import { test } from "@playwright/test";
import { DemoQaPage } from "../pages/elements-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

describe("ผู้ใช้งานกรอกข้อมูลใน Tab Forms ครบถ้วน", () => {
  test("ผู้ใช้งานกรอกข้อมูลใน tab Practice Form", async ({ page }) => {
    const demoqaPage = new DemoQaPage(page);
    demoqaPage.expectUrl();
  });
});
