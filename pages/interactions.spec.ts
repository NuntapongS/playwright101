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

  async clickItem3(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInItem4() {
    await expect(this.page.getByText(/Porta ac Consectetur ac/i)).toBeVisible();
  }

  async clickItem4(selector: string) {
    await this.page.click(selector);
  }

  async expectTextInItem1InHeaderGrid() {
    await expect(this.page.getByText(/One/i)).toBeVisible();
  }

  async expectTextInItem2InHeaderGrid() {
    await expect(this.page.getByText(/Two/i)).toBeVisible();
  }

  async expectTextInItem3InHeaderGrid() {
    await expect(this.page.getByText(/Three/i)).toBeVisible();
  }

  async expectTextInItem4InHeaderGrid() {
    await expect(this.page.getByText(/Four/i)).toBeVisible();
  }

  async expectTextInItem5InHeaderGrid() {
    await expect(this.page.getByText(/Five/i)).toBeVisible();
  }

  async expectTextInItem6InHeaderGrid() {
    await expect(this.page.getByText(/Six/i)).toBeVisible();
  }

  async expectTextInItem7InHeaderGrid() {
    await expect(this.page.getByText(/Seven/i)).toBeVisible();
  }

  async expectTextInItem8InHeaderGrid() {
    await expect(this.page.getByText(/Eight/i)).toBeVisible();
  }

  async expectTextInItem9InHeaderGrid() {
    await expect(this.page.getByText(/Nine/i)).toBeVisible();
  }

  async clickItemInHeaderGrid(selector: string) {
    await this.page.click(selector);
  }

  async expectContainTextResizable() {
    await expect(this.page.getByText(/Resizable/i)).toBeVisible();
  }

  async clickResizable(selector: string) {
    await this.page.click(selector);
  }

  // async resizable() {
  //   const resizable = await this.page.$("#resizable");
  //   await resizable?.resizeTo(200, 200);
  // }

  async expectContainTextDroppable() {
    await expect(this.page.getByText(/Droppable/i)).toBeVisible();
  }

  async clickDroppable(selector: string) {
    await this.page.click(selector);
  }

  async expectHeaderSimple() {
    await expect(this.page.getByText(/Simple/i)).toBeVisible();
  }

  async clickHeaderSimple(selector: string) {
    await this.page.click(selector);
  }
}
