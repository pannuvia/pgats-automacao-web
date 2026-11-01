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
