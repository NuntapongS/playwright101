import { expect, Page } from "@playwright/test";

export class DemoQaPageInteractions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUrl() {
    await expect(this.page).toHaveURL("https://demoqa.com/");
  }

  async expectTextInteractions() {
    await expect(this.page.getByText(/Interactions/i)).toBeVisible();
  }

  async clickInteractions(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextSortable() {
    await expect(this.page.getByText(/Sortable/i)).toBeVisible();
  }

  async clickSortable(selector: string) {
    await this.page.click(selector);
  }

  async expectTextList() {
    await expect(this.page.getByText(/List/i)).toBeVisible();
  }

  async clickList(selector: string) {
    await this.page.click(selector);
  }

  // async dragItemOneToItemTwo() {
  //   const itemOne = await this.page.$("#sortable > li:nth-child(1)");
  //   const itemTwo = await this.page.$("#sortable > li:nth-child(2)");
  //   await itemOne?.dragAndDrop(itemTwo!);
  // }

  async expectTextGrid() {
    await expect(this.page.getByText(/Grid/i)).toBeVisible();
  }
}
