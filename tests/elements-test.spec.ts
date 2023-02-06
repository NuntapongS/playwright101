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
    await demoQaPage.expectContainCurrentAddress();
    await demoQaPage.expectContainPermanentAddress();
  });
  test("ผู้ใช้งานกด checkbox ใน tab Check Box", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Check Box");
    await demoQaPage.checkbox();
  });
  test("ผู้ใช้งานกด radio button Yes ใน tab Radio Button", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Radio Button");
    await demoQaPage.clickRadioButtonYes();
  });

  test("ผู้ใช้งานกด radio button Impressive ใน tab Radio Button", async ({
    page,
  }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Radio Button");
    await demoQaPage.clickRadioButtonImpressive();
  });

  test("ผู้ใช้งานกดเพิ่มข้อมูลใน tab Web Tables", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Web Tables");
    await demoQaPage.clickAddButton();
    await demoQaPage.typeFirstName("Topgun");
    await demoQaPage.typeLastName("Maverick");
    await demoQaPage.typeEmail("marverick@gmail.com");
    await demoQaPage.typeAge("30");
    await demoQaPage.typeSalary("30000");
    await demoQaPage.typeDepartment("Developer");
    await demoQaPage.clickSubmitButton();
    await demoQaPage.expectContainFirstName();
    await demoQaPage.expectContainLastName();
    await demoQaPage.expectContainEmail();
    await demoQaPage.expectContaiDepartment();
  });
  test("ผู้ใช้งานกด double click ปุ่ม Double Click Me", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.clickElement("text=Elements");
    await demoQaPage.clickTextbox("text=Buttons");
    await demoQaPage.clickDoubleButton();
  });
});
