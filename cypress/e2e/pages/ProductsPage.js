class ProductsPage {
  clicarProdutos() {
    cy.contains('a', 'Products').click();
    return this;
  }

  validarTelaProdutos() {
    cy.location('pathname').should('eq', '/products');
    cy.contains(/all products/i).should('be.visible');
    return this;
  }

  validarListaProdutos() {
    cy.get('.product-image-wrapper, .single-products').should('have.length.at.least', 1);
    return this;
  }

  clicarPrimeiroViewProduct() {
    cy.get('.product-image-wrapper').first().contains('View Product').click();
    return this;
  }

  validarDetalhesProduto() {
    cy.location('pathname').should('match', /\/product_details\/\d+$/);
    cy.get('.product-information h2').should('be.visible');
    cy.contains(/category:/i).should('be.visible');
    cy.contains(/availability:/i).should('be.visible');
    cy.contains(/condition:/i).should('be.visible');
    cy.contains(/brand:/i).should('be.visible');
    return this;
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    cy.get('.product-image-wrapper').first().contains('Add to cart').click({ force: true });
    cy.contains('View Cart').click();
    return this;
  }

  validarCarrinho() {
    cy.location('pathname').should('eq', '/view_cart');
    cy.contains(/shopping cart/i).should('be.visible');
    return this;
  }

  clicarProceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
    return this;
  }

  validarDetalhesCheckout() {
    cy.contains(/address details|review your order/i).should('be.visible');
    return this;
  }

  preencherComentario(mensagem) {
    cy.get('textarea[name="message"]').should('be.visible').type(mensagem);
    return this;
  }

  clicarPlaceOrder() {
    cy.contains('Place Order').click();
    return this;
  }

  preencherDadosPagamento({ nome, numeroCartao, cvc, validade }) {
    cy.get('input[data-qa="name-on-card"]').should('be.visible').clear().type(nome);
    cy.get('input[data-qa="card-number"]').should('be.visible').clear().type(numeroCartao);
    cy.get('input[data-qa="cvc"]').should('be.visible').clear().type(cvc);
    cy.get('input[data-qa="expiry-month"]').should('be.visible').clear().type(validade.split('/')[0]);
    cy.get('input[data-qa="expiry-year"]').should('be.visible').clear().type(validade.split('/')[1]);
    return this;
  }

  clicarPayAndConfirmOrder() {
    cy.contains('Pay and Confirm Order').click();
    return this;
  }

  validarPedidoConfirmado() {
    cy.contains(/order placed!/i, { timeout: 20000 }).should('be.visible');
    cy.contains(/your order has been confirmed!/i, { timeout: 20000 }).should('be.visible');
    return this;
  }

  pesquisarProduto(nomeProduto) {
    cy.get('#search_product').should('be.visible').clear().type(nomeProduto);
    cy.get('#submit_search').should('be.visible').click();
    return this;
  }

  validarProdutosPesquisados() {
    cy.contains(/searched products/i).should('be.visible');
    cy.get('.single-products').should('have.length.at.least', 1);
    cy.contains(/blue top/i).should('be.visible');
    return this;
  }
}

export default new ProductsPage();
