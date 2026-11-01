import { BASE_URL, ROUTES, TEXTOS } from '../../support/constants';

class HomePage {
  visitar() {
    cy.visit(`${BASE_URL}${ROUTES.home}`);
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

  rolarParaRodape() {
    cy.scrollTo('bottom');
    return this;
  }

  validarInscricao() {
    cy.contains(/subscription/i).should('be.visible');
    return this;
  }

  preencherInscricao(email) {
    cy.get('#susbscribe_email').should('be.visible').clear().type(email);
    return this;
  }

  clicarBotaoInscricao() {
    cy.get('#subscribe').should('be.visible').click();
    return this;
  }

  validarMensagemInscricaoSucesso() {
    cy.contains(TEXTOS.inscricaoSucesso).should('be.visible');
    return this;
  }

  abrirHome() {
    this.visitar();
    this.validarTelaHome();
    return this;
  }
}

export default new HomePage();
