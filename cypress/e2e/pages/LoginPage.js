class LoginPage {
  visitar() {
    cy.visit('https://automationexercise.com/login');
    return this;
  }

  acessarPagina() {
    return this.visitar();
  }

  validarTelaLogin() {
    cy.contains('Login to your account').should('be.visible');
    return this;
  }

  preencherLogin(email, senha) {
    cy.get('input[data-qa="login-email"]').should('be.visible').clear().type(email);
    cy.get('input[data-qa="login-password"]').should('be.visible').clear().type(senha);
    return this;
  }

  clicarLogin() {
    cy.get('button[data-qa="login-button"]').click();
    return this;
  }

  validarMensagemErro(mensagem) {
    cy.contains(mensagem).should('be.visible');
    return this;
  }

  fazerLogin(email, senha) {
    this.preencherLogin(email, senha);
    this.clicarLogin();
    return this;
  }

  deslogar() {
    cy.get('a[href="/logout"]').click();
    return this;
  }
}

export default new LoginPage();
