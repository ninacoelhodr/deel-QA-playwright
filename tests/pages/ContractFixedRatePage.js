exports.ContractFixedRatePage = class ContractFixedRatePage {
  constructor(page) {
    this.page = page;
  }

  async fillContractName(nameContract) {
    await this.page.locator('[name="name"]').type(nameContract);
    await this.page.keyboard.press("Tab");
  }

  async fillContractTax(taxContract) {
    await this.page
      .locator('[data-qa="contractor-tax-residence"]')
      .last()
      .type(taxContract);
    await this.page.keyboard.press("Enter");
    await this.page.keyboard.press("Tab");
  }

  async fillContractState(stateContract) {
    await this.page
      .locator('[data-qa="contractor-tax-residence-province"]')
      .type(stateContract);
    await this.page.keyboard.press("Enter");
    await this.page.keyboard.press("Tab");
  }

  async fillContractJobTitle(jobContract) {
    await this.page.locator('[name="jobTitle"]').type(jobContract);
    await this.page.keyboard.press("Enter");
    await this.page.keyboard.press("Tab");
  }

  async fillContractSeniority(seniorityContract) {
    await this.page
      .locator('[data-qa="selector-seniority-level"]')
      .type(seniorityContract);
    await this.page.keyboard.press("Enter");
    await this.page.keyboard.press("Tab");
  }

  async fillContractScope(scopeContract) {
    await this.page.locator('[name="scope"]').type(scopeContract);
  }

  async fillContractDate(date) {
    await this.page.locator('[name="effectiveDate"]').click();
    await this.page.locator("[aria-label='" + date + "']").click();
  }

  async clickNext() {
    await this.page.locator('[data-qa="next"]').click();
  }

  async fillPaymentRate(rate) {
    await this.page.locator('[name="rate"]').type(rate);
  }

  async fillCurrency(currency) {
    await this.page.locator('[data-qa="currency-select"]').click();
    await this.page.locator('[data-qa="currency-select"]').type(currency);
    await this.page.keyboard.press("Enter");
  }

  async fillfrequency(frequency) {
    await this.page.locator('[data-qa="cycle-select"]').first().click();
    await this.page.locator('[data-qa="cycle-select"]').first().type(frequency);
    await this.page.keyboard.press("Enter");
  }

  async fillSpecialClause(specialClause) {
    await this.page.locator('[data-qa="add-a-special-clause"]').click();
    await this.page
      .locator('[data-qa="special-clause-card"] > * * >  textarea')
      .type(specialClause);
  }

  async clickCreateContract() {
    await this.page.locator('[data-qa="create-contract"]').click();
  }
};
