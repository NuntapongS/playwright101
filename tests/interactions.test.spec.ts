import { test } from "@playwright/test";
import { DemoQaPageInteractions } from "../pages/interactions.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานลากข้อมูลใน step Interactions", () => {
  test.skip("ผู้ใช้งาน sorting ใน tab sortable", async ({ page }) => {
    const demoQaPage = new DemoQaPageInteractions(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextInteractions();
    await demoQaPage.clickInteractions("text=Interactions");
    await demoQaPage.expectContainTextSortable();
    await demoQaPage.clickSortable("text=Sortable");
    await demoQaPage.expectTextList();
    await demoQaPage.clickList("text=List");
    // await demoQaPage.dragItemOneToItemTwo();
    await demoQaPage.expectTextGrid();
    await demoQaPage.clickGrid("text=Grid");
    // await demoQaPage.moveBoxOneToBoxTwo();
  });
  test("ผู้ใช้งานกดปุ่มใน tab selectable", async ({ page }) => {
    const demoQaPage = new DemoQaPageInteractions(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextInteractions();
    await demoQaPage.clickInteractions("text=Interactions");
    await demoQaPage.expectContainTextSelectable();
    await demoQaPage.clickSelectable("text=Selectable");
    await demoQaPage.expectTextList();
    await demoQaPage.clickList("text=List");
    await demoQaPage.expectTextInItem1();
  });
});
