import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

describe("DemoBlaze Automation Test", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  beforeEach(() => {
    homePage.visit();
  });

  it("should login with valid credentials", () => {
    homePage.login("admin", "admin");
  });

  it("should verify product categories", () => {
    const categories = ["Phones", "Laptops", "Monitors"];
    homePage.verifyCategories(categories);
  });

  it("should buy a product", () => {
    cartPage.addItemToCart("Samsung galaxy s6");
    cartPage.proceedToCart();
    cartPage.placeOrder();
  });

  // Negative case
  it("should fail to login with invalid credentials", () => {
    homePage.login("invalidUser", "invalidPass");

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Wrong password.");
    });
  });
});
