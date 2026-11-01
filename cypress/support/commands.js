import { criarUsuarioAleatorio } from './factories/usuarioFactory';
import { criarEmailAleatorio } from './factories/emailFactory';
import { criarDadosPagamentoPadrao } from './factories/pagamentoFactory';

Cypress.Commands.add('criarUsuarioAleatorio', () => {
  return cy.wrap(criarUsuarioAleatorio());
});

Cypress.Commands.add('criarEmailAleatorio', (domino = 'automacao.com') => {
  return cy.wrap(criarEmailAleatorio(domino));
});

Cypress.Commands.add('criarDadosPagamentoPadrao', () => {
  return cy.wrap(criarDadosPagamentoPadrao());
});