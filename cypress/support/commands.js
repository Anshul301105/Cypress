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


import repoRegister from "../support/object_repository/repoRegister"
import repoHomePage from "../support/object_repository/repoHomePage"

const objRepoRegister = new repoRegister()
const objRepoHomePage = new repoHomePage()

Cypress.Commands.add("waitFor5Sec",() => {
    cy.wait(5000)
})

Cypress.Commands.add("registerClickOnNewToYouniqueTab",() => {
    objRepoRegister.tabNewToYounique().click();
    cy.waitFor5Sec()
})

Cypress.Commands.add("registerEnterFirstName", (textToEnter) => {
   objRepoRegister.txtRegisterFirstName().type(textToEnter);
})

Cypress.Commands.add("registerEnterLastName", (textToEnter) => {
   objRepoRegister.txtRegisterLastName().type(textToEnter);
})

Cypress.Commands.add("registerEnterEmail", (textToEnter) => {
   objRepoRegister.txtRegisterEmail().type(textToEnter);
})

Cypress.Commands.add("registerEnterPassword", (textToEnter) => {
    objRepoRegister.txtRegisterPassword().type(textToEnter);
})

Cypress.Commands.add("registerEnterVerifyPassword", (textToEnter) => {
   objRepoRegister.txtRegisterVerifyPassword().type(textToEnter);
})

Cypress.Commands.add("registerClickCreateAccountButton", () => {
   objRepoRegister.btnRegisterCreateAccount().click();
   cy.waitFor5Sec()
})

Cypress.Commands.add("selectWhereToLive", (countryToSelect) => {
   objRepoRegister.drpdwnSelectCountry().select(countryToSelect);
   cy.waitFor5Sec()
})
Cypress.Commands.add("selectEyeLashesMakeup", () => {
   objRepoHomePage.btnMakeupCategory().click()
   objRepoHomePage.btnEyeMakeup().click()
   objRepoHomePage.slctLashesMakeup().click()
})

Cypress.Commands.add("getIFrame", (iFrameId) => {
   return cy.get(iFrameId).its('0.contentDocument').should('exist').its('body').should('not.be.undefined').then(cy.wrap);
})

Cypress.on('uncaught:Exception', ()=>{
   console.log("Shivam")
   return false;
})