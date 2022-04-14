const { expect } = require("@playwright/test");

exports.ContractPage = class ContractPage {
  constructor(page) {
    this.page = page;
    this.headerFixedRate = page.locator("h2", {
      hasText: "Creating a fixed contract    "
    });
  }

  async clickFixedRate() {
    await this.page.locator(".heap-start-fixed-contract").click();
    await expect(this.headerFixedRate).toBeVisible();
  }
};
