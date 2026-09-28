import SignupPage from '../pages/SignupPage';

export function deletarConta() {
  SignupPage.clicarDeletarConta();
  SignupPage.validarContaDeletada();
}
