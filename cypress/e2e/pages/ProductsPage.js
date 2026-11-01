class ProductsPage {
  abrirListaProdutos() {
    cy.contains('a', 'Products').click();
    return this;
  }

  validarListaProdutos() {
    cy.location('pathname').should('eq', '/products');
    cy.contains(/all products/i).should('be.visible');
    return this;
  }

  validarQuantidadeProdutos() {
    cy.get('.single-products').should('have.length.at.least', 1);
    return this;
  }

  abrirPrimeiroProduto() {
    cy.get('a[href*="/product_details/"]').first().click();
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
    cy.get('a[data-product-id]').first().click({ force: true });
    cy.contains('View Cart').click();
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
