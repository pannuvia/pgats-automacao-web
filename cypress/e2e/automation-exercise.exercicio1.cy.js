import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { cadastrarConta } from './helpers/cadastroContaHelper';
import { deletarConta } from './helpers/exclusaoContaHelper';
import { realizarLoginComSucesso, realizarLoginInvalido } from './helpers/loginHelper';
import { realizarLogout } from './helpers/logoutHelper';

describe('Automation Exercise', () => {
    it.only('deve cadastrar um novo usuário, logar e deletar conta', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cadastrarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();
            deletarConta();
        });
    });

    it('deve cadastrar novo usuário, fazer login com email e senha corretos e deletar usuario', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cadastrarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            realizarLoginComSucesso(usuario);
            deletarConta();
        });
    });

    it('deve cadastrar um novo usuário e fazer logout', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cadastrarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            LoginPage.validarTelaLogin();
        });
    });

    it('deve tentar logar com email e senha incorretos', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            HomePage.visit().acessarLogin();
            realizarLoginInvalido(usuario.email, 'senhaIncorreta123', 'Your email or password is incorrect!');
        });
    });

    it('deve cadastrar um novo usuário e tentar cadastrar novamente com o mesmo email', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cadastrarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            LoginPage.visitar().validarTelaLogin();

            SignupPage.preencherSignup(usuario.fullName, usuario.email)
                .clicarSignup()
                .validarEmailJaExiste();
        });
    });
});