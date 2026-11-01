import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { criarConta, criarUsuarioEValidarLogin } from './helpers/cadastroContaHelper';
import { excluirConta } from './helpers/exclusaoContaHelper';
import { logarComSucesso, tentarLoginInvalido } from './helpers/loginHelper';
import { finalizarCompra } from './helpers/checkoutHelper';

describe('Automation Exercise', () => {
    it('Cenario 1: deve cadastrar um novo usuário, logar e deletar conta', () => {
        criarUsuarioEValidarLogin().then((usuario) => {
            excluirConta();
        });
    });

    it('Cenario 2: deve cadastrar novo usuário, fazer login com email e senha corretos, fazer logout e deletar conta', () => {
        criarUsuarioEValidarLogin().then((usuario) => {
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
        criarUsuarioEValidarLogin().then(() => {
            LoginPage.deslogar();
            LoginPage.validarTelaLogin();
        });
    });

    it('Cenario 5: deve cadastrar um novo usuário e tentar cadastrar novamente com o mesmo email', () => {
        criarUsuarioEValidarLogin().then((usuario) => {
            LoginPage.deslogar();
            LoginPage.visitar().validarTelaLogin();

            SignupPage.preencherCadastro(usuario.fullName, usuario.email)
                .clicarSignup()
                .validarEmailJaExiste();
        });
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
        cy.criarEmailAleatorio('automacao.com').then((email) => {
            HomePage.visitar()
                .validarTelaHome()
                .rolarParaRodape()
                .validarInscricao()
                .preencherInscricao(email)
                .clicarBotaoInscricao()
                .validarMensagemInscricaoSucesso();
        });
    });
    it('Cenario 15: deve registrar antes do checkout e finalizar a compra', () => {
        criarUsuarioEValidarLogin().then((usuario) => {
            finalizarCompra({
                comentario: 'Pedido de teste para checkout após cadastro.'
            });

            SignupPage.clicarDeletarConta().validarContaDeletada();
        });
    });

    it('Cenario 16: deve fazer login antes do checkout e finalizar a compra', () => {
        criarUsuarioEValidarLogin().then((usuario) => {
            finalizarCompra({
                comentario: 'Pedido de teste para checkout com login prévio.',
                usuario,
                logarAntes: true
            });

            SignupPage.clicarDeletarConta().validarContaDeletada();
        });
    });
});