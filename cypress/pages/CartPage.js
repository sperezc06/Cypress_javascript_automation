class CartPage {
  addItemToCart(productName) {
    cy.contains("a", productName, { timeout: 14000 }).click();
    cy.get(".btn.btn-success", { timeout: 14000 }).click();
  }

  proceedToCart() {
    cy.get("#cartur").click();
  }

  placeOrder() {
    cy.contains("button", "Place Order").click();
    cy.get("#name").type("Test User");
    cy.get("#country").type("USA");
    cy.get("#city").type("New York");
    cy.get("#card").type("1234123412341234");
    cy.get("#month").type("05");
    cy.get("#year").type("2025");
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.contains("button", "OK").click();
  }
}

export default CartPage;
