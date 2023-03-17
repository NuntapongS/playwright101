import { Page, expect } from "@playwright/test";
export class DemoQaPageWidgets {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectDemoqaPageUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectContainTextWidgets() {
    await expect(this.page.getByText(/Widgets/i)).toBeVisible();
  }

  async clickWidgets(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextAccordian() {
    await expect(this.page.getByText(/Accordian/i)).toBeVisible();
  }

  async clickAccordian(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextWhatIsLoremIpsum() {
    await expect(this.page.getByText(/What is Lorem Ipsum?/i)).toBeVisible();
  }

  async clickWhatIsLoremIpsum(selector: string) {
    await this.page.click(selector);
  }

  async clickWhatIsLoremIpsumAgain(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInFieldWhatIsLoremIpsum() {
    await expect(
      this.page.getByText(
        /Lorem Ipsum is simply dummy text of the printing and typesetting industry./i
      )
    ).toBeVisible();
  }

  async expectContainTextWhereDoesItComeFrom() {
    await expect(
      this.page.getByText(/Where does it come from?/i)
    ).toBeVisible();
  }

  async clickWhereDoesItComeFrom(selector: string) {
    await this.page.click(selector);
  }

  async expectTextFieldWhereDoesItComeFrom() {
    await expect(
      this.page.getByText(
        /Contrary to popular belief, Lorem Ipsum is not simply random text./i
      )
    ).toBeVisible();
  }

  async expectContainTextWhyDoWeUseIt() {
    await expect(this.page.getByText(/Why do we use it?/i)).toBeVisible();
  }

  async clickWhyDoWeUseIt(selector: string) {
    await this.page.click(selector);
  }

  async expectTextFieldWhyDoWeUseIt() {
    await expect(
      this.page.getByText(
        /It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout./i
      )
    ).toBeVisible();
  }

  async expectContainTextAutoComplete() {
    await expect(this.page.getByText(/Auto Complete/i)).toBeVisible();
  }

  async clickAutoComplete(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextTypeMultipleColorNames() {
    await expect(
      this.page.getByText(/Type multiple color names/i)
    ).toBeVisible();
  }

  async typeColorInField(selector: string) {
    const subjectsInput = await this.page.$("#autoCompleteMultipleInput");
    await subjectsInput?.type(selector);
  }

  async expectContainTextTypeSingleColorName() {
    await expect(this.page.getByText(/Type single color name/i)).toBeVisible();
  }

  async typeColorInFieldSingleColorName(selector: string) {
    const subjectsInput = await this.page.$("#autoCompleteSingleInput");
    await subjectsInput?.type(selector);
  }

  async expectContainTextDatePicker() {
    await expect(this.page.getByText(/Date Picker/i)).toBeVisible();
  }

  async clickDatePicker(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextSelectDate() {
    await expect(this.page.getByText(/Select Date/i)).toBeVisible();
  }

  async clickSelectDate() {
    await this.page.click("#datePickerMonthYearInput");
    await this.page.locator("text=31").last().click();
  }

  async expectContainTextSelectDateAndTime() {
    await expect(this.page.getByText(/Date And Time/i)).toBeVisible();
  }

  async clickSelectDateAndTime() {
    await this.page.click("#dateAndTimePickerInput");
    await this.page.locator("text=31").last().click();
    await this.page.locator("text=22:00").last().click();
  }

  async expectContainTextSlider() {
    await expect(this.page.getByText(/Slider/i)).toBeVisible();
  }

  async clickSlider(selector: string) {
    await this.page.click(selector);
  }

  async handleSlider() {
    const slider = await this.page.$("#slider");
    await slider?.hover();
    await slider?.click({ position: { x: 100, y: 0 } });
  }

  async expectContainTextProgressBar() {
    await expect(this.page.getByText(/Progress Bar/i)).toBeVisible();
  }

  async clickProgressBar(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextStart() {
    await expect(this.page.getByText(/Start/i)).toBeVisible();
  }

  async clickStart() {
    await this.page.click("#startStopButton");
  }

  async expectContainTextReset() {
    await this.page.waitForTimeout(10000);
    await expect(this.page.getByText(/Reset/i)).toBeVisible();
  }

  async clickReset() {
    await this.page.click("#resetButton");
  }

  async expectContainTextTabs() {
    await expect(this.page.getByText(/Tabs/i)).toBeVisible();
  }

  async clickTabs(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextInTabs() {
    await expect(
      this.page.getByText(/Details about Lorem Ipsum/i)
    ).toBeVisible();
  }

  async expectHeaderWhat() {
    await expect(this.page.getByText(/What/i)).toBeVisible();
  }

  async expectTextInFieldWhat() {
    await expect(
      this.page.getByText(
        /Lorem Ipsum is simply dummy text of the printing and typesetting industry./i
      )
    ).toBeVisible();
  }

  async expectHeaderOrigin() {
    await expect(this.page.getByRole("tab", { name: "Origin" })).toBeVisible();
  }

  async clickHeaderOrigin(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInFieldOrigin() {
    await expect(
      this.page.getByText(
        /Contrary to popular belief, Lorem Ipsum is not simply random text./i
      )
    ).toBeVisible();
  }

  async expectHeaderUse() {
    await expect(this.page.getByRole("tab", { name: "Use" })).toBeVisible();
  }

  async clickHeaderUse(selector: string) {
    await this.page.locator(selector).nth(1).click();
  }

  async expectTextInFieldUse() {
    await expect(
      this.page.getByText(
        /It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout./i
      )
    ).toBeVisible();
  }

  async expectHeaderMore() {
    await expect(this.page.getByRole("tab", { name: "More" })).toBeVisible();
  }

  async expectContainTextToolTips() {
    await expect(this.page.getByText(/Tool Tips/i)).toBeVisible();
  }

  async clickToolTips(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextHoverMeToSee() {
    await expect(this.page.getByText(/Hover me to see/i)).toBeVisible();
  }

  async hoverHoverMeToSee() {
    await this.page.hover("#toolTipButton");
  }

  async expectContainTextWhenHover() {
    await expect(
      this.page.getByText(/You hovered over the Button/i)
    ).toBeVisible();
  }

  async hoverWhenHover() {
    await this.page.hover("#toolTipTextField");
  }

  async expectTextUnderTextFieldHoverMeToSee() {
    await expect(
      this.page.getByText(
        /Contrary to popular belief, Lorem Ipsum is not simply random text./i
      )
    ).toBeVisible();
  }

  async expectContainTextMenu() {
    await expect(this.page.locator("text=Menu").first()).toBeVisible();
  }

  async clickMenu(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextMainItem1() {
    await expect(this.page.getByText(/Main Item 1/i)).toBeVisible();
  }

  async hoverMainItem1(selector: string) {
    await this.page.hover(selector);
  }

  async expectContainTextMainItem2() {
    await expect(this.page.getByText(/Main Item 2/i)).toBeVisible();
  }

  async hoverMainItem2(selector: string) {
    await this.page.hover(selector);
  }

  async expectContainTextInMainItem2() {
    await expect(this.page.locator("text=Sub Item").first()).toBeVisible();
    await expect(this.page.locator("text=Sub Item").nth(1)).toBeVisible();
    await expect(this.page.getByText(/Sub Sub LIST/i)).toBeVisible();
    await this.page.hover("text=Sub Sub LIST");
  }

  async expectContainTextMainItem3() {
    await expect(this.page.getByText(/Main Item 3/i)).toBeVisible();
  }

  async hoverMainItem3(selector: string) {
    await this.page.hover(selector);
  }

  async expectContainTextSelectMenu() {
    await expect(this.page.getByText(/Select Menu/i)).toBeVisible();
  }

  async clickSelectMenu(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextSelectValue() {
    await expect(this.page.getByText(/Select Value/i)).toBeVisible();
  }
}
