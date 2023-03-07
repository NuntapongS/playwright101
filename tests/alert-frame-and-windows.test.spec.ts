import { DemoQaPage } from "../pages/elements-qa-page.spec";
import { test } from "@playwright/test";
import { DemoQaPageAlertFrameAndWindows } from "../pages/alert-frame-and-windows.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกดปุ่มต่างๆใน step alert frame and windows", () => {
  test.skip("ผู้งานกดปุ่มใน tab browser windows", async ({ page }) => {
    const demoQaPage = new DemoQaPageAlertFrameAndWindows(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextAlertFrameAndWindows();
    await demoQaPage.clickAlertFrameAndWindows("text=Alerts, Frame & Windows");
    await demoQaPage.clickBrowserWindows("text=Browser Windows");
    await demoQaPage.clickNewTab("text=New Tab");
    await demoQaPage.gotoNewTabFromNewTabButton();
    await demoQaPage.gotoModalNewWindows();
    await demoQaPage.clickNewTabNewWindowMessage("text=New Window Message");
  });
  test.skip("ผู้ใช้งานกดปุ่มต่างๆใน tab alerts", async ({ page }) => {
    const demoQaPage = new DemoQaPageAlertFrameAndWindows(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextAlertFrameAndWindows();
    await demoQaPage.clickAlertFrameAndWindows("text=Alerts, Frame & Windows");
    await demoQaPage.clickAlerts("text=Alerts");
    await demoQaPage.expectButtonAlert();
    await demoQaPage.clickButtonToSeeAlert("text=Click Me");
    await demoQaPage.expectButtonAlertWillAppearAfterFiveSecond();
    await demoQaPage.clickButtonToSeeAlertWillAppearAfterFiveSecond(
      "text=Click Me"
    );
    await demoQaPage.expectButtonAlertWithOkCancel();
    await demoQaPage.clickButtonConfirmBoxWillAppear("text=Click Me");
    await demoQaPage.expectTextPromptBox();
    await demoQaPage.clickButtonPromptBox("text=Click Me");
  });
  test.skip("ผู้ใช้งานเห็นข้อความใน tab frame", async ({ page }) => {
    const demoQaPage = new DemoQaPageAlertFrameAndWindows(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextAlertFrameAndWindows();
    await demoQaPage.clickAlertFrameAndWindows("text=Alerts, Frame & Windows");
    await demoQaPage.clickFrames("text=Frames");
    await demoQaPage.expectTextInTabFrames();
  });
  test("ผู้ใช้งานเห็นข้อความใน tab nested frames", async ({ page }) => {
    const demoQaPage = new DemoQaPageAlertFrameAndWindows(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectTextAlertFrameAndWindows();
    await demoQaPage.clickAlertFrameAndWindows("text=Alerts, Frame & Windows");
    await demoQaPage.clickNestedFrames("text=Nested Frames");
  });
});
