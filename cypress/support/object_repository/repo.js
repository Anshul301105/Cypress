class repo {

    searchTextBox() {
        return cy.get('.gLFyf')
    }

    clickOnSuggestionSearchButton() {
            return cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
    }

    searchTextFirstResult(){
            return cy.get('[href="https://www.cypress.io/"] > .TbwUpd > .iUh30')
    }
}
export default repo