import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test("ผู้ใช้งานกรอกข้อมูลใน tab Practice Form", async ({ page }) => {
  await page.click("text=Forms");
  await page.click("text=Practice Form");
  await page.getByPlaceholder("First Name").type("Nuntapong", { delay: 100 });
  await page
    .getByPlaceholder("Last Name")
    .type("Siripanyawong", { delay: 100 });
  await page
    .getByPlaceholder("name@example.com")
    .type("nuntapong@gmail.com", { delay: 100 });
  //   await page.check("input[name=gender][value=Male]");
  await page
    .getByPlaceholder("Mobile Number")
    .type("0831757157", { delay: 100 });
});
