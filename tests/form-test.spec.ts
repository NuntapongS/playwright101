import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test("ผู้ใช้งานกรอกข้อมูลใน tab Practice Form", async ({ page }) => {
  await page.click("text=Forms");
  await page.click("text=Practice Form");
});
