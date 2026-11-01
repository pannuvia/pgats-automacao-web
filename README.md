# Automation Exercise - Projeto de Automação Web

Este projeto consiste em uma suíte de testes automatizados para a aplicação web Automation Exercise, desenvolvida com Cypress e arquitetura baseada em Page Object Model (POM). O objetivo principal é validar os fluxos de cadastro, autenticação, navegação, inscrição e checkout da aplicação.

## 1. Objetivo do projeto
A automação foi criada para validar comportamentos essenciais da aplicação, incluindo:
- cadastro e exclusão de conta
- login com credenciais válidas e inválidas
- logout
- navegação por produtos
- pesquisa por itens
- inscrição na home page
- fluxo de carrinho e checkout

## 2. Tecnologias utilizadas
- Cypress 13
- JavaScript
- Page Object Model (POM)
- GitHub Actions para integração contínua
- JUnit XML para relatórios em CI
- HTML report via `cypress-mochawesome-reporter`
- Faker para geração de dados dinâmicos

## 3. Estrutura do projeto
- `cypress/e2e/pages` - Page Objects das telas da aplicação
- `cypress/e2e/helpers` - fluxos de negócio reutilizáveis
- `cypress/support/factories` - geração de dados dinâmicos
- `cypress/support/constants.js` - URLs, textos e valores padronizados
- `.github/workflows/cypress.yml` - workflow de CI do GitHub Actions
- `cypress/reports/html/index.html` - relatório HTML para visualização no navegador
- `cypress/reports/junit` - relatórios JUnit gerados pela execução

## 4. Pré-requisitos
- Node.js 20+
- npm
- Git

## 5. Instalação
```bash
npm install
```

## 6. Execução local
### Execução em modo headless
```bash
npx cypress run --spec cypress/e2e/automation-exercise.cy.js --headless
```

### Execução com interface gráfica
```bash
npx cypress open
```

## 7. CI / GitHub Actions
O workflow presente em `.github/workflows/cypress.yml` executa a suíte automaticamente em eventos de push e pull request, garantindo validação contínua do projeto.

## 8. Relatórios gerados
A execução gera dois tipos de relatório:
- HTML para análise visual em navegador, disponível em `cypress/reports/html/index.html`
- JUnit XML para uso em integração contínua e análise automatizada, disponível em `cypress/reports/junit`

## 9. Status da entrega
O projeto foi integrado à branch principal `main` e sua execução foi validada com sucesso em ambiente headless. A solução foi organizada em POM, helpers, factories, constantes e pipeline de CI, seguindo boas práticas de manutenção e reutilização.

## 10. Checklist de avaliação
1. Execução via GitHub Actions — Implementado
2. Execução sem falhas — Implementado
3. Uso adequado de seletores e padrões — Implementado
4. Atenção a boas práticas — Implementado
5. Relatórios — Implementado

Os critérios acima foram atendidos com base na arquitetura do projeto, na automação validada e na configuração de execução e relatórios implementados no código e no pipeline.
