class CheckoutPage {
  validarDetalhesCheckout() {
    cy.contains(/address details|review your order/i).should('be.visible');
    return this;
  }

  preencherComentario(mensagem) {
    cy.get('textarea[name="message"]').should('be.visible').type(mensagem);
    return this;
  }

  clicarPlaceOrder() {
    cy.contains('Place Order').click();
    return this;
  }

  preencherDadosPagamento({ nome, numeroCartao, cvc, validade }) {
    cy.get('input[data-qa="name-on-card"]').should('be.visible').clear().type(nome);
    cy.get('input[data-qa="card-number"]').should('be.visible').clear().type(numeroCartao);
    cy.get('input[data-qa="cvc"]').should('be.visible').clear().type(cvc);
    cy.get('input[data-qa="expiry-month"]').should('be.visible').clear().type(validade.split('/')[0]);
    cy.get('input[data-qa="expiry-year"]').should('be.visible').clear().type(validade.split('/')[1]);
    return this;
  }

  clicarPayAndConfirmOrder() {
    cy.contains('Pay and Confirm Order').click();
    return this;
  }

  validarPedidoConfirmado() {
    cy.contains(/order placed!/i, { timeout: 20000 }).should('be.visible');
    cy.contains(/your order has been confirmed!/i, { timeout: 20000 }).should('be.visible');
    return this;
  }
}

export default new CheckoutPage();
