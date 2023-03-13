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
    await this.page.waitForTimeout(9000);
    await expect(this.page.getByText(/Reset/i)).toBeVisible();
  }

  async clickReset() {
    await this.page.click("#resetButton");
  }

  async expectContainTextTabs() {
    await expect(this.page.getByText(/Tabs/i)).toBeVisible();
  }
}
