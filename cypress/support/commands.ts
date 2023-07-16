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

Cypress.Commands.add('loginWithInvalidCredential', (email, password) => {
    cy.visit('/Login');
    cy.get('#input-0').type(email);
    cy.get('#input-2').type(password);
    cy.get('.v-btn').click();
    cy.get('.text-red').then((error) => {
        const redText = error.text();
        cy.wrap(error).should('contain.text', redText);
    });
});

Cypress.Commands.add('addNewCustomer', (
    firstName,
    lastName,
    phone,
    location,
    password,
    confirmPassword
) => {
    const d = new Date();
    let email = `Mateo.Blažević${d.getSeconds()}@gmail.com`
    cy.contains('Customers').click();
    cy.get('.table-header__content').children().eq(1).click()
    cy.get('.text-h5').eq(1).then((value) => {
        const addNewCustomerHeader = value.text();
        cy.wrap(value).should('contain.text', addNewCustomerHeader);
    });
    cy.get('.v-input__control').eq(5).type(firstName);
    cy.get('.v-input__control').eq(6).type(lastName);
    cy.get('.v-input__control').eq(7).type(email);
    cy.get('.v-input__control').eq(8).type(phone);
    cy.get('.v-input__control').eq(9).type(location);
    cy.get('.v-input__control').eq(10).type(password)
    cy.get('.v-input__control').eq(11).type(confirmPassword);
    cy.get('.v-btn__underlay').eq(7).scrollIntoView().click({ force: true });
    cy.get('.cursor-pointer').eq(1).click();
    //Verify if record exit in the table by the unique identifier "email"
    cy.contains(email).should('be.visible').and('exist');
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


