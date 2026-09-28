import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';

export function cadastrarConta(usuario) {
  HomePage.visit();
  HomePage.validarLoginVisivel();

  SignupPage.clicarSignup();
  SignupPage.validarNewUserSignup();
  SignupPage.preencherSignup(usuario.fullName, usuario.email);
  SignupPage.clicarSignup();
  SignupPage.validarEnterAcoountInformation();
  SignupPage.preencherDadosCadastro(usuario);
  SignupPage.clicarCriarConta();
  SignupPage.validarContaCriada();
}
