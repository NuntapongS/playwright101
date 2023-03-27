import { test } from "@playwright/test";
import { DemoQaPageInteractions } from "../pages/interactions.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานลากข้อมูลใน step Interactions", () => {
  test("ผู้ใช้งาน sorting ใน tab sortable", async ({ page }) => {
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
    await demoQaPage.clickItem1("text=Cras justo odio");
    await demoQaPage.exepectTextInItem2();
    await demoQaPage.clickItem2("text=Dapibus ac facilisis in");
    await demoQaPage.expectTextInItem3();
    await demoQaPage.clickItem3("text=Morbi leo risus");
    await demoQaPage.expectTextInItem4();
    await demoQaPage.clickItem4("text=Porta ac Consectetur ac");
    await demoQaPage.expectTextGrid();
    await demoQaPage.clickGrid("text=Grid");
    await demoQaPage.expectTextInItem1InHeaderGrid();
    await demoQaPage.expectTextInItem2InHeaderGrid();
    await demoQaPage.expectTextInItem3InHeaderGrid();
    await demoQaPage.expectTextInItem4InHeaderGrid();
    await demoQaPage.expectTextInItem5InHeaderGrid();
    await demoQaPage.expectTextInItem6InHeaderGrid();
    await demoQaPage.expectTextInItem7InHeaderGrid();
    await demoQaPage.expectTextInItem8InHeaderGrid();
    await demoQaPage.expectTextInItem9InHeaderGrid();
    await demoQaPage.clickItemInHeaderGrid("text=One");
    await demoQaPage.clickItemInHeaderGrid("text=Two");
    await demoQaPage.clickItemInHeaderGrid("text=Three");
    await demoQaPage.clickItemInHeaderGrid("text=Four");
    await demoQaPage.clickItemInHeaderGrid("text=Five");
    await demoQaPage.clickItemInHeaderGrid("text=Six");
    await demoQaPage.clickItemInHeaderGrid("text=Seven");
    await demoQaPage.clickItemInHeaderGrid("text=Eight");
    await demoQaPage.clickItemInHeaderGrid("text=Nine");
  });
  test("ผู้ใช้งานกดปุ่มใน tab resizable", async ({ page }) => {
    const demoQaPage = new DemoQaPageInteractions(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextInteractions();
    await demoQaPage.clickInteractions("text=Interactions");
    await demoQaPage.expectContainTextResizable();
    await demoQaPage.clickResizable("text=Resizable");
    // await demoQaPage.resizable();
  });
  test("ผู้ใช้งาน drag and drop ใน tab droppable", async ({ page }) => {
    const demoQaPage = new DemoQaPageInteractions(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextInteractions();
    await demoQaPage.clickInteractions("text=Interactions");
    await demoQaPage.expectContainTextDroppable();
    await demoQaPage.clickDroppable("text=Droppable");
  });
});
