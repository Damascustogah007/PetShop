describe('Test to add new customer', () => {

    it('Add new customer', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.loginWithValidCredential(username, password);
        cy.fixture('addNewCustomer').then((data) => {
            const {firstName, lastName, phone, location, password, confirmPassword} = data;
            cy.addNewCustomer(
                firstName,
                lastName,
                phone,
                location,
                password,
                confirmPassword
            );
        })

    });
});