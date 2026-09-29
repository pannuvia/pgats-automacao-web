describe('Cadastrar entradas e saídas com bugs', () => {
  it('Cadastrar uma nova transação de entrada - falha 1', () => {
/*
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").contains().get().click() -> contains() sem texto e get() sem seletor
*/   
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
  });

  it('Cadastrar uma nova transação de entrada - falha 2', () => {
/*
    cy.contains("Nova Transação").click()
    cy.get("#description").sendKeys("Mesada")
    cy.get("#amount").sendKeys(100)
    cy.get("#date").sendKeys("2023-02-01")
    cy.contains("Add").click() -> sendKeys() não é um comando do Cypress, e o botão correto é "Salvar"
    cy.get("tbody tr").should("have.length", 1)
*/   
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get("tbody tr").should("have.length", 1)
  });  

  it('Cadastrar uma nova transação de entrada - falha 3', () => {
/* -> nao possui a pagina para fazer o teste
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("02/01/2023") -> formato de data incorreto, deve ser "2023-02-01"
    cy.contains("Salvar").click()
    //cy.get("tbody tr").should("have.length", 1) --> comentário incorreto, o teste nao valida a linha adicionada
*/
    cy.visit("https://devfinance-agilizei.netlify.app")/
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
  });

  it('Cadastrar uma nova transação de entrada - falha 4', () => {
/*
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.get("#amount").type(100) -> ordem incorreta, o campo "Valor" deve ser preenchido após o campo "Descrição"
    cy.get("#description").type("Mesada") -> ordem incorreta, o campo "Descrição" deve ser preenchido antes do campo "Valor"
    cy.get("#date").type("2023-02-01") --> ordem incorreta, o campo "Data" deve ser preenchido após os campos "Descrição" e "Valor"
    cy.contains("Nova Transação").click() -> ordem incorreta, o botão "Nova Transação" deve ser clicado antes de preencher os campos
    cy.contains("Salvar").click() 
    cy.get("tbody tr").should("have.length", 1)
*/
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 5', () => {
/*
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nueva Transación").click() -> erro de digitação no botão, deve ser "Nova Transação"
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get(".alert").should("not.exist") -> validação incorreta, deve verificar se a transação foi adicionada à tabela
*/
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get("tbody tr").should("have.length", 1)
  });

/*
  it.skip('Cadastrar uma nova transação de entrada - falha 6', () => { -> teste desabilitado com o .skip
-> nao possui a pagina para fazer o teste
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get("tbody tr").should("have.length", 100) -> validação incorreta, deve verificar se a transação foi adicionada à tabela para um caso de uma transação única.
*/
  it('Cadastrar uma nova transação de entrada - falha 6', () => {
    
    cy.visit("https://devfinance-agilizei.netlify.app")
    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")
    cy.contains("Salvar").click()
    cy.get("tbody tr").should("have.length", 1)
  });
}); 