import repo from "../support/object_repository/repo"

before(function () {

    cy.fixture('example').then(function (exm) {
        this.exm = exm
    })
})

describe('Demo Tests', function () {
const objRepo = new repo()
    beforeEach(function () {

        //cy.visit(Cypress.env('baseUrl')) ---- Need Cypress to be imported as a package.json file
        cy.visit('https://www.google.com')

    })

    it('First Demo Test', function () {
        var searchFirstResult
        cy.enterTextInGoogleSearch(this.exm.TextToEnter)
        cy.clickOnSuggestionSearchButton()
        objRepo.searchTextFirstResult().should('have.text', 'https://www.cypress.io')
    })
})