describe('Automation Exercise', () => {
    it('deve cadastrar um novo usuário', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cy.visit('https://automationexercise.com/');
            cy.get('a[href="/login"]').click();
            cy.get('input[data-qa="signup-name"]').type(usuario.fullName);
            cy.get('input[data-qa="signup-email"]').type(usuario.email);
            cy.get('button[data-qa="signup-button"]').click();

            cy.get(`input[id="${usuario.gender}"]`).check({ force: true });
            cy.get('input[data-qa="password"]').type(usuario.password);
            cy.get('select[data-qa="days"]').select(usuario.days);
            cy.get('select[data-qa="months"]').select(usuario.months);
            cy.get('select[data-qa="years"]').select(usuario.years);
            cy.get('input[data-qa="first_name"]').type(usuario.firstName);
            cy.get('input[data-qa="last_name"]').type(usuario.lastName);
            cy.get('input[data-qa="company"]').type(usuario.company);
            cy.get('input[data-qa="address"]').type(usuario.address);
            cy.get('select[data-qa="country"]').select(usuario.country);
            cy.get('input[data-qa="state"]').type(usuario.state);
            cy.get('input[data-qa="city"]').type(usuario.city);
            cy.get('input[data-qa="zipcode"]').type(usuario.zipCode);
            cy.get('input[data-qa="mobile_number"]').type(usuario.mobile);
            cy.get('button[data-qa="create-account"]').click();
            cy.get('.title').should('contain', 'Account Created!');
        });
    });

    it('deve cadastrar novo usuario, fazer login e excluir conta', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cy.visit('https://automationexercise.com/');
            cy.contains('a', 'Signup / Login').click();
            cy.contains('New User Signup!').should('be.visible');

            cy.get('input[data-qa="signup-name"]').type(usuario.fullName);
            cy.get('input[data-qa="signup-email"]').type(usuario.email);
            cy.get('button[data-qa="signup-button"]').click();

            cy.contains('Enter Account Information').should('be.visible');

            cy.get(`input[id="${usuario.gender}"]`).check({ force: true });
            cy.get('input[data-qa="password"]').type(usuario.password);
            cy.get('select[data-qa="days"]').select(usuario.days);
            cy.get('select[data-qa="months"]').select(usuario.months);
            cy.get('select[data-qa="years"]').select(usuario.years);
            cy.get('#newsletter').check({ force: true });
            cy.get('#optin').check({ force: true });

            cy.get('input[data-qa="first_name"]').type(usuario.firstName);
            cy.get('input[data-qa="last_name"]').type(usuario.lastName);
            cy.get('input[data-qa="company"]').type(usuario.company);
            cy.get('input[data-qa="address"]').type(usuario.address);
            cy.get('select[data-qa="country"]').select(usuario.country);
            cy.get('input[data-qa="state"]').type(usuario.state);
            cy.get('input[data-qa="city"]').type(usuario.city);
            cy.get('input[data-qa="zipcode"]').type(usuario.zipCode);
            cy.get('input[data-qa="mobile_number"]').type(usuario.mobile);

            cy.get('button[data-qa="create-account"]').click();
            cy.contains('Account Created!').should('be.visible');

            cy.contains('a', 'Continue').click();
            cy.contains('Logged in as').should('be.visible');

            cy.contains('Delete Account').click();
            cy.contains('Account Deleted!').should('be.visible');
            cy.contains('a', 'Continue').click();
        });
    });

    it('deve cadastrar novo usuário e fazer login com email e senha corretos', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cy.visit('https://automationexercise.com/');
            cy.get('a[href="/login"]').click();
            cy.contains('New User Signup!').should('be.visible');

            cy.get('input[data-qa="signup-name"]').type(usuario.fullName);
            cy.get('input[data-qa="signup-email"]').type(usuario.email);
            cy.get('button[data-qa="signup-button"]').click();

            cy.contains('Enter Account Information').should('be.visible');
            cy.get(`input[id="${usuario.gender}"]`).check({ force: true });
            cy.get('input[data-qa="password"]').type(usuario.password);
            cy.get('select[data-qa="days"]').select(usuario.days);
            cy.get('select[data-qa="months"]').select(usuario.months);
            cy.get('select[data-qa="years"]').select(usuario.years);
            cy.get('input[data-qa="first_name"]').type(usuario.firstName);
            cy.get('input[data-qa="last_name"]').type(usuario.lastName);
            cy.get('input[data-qa="company"]').type(usuario.company);
            cy.get('input[data-qa="address"]').type(usuario.address);
            cy.get('select[data-qa="country"]').select(usuario.country);
            cy.get('input[data-qa="state"]').type(usuario.state);
            cy.get('input[data-qa="city"]').type(usuario.city);
            cy.get('input[data-qa="zipcode"]').type(usuario.zipCode);
            cy.get('input[data-qa="mobile_number"]').type(usuario.mobile);
            cy.get('button[data-qa="create-account"]').click();

            cy.contains('Account Created!').should('be.visible');
            cy.contains('a', 'Continue').click();
            cy.contains('Logged in as').should('be.visible');

            cy.get('a[href="/logout"]').click();
            cy.visit('https://automationexercise.com/login');
            cy.contains('Login to your account').should('be.visible');

            cy.get('input[data-qa="login-email"]').should('be.visible').clear().type(usuario.email);
            cy.get('input[data-qa="login-password"]').should('be.visible').clear().type(usuario.password);
            cy.get('button[data-qa="login-button"]').click();

            cy.contains('Logged in as').should('be.visible');
            cy.contains('Delete Account').click();
            cy.contains('Account Deleted!').should('be.visible');
        });
    });

    it('deve tentar logar com email e senha incorretos', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cy.visit('https://automationexercise.com/');
            cy.get('a[href="/login"]').click();
            cy.contains('New User Signup!').should('be.visible');

            cy.contains('Login to your account').should('be.visible');

            cy.get('input[data-qa="login-email"]').should('be.visible').clear().type(usuario.email);
            cy.get('input[data-qa="login-password"]').should('be.visible').clear().type('senhaIncorreta123');
            cy.get('button[data-qa="login-button"]').click();

            cy.contains('Your email or password is incorrect!').should('be.visible');
        });
    });

    it.only('deve cadastrar novo usuário e fazer logout', () => {
        cy.criarUsuarioAleatorio().then((usuario) => {
            cy.visit('https://automationexercise.com/');
            cy.get('a[href="/login"]').click();
            cy.contains('New User Signup!').should('be.visible');

            cy.get('input[data-qa="signup-name"]').type(usuario.fullName);
            cy.get('input[data-qa="signup-email"]').type(usuario.email);
            cy.get('button[data-qa="signup-button"]').click();

            cy.contains('Enter Account Information').should('be.visible');
            cy.get(`input[id="${usuario.gender}"]`).check({ force: true });
            cy.get('input[data-qa="password"]').type(usuario.password);
            cy.get('select[data-qa="days"]').select(usuario.days);
            cy.get('select[data-qa="months"]').select(usuario.months);
            cy.get('select[data-qa="years"]').select(usuario.years);
            cy.get('input[data-qa="first_name"]').type(usuario.firstName);
            cy.get('input[data-qa="last_name"]').type(usuario.lastName);
            cy.get('input[data-qa="company"]').type(usuario.company);
            cy.get('input[data-qa="address"]').type(usuario.address);
            cy.get('select[data-qa="country"]').select(usuario.country);
            cy.get('input[data-qa="state"]').type(usuario.state);
            cy.get('input[data-qa="city"]').type(usuario.city);
            cy.get('input[data-qa="zipcode"]').type(usuario.zipCode);
            cy.get('input[data-qa="mobile_number"]').type(usuario.mobile);
            cy.get('button[data-qa="create-account"]').click();

            cy.contains('Account Created!').should('be.visible');
            cy.contains('a', 'Continue').click();
            cy.contains('Logged in as').should('be.visible');

            cy.get('a[href="/logout"]').click();
            cy.visit('https://automationexercise.com/login');
            cy.contains('Login to your account').should('be.visible');
        });
    });


});