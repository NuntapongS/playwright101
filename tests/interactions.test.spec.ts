import { test } from "@playwright/test";
import { DemoQaPageInteractions } from "../pages/interactions.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานลากข้อมูลใน step Interactions", () => {
  test("ผู้ใช้งาน sorting ใน tab sortable", async ({ page }) => {
    const DemoQaPage = new DemoQaPageInteractions(page);
    await DemoQaPage.expectUrl();
    await DemoQaPage.expectTextInteractions();
    await DemoQaPage.clickInteractions("text=Interactions");
  });
});
