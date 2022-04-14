exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("/login");
  }

  async login(username, password) {
    await this.page.type('[name="email"]', username);
    await this.page.type('[name="password"]', password);
    await this.page.click('[data-qa="log-in"]');
    await this.page.locator('[data-qa="close"]').click();
    await this.page.locator(".button-close").click();
    await this.page.locator("#CybotCookiebotDialogBodyButtonAccept").click();
  }
};
