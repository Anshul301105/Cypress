class repoHomePage {
    btnSelectMarket() {
        return cy.get('#main-flag');
    }

    btnUSMarketEnglish() {
        return cy.get(':nth-child(1) > ol > :nth-child(1) > .block');
    }
    lblWelcomeMsg() {
        return cy.get('#desktop-account-links');
    }
    btnHIITMenu() {
        return cy.get('#hamburgerNavToggle > .y_fs-xl');
    }
    btnMakeupCategory() {
        return cy.get('[data-testid="Makeup"] > .y_col');
    }
    btnEyeMakeup() {
        return cy.get('[data-testid="Eyes"]');
    }
    slctLashesMakeup() {
        return cy.get('[data-testid="/category/lashes"]');
    }
}
export default repoHomePage;
