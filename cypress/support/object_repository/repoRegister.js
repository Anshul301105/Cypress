class repoRegister {
    tabNewToYounique() {
        return cy.get('#registerTab > .table-cell > .text-link');
    }

    txtRegisterFirstName() {
        return cy.get('#UserFirstName');
    }

    txtRegisterLastName() {
        return cy.get('#UserLastName');
    }

    txtRegisterEmail() {
        return cy.get('#UserEmail');
    }

    txtRegisterPassword() {
        return cy.get('#UserPassword');
    }

    txtRegisterVerifyPassword() {
        return cy.get('#confirmpassword');
    }

    btnRegisterCreateAccount() {
        return cy.get('#enrollSubmit');
    }

    lblRegisteredLastName() {
        return cy.get('#desktop-account-links > :nth-child(1)');
    }

    lblFirstNameRequired() {
        return cy.get('.UserFirstNameformError > .formErrorContent');
    }

    lblLastNameRequired() {
        return cy.get('.UserLastNameformError > .formErrorContent');
    }
    lblPasswordRequired() {
        return cy.get('.UserPasswordformError > .formErrorContent');
    }
    lblConfirmPasswordRequired() {
        return cy.get('.confirmpasswordformError > .formErrorContent');
    }

    btnJoinUs() {
        return cy.get('[data-testid="Join_Us"]');
    }

    btnGetStarted() {
        return cy.get('.intro-primary-cta');
    }

    lblSelectCountry() {
        return cy.get('#step0 > .row > :nth-child(3)');
    }

    drpdwnSelectCountry() {
        return cy.get('.fancyDropdownMenu li').eq(0);
    }
}
export default repoRegister;
