import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

export function logar(email, senha) {
  LoginPage.validarTelaLogin();
  LoginPage.fazerLogin(email, senha);
}

export function logarComSucesso(usuario) {
  LoginPage.visitar();
  LoginPage.validarTelaLogin();
  LoginPage.fazerLogin(usuario.email, usuario.password);
  SignupPage.validarUsuarioLogado();
}

export function tentarLoginInvalido(email, senha, mensagemErro) {
  LoginPage.visitar();
  LoginPage.validarTelaLogin();
  LoginPage.fazerLogin(email, senha);
  LoginPage.validarMensagemErro(mensagemErro);
}
