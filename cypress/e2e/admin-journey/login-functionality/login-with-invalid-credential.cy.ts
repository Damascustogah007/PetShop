describe('Test with invalid login credential', () => {

    it('Unsuccessful login with invalid username', () => {
        const username = Cypress.env('invalid_username')
        const password = Cypress.env('password')
        cy.loginWithInvalidCredential(username, password);
    });

    it('Unsuccessful login with invalid password', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('invalid_password')
        cy.loginWithInvalidCredential(username, password);
    });
});