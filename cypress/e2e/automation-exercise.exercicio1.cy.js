describe('Automation Exercise', () => {
    it('deve cadastrar um novo usuário', () => {
        
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('Pannuvia Monteiro');
        cy.get('input[data-qa="signup-email"]').type('pannuvia.monteiro@gmail.com');
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('input[id="id_gender2"]').check();
        cy.get('input[data-qa="password"]').type('senha123');
        cy.get('select[data-qa="days"]').select('10');
        cy.get('select[data-qa="months"]').select('May');
        cy.get('select[data-qa="years"]').select('1990');
        cy.get('input[data-qa="first_name"]').type('Pannuvia');
        cy.get('input[data-qa="last_name"]').type('Monteiro');
        cy.get('input[data-qa="company"]').type('Empresa Exemplo');
        cy.get('input[data-qa="address"]').type('Rua Exemplo, 123');
        cy.get('select[data-qa="country"]').select('United States');
        cy.get('input[data-qa="state"]').type('Texas');
        cy.get('input[data-qa="city"]').type('Dallas');
        cy.get('input[data-qa="zipcode"]').type('01000-000');
        cy.get('input[data-qa="mobile_number"]').type('999999999');
        cy.get('button[data-qa="create-account"]').click();
        cy.get('.title').should('contain', 'Account Created!');
    });
});