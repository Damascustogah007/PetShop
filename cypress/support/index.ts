declare namespace Cypress {
    interface Chainable {
        loginWithValidCredential: (email: string, password: string) => void
        loginWithInvalidCredential: (email: string, password: string) => void
        addNewCustomer: (firstName: string, lastName: string, phone: string, location: string, password: string, confirmPassword: string) => void
        signInAndLogInUser: (firstName: string, lastName: string, phone: string, location: string, password: string, confirmPassword: string) => void
    }
}