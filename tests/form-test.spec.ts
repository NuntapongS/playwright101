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
    await demoQaPageForms.expectName();
    await demoQaPageForms.typeFirstName("Topgun");
    await demoQaPageForms.typeLastName("Maverick");
    await demoQaPageForms.expectEmail();
    await demoQaPageForms.typeEmail("marverick@gmail.com")
    await demoQaPageForms.expectGender();
    await demoQaPageForms.checkGender();
    await demoQaPageForms.expectMobileNumber();
    await demoQaPageForms.typeMobileNumber("0812345678");
    await demoQaPageForms.expectDateOfBirth();
    await demoQaPageForms.clickDateOfBirth();
    await demoQaPageForms.expectSubjects();
    await demoQaPageForms.typeSubjects("Developer");
    await demoQaPageForms.expectHobbies();
    await demoQaPageForms.checkSportsHobbies();
    await demoQaPageForms.checkReadingHobbies();
    
  });
});
