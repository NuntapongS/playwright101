import { test } from "@playwright/test";
import { DemoQaPage } from "../pages/elements-qa-page.spec";

// go to link https://demoqa.com/
test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.describe("Elements", () => {
  test.skip("ผู้ใช้กรอกข้อมูลใน tab Text box ครบถ้วน", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.clickTextbox();
    await demoQaPage.typeFullname();
    await demoQaPage.typeEmail();
    await demoQaPage.typeCurrentAddress();
    await demoQaPage.typePermanentAddress();
    await demoQaPage.clickSubmit();
    await demoQaPage.expectContainName();
    await demoQaPage.expectContainEmail();
    await demoQaPage.expectContainCurrentAddress();
    await demoQaPage.expectContainPermanentAddress();
  });
  test.skip("ผู้ใช้งานกด checkbox ใน tab Check Box", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainCheckBox();
    await demoQaPage.clickTabCheckBox();
    await demoQaPage.checkbox();
  });
  test.skip("ผู้ใช้งานกด radio button Yes ใน tab Radio Button", async ({
    page,
  }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainRadioButton();
    await demoQaPage.clickTabRadioButton();
    await demoQaPage.expectRadioButtonYes();
    await demoQaPage.clickRadioButtonYes();
    await demoQaPage.expectContainTextWhenClickRadioButtonYes();
  });

  test.skip("ผู้ใช้งานกด radio button Impressive ใน tab Radio Button", async ({
    page,
  }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainRadioButton();
    await demoQaPage.clickTabRadioButton();
    await demoQaPage.expectRadioButtonImpressive();
    await demoQaPage.clickRadioButtonImpressive();
    await demoQaPage.expectContainTextWhenClickRadioButtonImpressive();
  });

  test.skip("ผู้ใช้งานกดเพิ่มข้อมูลใน tab Web Tables", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainWebTables();
    await demoQaPage.clickTabWebTables();
    await demoQaPage.expectContainAddButton();
    await demoQaPage.clickAddButton();
    await demoQaPage.typeFirstName();
    await demoQaPage.typeLastName();
    await demoQaPage.typeEmail();
    await demoQaPage.typeAge();
    await demoQaPage.typeSalary();
    await demoQaPage.typeDepartment();
    await demoQaPage.clickSubmitButton();
    await demoQaPage.expectContainFirstName();
    await demoQaPage.expectContainLastName();
    await demoQaPage.expectContainAge();
    await demoQaPage.expectContainEmail();
    await demoQaPage.expectContaiDepartment();
  });

  test.skip("ผู้ใช้งานกด double click ปุ่ม Double Click Me", async ({
    page,
  }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainButtons();
    await demoQaPage.clickButtonsTab();
    await demoQaPage.expectContainDoubleClickButton();
    await demoQaPage.doubleClick();
    await demoQaPage.expectContainDoubleClick();
    await demoQaPage.expectContainRightClickMeButton();
    await demoQaPage.clickRightClick();
    await demoQaPage.expectContainRightClick();
    await demoQaPage.expectContainDynamicClickMeButton();
    await demoQaPage.clickDynamicClickMeButton();
    await demoQaPage.expectContainDynamicClick();
  });

  test.skip("ผู้ใช้งานกด link ใน tab Links", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainLinks();
    await demoQaPage.clickLinksTab();
    await demoQaPage.expectContainLinkOpenNewTab();
    await demoQaPage.expectLinkHome();
    await demoQaPage.clickLinkHome();
    await demoQaPage.expectContainLinkHome();
    await demoQaPage.expectContainLinkApiCall();
    await demoQaPage.expectTextCreated();
    await demoQaPage.clickCreatedLink();
    await demoQaPage.expectContainTextCratedLink();
    await demoQaPage.expectContainNoContentLink();
    await demoQaPage.clickNoContentLink();
    await demoQaPage.expectContainTextNoContent();
    await demoQaPage.expectContainMoved();
    await demoQaPage.clickMoved();
    await demoQaPage.expectContainTextMoved();
    await demoQaPage.expectContainBadRequest();
    await demoQaPage.clickBadRequest();
    await demoQaPage.expectContainTextBadRequest();
    await demoQaPage.expectContainUnauthorized();
    await demoQaPage.clickUnauthorized();
    await demoQaPage.expectContainTextUnauthorized();
    await demoQaPage.expectContainForbidden();
    await demoQaPage.clickForbidden();
    await demoQaPage.expectContainTextForbidden();
    await demoQaPage.expectContainNotFound();
    await demoQaPage.clickNotFound();
    await demoQaPage.expectContainTextNotFound();
  });

  test("ผู้ใช้งานกด link ใน tab Broken Links - Images", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.expectContainBrokenLinksImages();
    await demoQaPage.clickBrokenLinksImagesTab();
    // await demoQaPage.expectContainTextValidImage();
    // await demoQaPage.expectContainTextBrokenImage();
    // await demoQaPage.clickValidLink();
    // await demoQaPage.expectContainLinkHome();
    // await demoQaPage.expectUrl();
    // await demoQaPage.clickElement();
    // await demoQaPage.clickTextbox();
    // await demoQaPage.clickBrokenLink();
    // await demoQaPage.expectUrlBrokenLink();
  });
  test.skip("ผู้ใช้งานกด link ใน tab Upload and download", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.clickTextbox();
    await demoQaPage.clickDownloadButton();
    await demoQaPage.expectContainTextSelectAFile();
    await demoQaPage.chooseFile();
  });
  test.skip("ผู้ใช้งานกด link ใน tab Dynamic Properties", async ({ page }) => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.expectUrl();
    await demoQaPage.expectContainTextElements();
    await demoQaPage.clickElement();
    await demoQaPage.clickTextbox();
    await demoQaPage.expectContaintextDynamicProperties();
    await demoQaPage.expectContainTextEnableButton();
    await demoQaPage.clickEnableButton();
    await demoQaPage.expectContainTextColorChangeButton();
  });
});
