class HomePage {
  visit() {
    cy.visit("https://www.demoblaze.com/");
  }

  login(username, password) {
    cy.get("#login2").click();
    cy.get("#loginusername").type(username);
    cy.wait(1000);
    cy.get("#loginpassword").type(password);
    cy.get("button").contains("Log in").click();
  }

  verifyCategories(categories) {
    categories.forEach((category) => {
      cy.contains(".list-group-item", category);
    });
  }
}

export default HomePage;
