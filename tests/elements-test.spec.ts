import { test } from "@playwright/test";
import { DemoQaPage } from "../pages/elements-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกรอกข้อมูลใน tab Text Box", () => {
  test("ผู้ใช้กรอกข้อมูลใน tab Text box ครบถ้วน", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Text Box");
    await demoQaPage.typeFullname("Maverick");
    await demoQaPage.typeEmail("marverick@gmail.com");
    await demoQaPage.typeCurrentAddress("Bangkok");
    await demoQaPage.typePermanentAddress("Phuket");
    await demoQaPage.clickElement("text=Submit");
    await demoQaPage.expectContainName();
    await demoQaPage.expectContainEmail();
  });
});
