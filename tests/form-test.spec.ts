import { test } from "@playwright/test";
import { DemoQaPageForms } from "../pages/forms-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกรอกข้อมูลใน Tab Forms ครบถ้วน", () => {
  test("ผู้ใช้งานกรอกข้อมูลใน tab Practice Form", async ({ page }) => {
    const demoQaPageForms = new DemoQaPageForms(page);
    await demoQaPageForms.expectDemoqaUrl();
    await demoQaPageForms.expectContainTextForms();
    await demoQaPageForms.clickForms("text=Forms");
    await demoQaPageForms.expectPracticeForm();
    await demoQaPageForms.clickForms("text=Practice Form");
    await demoQaPageForms.expectStudentRegistrationForm();
  });
});
