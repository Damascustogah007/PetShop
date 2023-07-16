declare namespace Cypress {
    interface Chainable {
        loginWithValidCredential: (email: string, password: string) => void
    }
}