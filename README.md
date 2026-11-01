# Automation Exercise Web - Cypress

Projeto de automação de testes web com Cypress desenvolvido para a aplicação Automation Exercise com a finalidade de entrega do Trabalho Final da Disciplina de Automação de Testes na camada de Interface (Web)

## Objetivo
Validar fluxos críticos da aplicação, incluindo cadastro, login, produtos, carrinho, checkout e inscrição.

## Stack
- Cypress 13
- JavaScript
- Page Object Model (POM)
- GitHub Actions para CI
- JUnit report para relatórios de execução

## Estrutura
- `cypress/e2e/pages` - Page Objects
- `cypress/e2e/helpers` - fluxos de negócio reutilizáveis
- `cypress/support/factories` - geração de dados dinâmicos
- `cypress/support/constants.js` - URLs, textos e constantes compartilhadas
- `.github/workflows/cypress.yml` - pipeline de CI

## Execução local

Instalar dependências:

```bash
npm install
```

Executar em modo headless:

```bash
npx cypress run --spec cypress/e2e/automation-exercise.cy.js --headless
```

Abrir interface do Cypress:

```bash
npx cypress open
```

## CI
O workflow do GitHub Actions executa a suíte em push e pull request automaticamente.

## Relatórios
A execução gera relatório JUnit em `cypress/reports` e também envia artefatos para o GitHub Actions.
