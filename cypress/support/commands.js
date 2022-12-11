// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
import repo from "../support/object_repository/repo"
const objRepo = new repo()
Cypress.Commands.add("enterTextInGoogleSearch", (textToEnter) => {
    objRepo.searchTextBox().type(textToEnter);
    //cy.waitFor5Sec()
})

Cypress.Commands.add("clickOnSuggestionSearchButton",() => {
    objRepo.clickOnSuggestionSearchButton().click();
    cy.waitFor5Sec()
})

Cypress.Commands.add("waitFor5Sec", () => {
    cy.wait(4000)
})