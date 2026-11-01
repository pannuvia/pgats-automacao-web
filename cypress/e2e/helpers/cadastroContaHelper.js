import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';

export function criarConta(usuario) {
  HomePage.visitar().clicarLogin();
  SignupPage.validarTelaCadastro();
  SignupPage.preencherCadastro(usuario.fullName, usuario.email);
  SignupPage.clicarSignup();
  SignupPage.validarTelaDadosCadastro();
  SignupPage.preencherDadosCadastro(usuario);
  SignupPage.clicarCriarConta();
  SignupPage.validarContaCriada();
}

export function criarUsuarioEValidarLogin() {
  return cy.criarUsuarioAleatorio().then((usuario) => {
    criarConta(usuario);
    SignupPage.clicarContinuar().validarUsuarioLogado();
    return cy.wrap(usuario);
  });
}
