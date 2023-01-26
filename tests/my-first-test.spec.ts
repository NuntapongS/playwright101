import { test } from "@playwright/test";

test.skip("get start link", async ({ page }) => {
  await page.goto(
    "https://www.tricentis.com/lp/testim-trial-test-automation-ppc?utm_source=google&utm_medium=paidsearch&utm_campaign=Testim_Search_Nonbrand_Low_APAC_EN&utm_term=website%20testing%20software&gclid=CjwKCAiA5sieBhBnEiwAR9oh2nR5cUjjSF8gU0FOiGHVGbnuK1BKg3Q1mQkBQNCH3lse7KqDZY4h_hoCINQQAvD_BwE"
  );
});

test("ผู้ใช้งานกรอกข้อมูล", async ({ page }) => {
  await page.goto(
    "https://www.tricentis.com/lp/testim-trial-test-automation-ppc?utm_source=google&utm_medium=paidsearch&utm_campaign=Testim_Search_Nonbrand_Low_APAC_EN&utm_term=website%20testing%20software&gclid=CjwKCAiA5sieBhBnEiwAR9oh2nR5cUjjSF8gU0FOiGHVGbnuK1BKg3Q1mQkBQNCH3lse7KqDZY4h_hoCINQQAvD_BwE"
  );
  const newBusiness = page.getByText("Business Email");
  const newFirstName = page.getByText("First Name");
  const newLastName = page.getByText("Last Name");
  const newPhone = page.getByText("Phone");

  await newBusiness.fill("ODDS");
  await newFirstName.fill("Nuntapong");
  await newLastName.fill("Siripanyawong");
  await newPhone.fill("0831757157");
});
