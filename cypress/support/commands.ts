/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginWithValidCredential', (email, password) => {
    cy.visit('/Login');
    cy.get('.text-h5').then((value) => {
        const loginText = value.text();
        cy.wrap(value).should('contain.text', loginText);
    });
    cy.get('.login__form').should('exist').and('be.visible');
    cy.get('.logo-wrapper').should('be.visible');
    cy.get('.v-btn').then((button) => {
        const buttonText = button.text();
        cy.wrap(button).should('contain.text', buttonText);
    })
    cy.get('#input-0').type(email);
    cy.get('#input-2').type(password);
    cy.get('.v-btn').click();
    cy.url().should('include', '/dashboard')
    cy.contains('LOGOUT').should('exist').and('be.visible');
    cy.request('/dashboard').should((response) => {
        expect(response.status).to.eq(200);
    });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


