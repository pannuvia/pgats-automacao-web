class CartPage {
  validarCarrinho() {
    cy.location('pathname').should('eq', '/view_cart');
    cy.contains(/shopping cart/i).should('be.visible');
    return this;
  }

  clicarProceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
    return this;
  }
}

export default new CartPage();
