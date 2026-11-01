import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductsPage from './pages/ProductsPage';
import { criarConta } from './helpers/cadastroContaHelper';
import { excluirConta } from './helpers/exclusaoContaHelper';
import { logarComSucesso, tentarLoginInvalido } from './helpers/loginHelper';
import { deslogar } from './helpers/logoutHelper';

describe('Automation Exercise', () => {
    it('Cenario 1: deve cadastrar um novo usuário, logar e deletar conta', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            criarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();
            excluirConta();
        });
    });

    it('Cenario 2: deve cadastrar novo usuário, fazer login com email e senha corretos, fazer logout e deletar conta', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            criarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            logarComSucesso(usuario);
            excluirConta();
        });
    });

    it('Cenario 3: deve tentar logar com email e senha incorretos', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            HomePage.visitar().clicarLogin();
            tentarLoginInvalido(usuario.email, 'senhaIncorreta123', 'Your email or password is incorrect!');
        });
    });

    it('Cenario 4: deve cadastrar um novo usuário e fazer logout', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            criarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            LoginPage.validarTelaLogin();
        });
    });

    it('Cenario 5: deve cadastrar um novo usuário e tentar cadastrar novamente com o mesmo email', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            criarConta(usuario);
            SignupPage.clicarContinuar().validarUsuarioLogado();

            LoginPage.deslogar();
            LoginPage.visitar().validarTelaLogin();

            SignupPage.preencherCadastro(usuario.fullName, usuario.email)
                .clicarSignup()
                .validarEmailJaExiste();
        });
    });

    it('Cenario 6: deve enviar uma mensagem pelo formulário de contato', () => {
        HomePage.visitar()
            .validarTelaHome()
            .clicarContato();

        ContactUsPage.validarTelaContato()
            .preencherFormulario({
                nome: 'Pannuvia Monteiro',
                email: 'pannuvia@teste.com',
                assunto: 'Dúvida sobre produto',
                mensagem: 'Mensagem de teste automatizado.'
            })
            .anexarArquivo('cypress/fixtures/contact-message.txt')
            .clicarSubmit()
            .validarMensagemSucesso()
            .clicarHome();

        HomePage.validarTelaHome();
    });

    it('Cenario 8: deve verificar a página de produtos e o detalhe do primeiro produto', () => {
        HomePage.visitar()
            .validarTelaHome()
            .clicarProdutos();

        ProductsPage.validarTelaProdutos()
            .validarListaProdutos()
            .clicarPrimeiroViewProduct()
            .validarDetalhesProduto();
    });

    it('Cenario 9: deve pesquisar um produto e validar os resultados', () => {
        HomePage.visitar()
            .validarTelaHome()
            .clicarProdutos();

        ProductsPage.validarTelaProdutos()
            .pesquisarProduto('Blue Top')
            .validarProdutosPesquisados();
    });

    it('Cenario 10: deve verificar a inscrição na home page', () => {
        const email = `teste-pannuvia-${Date.now()}@automacao.com`;

        HomePage.visitar()
            .validarTelaHome()
            .rolarParaRodape()
            .validarInscricao()
            .preencherInscricao(email)
            .clicarBotaoInscricao()
            .validarMensagemInscricaoSucesso();
    });
});