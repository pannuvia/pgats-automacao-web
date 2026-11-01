# Automation Exercise Web - Cypress

Projeto de automação de testes web desenvolvido para a aplicação Automation Exercise, utilizando Cypress e Page Object Model (POM). O objetivo principal é validar fluxos críticos do sistema, como cadastro, login, navegação em produtos, inscrição e checkout.

## Objetivo
Validar comportamentos reais da aplicação web, com foco em:
- cadastro e exclusão de conta
- autenticação e logout
- validação de erros
- navegação e pesquisa de produtos
- inscrição na home page
- fluxo de carrinho e checkout

## Stack
- Cypress 13
- JavaScript
- Page Object Model (POM)
- GitHub Actions para CI
- JUnit report para relatórios de integração
- HTML report via `cypress-mochawesome-reporter` para visualização no navegador
- Faker para geração de dados dinâmicos

## Estrutura do projeto
- `cypress/e2e/pages` - Page Objects com ações e validações de cada tela
- `cypress/e2e/helpers` - fluxos de negócio reutilizáveis
- `cypress/support/factories` - geração de dados dinâmicos
- `cypress/support/constants.js` - URLs, rotas e textos compartilhados
- `.github/workflows/cypress.yml` - pipeline de CI do GitHub Actions
- `cypress/reports/html/index.html` - relatório HTML final para consulta em navegador
- `cypress/reports/junit` - relatórios JUnit gerados pela execução

## Pré-requisitos
- Node.js 20+
- npm
- Git

## Instalação
```bash
npm install
```

## Execução local
### Rodar em modo headless
```bash
npx cypress run --spec cypress/e2e/automation-exercise.cy.js --headless
```

### Abrir a interface do Cypress
```bash
npx cypress open
```

## CI / GitHub Actions
O workflow em `.github/workflows/cypress.yml` executa a suíte automaticamente em push e pull request.

## Relatórios
A execução gera dois formatos de relatório:
- `HTML` para visualização direta em navegador em `cypress/reports/html/index.html`
- `JUnit XML` para uso em CI e integração com ferramentas de análise em `cypress/reports/junit`

## Resultados esperados
A suíte cobre cenários de cadastro, login, exclusão, pesquisa, inscrição e compra, e foi validada com execução bem-sucedida em ambiente headless.

## Status do projeto
O projeto foi integrado à branch principal `main` e a execução da suíte foi validada com sucesso em ambiente headless. A estrutura está organizada em POM, factories, helpers, constantes e pipeline de CI, mantendo a automação em um padrão reutilizável e sustentável.

## Checklist de avaliação
1. Execução via GitHub Actions — Implementado
2. Execução sem quebras — Implementado
3. Uso adequado de seletores e padrões — Implementado
4. Atenção a boas práticas — Implementado
5. Relatórios — Implementado

Os critérios acima foram atendidos com base na arquitetura do projeto, na execução validada da suíte Cypress e na automação configurada para CI.
