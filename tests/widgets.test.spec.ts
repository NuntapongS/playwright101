import { test } from "@playwright/test";
import { DemoQaPageWidgets } from "../pages/widgets-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("ผู้ใช้งานกรอกข้อมูลใน step widgets ครบถ้วน", () => {
  test.skip("ผู้ใช้งานเห็นข้อความใน tab accordian", async ({ page }) => {
    const demoQaPage = new DemoQaPageWidgets(page);
    await demoQaPage.expectDemoqaPageUrl();
    await demoQaPage.expectContainTextWidgets();
    await demoQaPage.clickWidgets("text=Widgets");
    await demoQaPage.expectContainTextAccordian();
    await demoQaPage.clickAccordian("text=Accordian");
    await demoQaPage.expectContainTextWhatIsLoremIpsum();
    await demoQaPage.clickWhatIsLoremIpsum("text=What is Lorem Ipsum?");
    await demoQaPage.clickWhatIsLoremIpsumAgain("text=What is Lorem Ipsum?");
    await demoQaPage.expectTextInFieldWhatIsLoremIpsum();
    await demoQaPage.expectContainTextWhereDoesItComeFrom();
    await demoQaPage.clickWhereDoesItComeFrom("text=Where does it come from?");
    await demoQaPage.expectTextFieldWhereDoesItComeFrom();
    await demoQaPage.expectContainTextWhyDoWeUseIt();
    await demoQaPage.clickWhyDoWeUseIt("text=Why do we use it?");
    await demoQaPage.expectTextFieldWhyDoWeUseIt();
  });
  test("ผู้ใช้งานกรอกสีใน tab auto complete", async ({ page }) => {
    const demoQaPage = new DemoQaPageWidgets(page);
    await demoQaPage.expectDemoqaPageUrl();
    await demoQaPage.expectContainTextWidgets();
    await demoQaPage.clickWidgets("text=Widgets");
    await demoQaPage.expectContainTextAutoComplete();
    await demoQaPage.clickAutoComplete("text=Auto Complete");
    await demoQaPage.expectContainTextTypeMultipleColorNames();
    await demoQaPage.typeColorInField("Red, Green");
    await demoQaPage.expectContainTextTypeSingleColorName();
    await demoQaPage.typeColorInFieldSingleColorName("Blue");
  });
});
