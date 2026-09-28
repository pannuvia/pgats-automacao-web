class HomePage {
  visit() {
    cy.visit('https://automationexercise.com/');
    return this;
  }

  acessarLogin() {
    cy.get('a[href="/login"]').should('be.visible').click();
    return this;
  }

  validarLoginVisivel() {
    return this.acessarLogin();
  }

  validarHomeVisivel() {
    cy.get('a[href="/login"]').should('be.visible');
    return this;
  }
}

export default new HomePage();
