// @ts-check
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { SidebarPage } = require("../pages/SidebarPage");
const { ContractPage } = require("../pages/CreateContractPage");
const { Helper } = require("../support/helper");
const { ContractFixedRatePage } = require("../pages/ContractFixedRatePage");

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sidebarPage = new SidebarPage(page);
  await loginPage.goTo();
  await loginPage.login("rojowix230@hhmel.com", "@Bc1234567");
  await sidebarPage.clickSideBar("Create A Contract");
});

test.describe("Create a contract", () => {
  test("Create a fixed rate", async ({ page }) => {
    const contractPage = new ContractPage(page);
    const helper = new Helper();
    const yesterdayDate = helper.yesterday();
    const formatDate = helper.formatCalendar(yesterdayDate);
    await contractPage.clickFixedRate();
    const contractFixedRatePage = new ContractFixedRatePage(page);
    await contractFixedRatePage.fillContractName("Test Contract");
    await contractFixedRatePage.fillContractTax("United States");
    await contractFixedRatePage.fillContractState("Colorado");
    await contractFixedRatePage.fillContractJobTitle("Admin");
    await contractFixedRatePage.fillContractSeniority("Not applicable");
    await contractFixedRatePage.fillContractScope("Test Scope");
    await contractFixedRatePage.fillContractDate(formatDate);
    await contractFixedRatePage.clickNext();
    await contractFixedRatePage.fillPaymentRate("1000");
    await contractFixedRatePage.fillCurrency("GBP - British Pound");
    await contractFixedRatePage.fillfrequency("Weekly");
    await contractFixedRatePage.clickNext();
    await contractFixedRatePage.clickNext();
    await contractFixedRatePage.fillSpecialClause("Test Clause");
    await contractFixedRatePage.clickNext();
    await contractFixedRatePage.clickCreateContract();
    await expect(page.locator("h1")).toHaveText("Test Contract");
    await expect(page.locator('[data-qa="contractors-start-date"]')).toHaveText(
      helper.formatDateEndContract(yesterdayDate)
    );
    await expect(page.locator('[data-qa="contract-type"]')).toHaveText(
      "Fixed rate"
    );
    await expect(page.locator('[data-qa="job-title"]')).toHaveText("Admin");
    await expect(page.locator('[data-qa="rate"] > h4')).toHaveText(
      "£1,000 Weekly"
    );
    await expect(
      page.locator('[data-qa="dpa-row-undefined-value"]')
    ).toHaveText("Test Scope");
    await expect(
      page.locator('[data-qa="dpa-row-special-clause-value"] > .pre-wrap')
    ).toHaveText("Test Clause");
  });

  // Create one todo item.
});
