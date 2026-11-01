class ContactUsPage {
  validarTelaContato() {
    cy.contains('Get In Touch').should('be.visible');
    return this;
  }

  preencherFormulario({ nome, email, assunto, mensagem }) {
    cy.get('input[data-qa="name"]').should('be.visible').clear().type(nome);
    cy.get('input[data-qa="email"]').should('be.visible').clear().type(email);
    cy.get('input[data-qa="subject"]').should('be.visible').clear().type(assunto);
    cy.get('textarea[data-qa="message"]').should('be.visible').clear().type(mensagem);
    return this;
  }

  anexarArquivo(caminhoArquivo) {
    cy.get('input[name="upload_file"]').selectFile(caminhoArquivo);
    return this;
  }

  clicarSubmit() {
    cy.once('window:alert', () => true);
    cy.get('input[data-qa="submit-button"]').click();
    return this;
  }

  validarMensagemSucesso() {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    return this;
  }

  clicarHome() {
    cy.contains('a', 'Home').click();
    return this;
  }
}

export default new ContactUsPage();
