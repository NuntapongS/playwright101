import { expect, test } from "@playwright/test";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test("ผู้ใช้งานกรอกข้อมูลใน Text Box แล้่วกดปุ่ม Submit", async ({ page }) => {
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
});
