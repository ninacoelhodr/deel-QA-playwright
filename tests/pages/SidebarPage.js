exports.SidebarPage = class SidebarPage {
  constructor(page) {
    this.page = page;
  }

  async clickSideBar(text) {
    await this.page.locator(".sidebar-menu-link", { hasText: text }).click();
  }
};
