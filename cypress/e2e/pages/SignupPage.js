class SignupPage {
  abrirCadastro() {
    cy.get('a[href="/login"]').click();
    return this;
  }

  preencherSignup(nome, email) {
    cy.get('input[data-qa="signup-name"]').should('be.visible').clear().type(nome);
    cy.get('input[data-qa="signup-email"]').should('be.visible').clear().type(email);
    return this;
  }

  clicarSignup() {
    cy.get('button[data-qa="signup-button"]').click();
    return this;
  }

  validarNewUserSignup() {
    cy.contains('New User Signup!').should('be.visible');
    return this;
  }

  validarEnterAcoountInformation() {
    cy.contains('Enter Account Information').should('be.visible');
    return this;
  }

  preencherDadosCadastro(usuario) {
    cy.get(`input[id="${usuario.gender}"]`).check({ force: true });
    cy.get('input[data-qa="password"]').should('be.visible').type(usuario.password);
    cy.get('select[data-qa="days"]').select(usuario.days);
    cy.get('select[data-qa="months"]').select(usuario.months);
    cy.get('select[data-qa="years"]').select(usuario.years);
    cy.get('input#newsletter').check({ force: true });
    cy.get('input#optin').check({ force: true });
    cy.get('input[data-qa="first_name"]').should('be.visible').type(usuario.firstName);
    cy.get('input[data-qa="last_name"]').should('be.visible').type(usuario.lastName);
    cy.get('input[data-qa="company"]').should('be.visible').type(usuario.company);
    cy.get('input[data-qa="address"]').should('be.visible').type(usuario.address);
    cy.get('input[data-qa="address2"]').should('be.visible').type(usuario.address2);
    cy.get('select[data-qa="country"]').select(usuario.country);
    cy.get('input[data-qa="state"]').should('be.visible').type(usuario.state);
    cy.get('input[data-qa="city"]').should('be.visible').type(usuario.city);
    cy.get('input[data-qa="zipcode"]').should('be.visible').type(usuario.zipCode);
    cy.get('input[data-qa="mobile_number"]').should('be.visible').type(usuario.mobile);
    return this;
  }

  clicarCriarConta() {
    cy.get('button[data-qa="create-account"]').click();
    return this;
  }

  validarContaCriada() {
    cy.contains('Account Created!').should('be.visible');
    return this;
  }

  clicarContinuar() {
    cy.contains('a', 'Continue').click();
    return this;
  }

  validarUsuarioLogado() {
    cy.contains('Logged in as').should('be.visible');
    return this;
  }

  clicarDeletarConta() {
    cy.contains('Delete Account').click();
    return this;
  }

  validarContaDeletada() {
    cy.contains('Account Deleted!').should('be.visible');
    return this;
  }

  validarEmailJaExiste() {
    cy.contains('Email Address already exist!').should('be.visible');
    return this;
  }
}

export default new SignupPage();
