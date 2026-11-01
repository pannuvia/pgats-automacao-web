class HomePage {
  visitar() {
    cy.visit('https://automationexercise.com/');
    return this;
  }

  validarTelaHome() {
    cy.get('a[href="/login"]').should('be.visible');
    return this;
  }

  clicarLogin() {
    cy.get('a[href="/login"]').should('be.visible').click();
    return this;
  }

  clicarContato() {
    cy.get('a[href="/contact_us"]').should('be.visible').click();
    return this;
  }

  clicarProdutos() {
    cy.get('a[href="/products"]').should('be.visible').click();
    return this;
  }

  abrirHome() {
    this.visitar();
    this.validarTelaHome();
    return this;
  }
}

export default new HomePage();
