describe('Test with valid login credential', () => {

    it('Sucess login', () => {
       const username =  Cypress.env('username')
       const password =  Cypress.env('password')
    cy.loginWithValidCredential(username, password);
    });
});