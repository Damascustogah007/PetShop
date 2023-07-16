describe('Test to sign up and login on pet-shop', () => {
    before(() => {
        cy.visit('/');
    });

    it('Successful Sign up and log in', () => {
        cy.fixture('addNewCustomer').then((data) => {
            const { firstName, lastName, phone, location, password, confirmPassword } = data;
            cy.signInAndLogInUser(
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