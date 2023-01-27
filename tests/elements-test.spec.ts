import { test } from "@playwright/test";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test("ผู้ใช้งานกรอกข้อมูลใน Text Box แล้่วกดปุ่ม Submit", async ({ page }) => {
  await page.click("text=Elements");
  await page.click("text=Text Box");
  await page
    .getByPlaceholder("Full Name")
    .type("Nuntapong Siripanyawong", { delay: 50 });
  await page
    .getByPlaceholder("name@example.com")
    .type("nuntapong@gmail.com", { delay: 50 });
  await page.getByPlaceholder("Current Address").type("Bangkok", { delay: 50 });
  const permanentAddress = await page.$("#permanentAddress.form-control");
  await permanentAddress?.type("Phuket", { delay: 50 });
  await page.click("text=Submit");
  const expectName = await page.$("#name");
  await expectName?.type("Nuntapong Siripanyawong");
  const expectEmail = await page.$("#email");
  await expectEmail?.type("nuntapong@gmail.com");
  const expectCurrentAddress = await page.$("#currentAddress");
  await expectCurrentAddress?.type("Bangkok");
  const expectPermanentAddress = await page.$("#permanentAddress");
  await expectPermanentAddress?.type("Phuket");
});
