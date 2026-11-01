import SignupPage from '../pages/SignupPage';

export function excluirConta() {
  SignupPage.clicarDeletarConta();
  SignupPage.validarContaDeletada();
}
