import { expect, test } from "@playwright/test";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.skip("ผู้ใช้งานกรอกข้อมูลใน tab Text Box แล้่วกดปุ่ม Submit", async ({
  page,
}) => {
  await page.click("text=Elements");
  await page.click("text=Text Box");
  await page
    .getByPlaceholder("Full Name")
    .type("Nuntapong Siripanyawong", { delay: 100 });
  await page
    .getByPlaceholder("name@example.com")
    .type("nuntapong@gmail.com", { delay: 100 });
  await page
    .getByPlaceholder("Current Address")
    .type("Bangkok", { delay: 100 });

  const permanentAddress = await page.$("#permanentAddress.form-control");
  await permanentAddress?.type("Phuket", { delay: 100 });
  await page.click("text=Submit");

  await expect(page.getByText(/Nuntapong Siripanyawong/i)).toBeVisible();
  await expect(page.getByText(/nuntapong@gmail.com/i)).toBeVisible();
  await expect(page.getByText(/Bangkok/i)).toBeVisible();
  await expect(page.getByText(/Phuket/i)).toBeVisible();
});

test.skip("ผู้ใช้งานกดปุ่ม checkbox ใน tab checkbox", async ({ page }) => {
  await page.click("text=Elements");
  await page.click("text=Check Box");
  await page.check("text=Home");
});

test.skip("ผู้ใช้งานกดปุ่ม radio Yes ใน tab Radio button", async ({ page }) => {
  await page.click("text=Elements");
  await page.click("text=Radio Button");
  await page.check("text=Yes");
});

test.skip("ผู้ใช้งานกดปุ่ม radio Impressive ใน tab Radio button", async ({
  page,
}) => {
  await page.click("text=Elements");
  await page.click("text=Radio Button");
  await page.check("text=Impressive");
});

test.skip("ผู้ใช้งานกรอกข้อมูลใน tab Web Tables", async ({ page }) => {
  await page.click("text=Elements");
  await page.click("text=Web Tables");
  await page.click("id=addNewRecordButton");
  await page.getByPlaceholder("First Name").type("Nuntapong", { delay: 100 });
  await page
    .getByPlaceholder("Last Name")
    .type("Siripanyawong", { delay: 100 });
  await page
    .getByPlaceholder("name@example.com")
    .type("nuntapong@gmail.com", { delay: 100 });
  await page.getByPlaceholder("Age").type("25", { delay: 100 });
  await page.getByPlaceholder("Salary").type("10000", { delay: 100 });
  await page.getByPlaceholder("Department").type("Developer", { delay: 100 });
  await page.click("text=Submit");
  await page.getByPlaceholder("Search").type("Nuntapong", { delay: 100 });
});

test("ผู้ใช้งานกดปุ่ม Double click me button ใน tab Buttons", async ({
  page,
}) => {
  await page.click("text=Elements");
  await page.click("text=Buttons");
  await page.dblclick("text=Double click me");
});
