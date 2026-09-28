import { criarUsuarioAleatorio } from './factories/usuarioFactory';

Cypress.Commands.add('criarUsuarioAleatorio', () => {
  return cy.wrap(criarUsuarioAleatorio());
});