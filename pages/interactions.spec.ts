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

  async clickGrid(selector: string) {
    await this.page.click(selector);
  }

  // async moveBoxOneToBoxTwo() {
  //   const boxOne = await this.page.$("#dragBox");
  //   const boxTwo = await this.page.$("#dropBox");
  //   await boxOne?.dragAndDrop(boxTwo!);
  // }

  async expectContainTextSelectable() {
    await expect(this.page.getByText(/Selectable/i)).toBeVisible();
  }

  async clickSelectable(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInItem1() {
    await expect(this.page.getByText(/Cras justo odio/i)).toBeVisible();
  }

  async clickItem1(selector: string) {
    await this.page.click(selector);
  }

  async exepectTextInItem2() {
    await expect(this.page.getByText(/Dapibus ac facilisis in/i)).toBeVisible();
  }

  async clickItem2(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInItem3() {
    await expect(this.page.getByText(/Morbi leo risus/i)).toBeVisible();
  }
}
