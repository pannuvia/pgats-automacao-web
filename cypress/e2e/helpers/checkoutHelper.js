import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductsPage from '../pages/ProductsPage';
import { DADOS_PAGAMENTO } from '../../support/constants';
import { criarDadosPagamentoPadrao } from '../../support/factories/pagamentoFactory';

export function finalizarCompra({ comentario, usuario = null, logarAntes = false } = {}) {
  if (logarAntes && usuario) {
    LoginPage.deslogar();
    LoginPage.visitar().validarTelaLogin();
    LoginPage.fazerLogin(usuario.email, usuario.password);
    SignupPage.validarUsuarioLogado();
  }

  const dadosPagamento = criarDadosPagamentoPadrao();
  const dadosPagamentoPadrao = { ...DADOS_PAGAMENTO };

  HomePage.clicarProdutos();
  ProductsPage.adicionarPrimeiroProdutoAoCarrinho();

  CartPage.validarCarrinho()
    .clicarProceedToCheckout();

  CheckoutPage.validarDetalhesCheckout()
    .preencherComentario(comentario)
    .clicarPlaceOrder()
    .preencherDadosPagamento(dadosPagamentoPadrao)
    .clicarPayAndConfirmOrder()
    .validarPedidoConfirmado();
}
