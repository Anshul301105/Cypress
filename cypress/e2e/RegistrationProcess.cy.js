import repo from '../support/object_repository/repoRegister';

before(function () {
    cy.fixture('RegisterData').then(function (exm) {
        this.registerData = exm;
    });
    cy.fixture('GuestOrderData').then(function (exm) {
        this.guestOrderData = exm;
    });
});

describe('Registration Page', function () {
    const objRepo = new repo();
    beforeEach(function () {
        cy.visit('https://stagingbeta.youniqueproducts.com/account/register');
        Cypress.on('uncaught:Exception', () => {
            return false;
        });
    });

    it('Register UnSuccessful - Empty Mandatory fields', function () {
        cy.registerClickOnNewToYouniqueTab();
        cy.registerClickCreateAccountButton().then(function () {
            objRepo
                .lblFirstNameRequired()
                .should('have.text', 'First name is required');
            objRepo
                .lblLastNameRequired()
                .should('have.text', 'Last name is required');
            objRepo.lblPasswordRequired().contains('Password is required');
            objRepo
                .lblConfirmPasswordRequired()
                .should('have.text', 'Verify Password is required');
        });
    });

    it('Register Successful and Navigate to Dashboard', function () {
        objRepo.btnJoinUs().click();
        objRepo.btnGetStarted().click();
        cy.registerClickOnNewToYouniqueTab().then(function () {
            cy.registerEnterFirstName(this.registerData.EnterFirstName);
            cy.registerEnterLastName(this.registerData.EnterLastName);
            cy.registerEnterEmail(this.registerData.EnterEmail);
            cy.registerEnterPassword(this.registerData.EnterPassword);
            cy.registerEnterVerifyPassword(
                this.registerData.EnterVerifyPassword
            );
        });
        cy.registerClickCreateAccountButton();
        cy.get('.profileName .name').should(
            'have.text',
            `You are registering as ${this.registerData.EnterFirstName} ${this.registerData.EnterLastName}!`
        );

        objRepo.lblSelectCountry().contains('Where do you live?');
        objRepo.lblFancyCountry().click();
        objRepo.drpdwnSelectCountry().click();
        cy.get('#languageList li[data-language="en_US"]').click();
        cy.get('#fName').should('have.value', this.registerData.EnterFirstName);
        cy.get('#lName').should('have.value', this.registerData.EnterLastName);
        cy.get('#email').should('have.value', this.registerData.EnterEmail);
        cy.get('#phone').type(this.registerData.phone);
        cy.intercept('api/user/validateGuestEmail').as('validateEmail');
        cy.get('#bDate').type(this.registerData.dob).blur();
        cy.wait('@validateEmail');
        cy.wait(3000);
        cy.intercept(
            'https://stagingbeta.youniqueproducts.com/search/v1/presenter'
        ).as('interceptCall');
        cy.get('#sponsorSearch').type('pre senter');

        cy.wait('@interceptCall');
        cy.get('.ui-widget .ui-menu-item').first().click();
        cy.wait(500);
        cy.get('#confirmSponsor').click();

        cy.wait(1000);

        cy.get('#individual').check('1');
        cy.get('#continuePaymentBtn').click();
        cy.get('.formErrorContent').should('be.visible');
        cy.get('#addressSection #a1').type(this.registerData.ad1);
        cy.get('#postal_code').type(this.registerData.zipcode);
        cy.get('#city').type(this.registerData.city);
        cy.get('#state').select(this.registerData.state);
        cy.get('#residential_address_category_id').check('1');
        cy.intercept('api/presenter/enroll/1/save').as('save');
        cy.get('#continuePaymentBtn .continue').click();
        cy.wait('@save');

        cy.get('#siteName').clear().type('lips');
        cy.intercept('api/presenter/checkSiteAvailable/lips').as(
            'checkAvailability'
        );

        cy.get('.checkSite').click();
        cy.wait('@checkAvailability');

        cy.get('.nameResp.taken').should('be.visible');

        cy.get('#siteName')
            .clear()
            .type(
                `${this.registerData.EnterFirstName}${this.registerData.EnterLastName}`
            );
        cy.intercept(
            `api/presenter/checkSiteAvailable/${this.registerData.EnterFirstName}${this.registerData.EnterLastName}`
        ).as('checkAvailabilityAgain');
        cy.get('.checkSite ').click();

        cy.wait('@checkAvailabilityAgain');

        cy.get('.nameResp.available').should('be.visible');

        cy.wait(500);
        cy.get('#agree1').check();
        cy.get('#agree2').check();
        cy.get('#agree3').check();

        cy.get('.reactSelect__value-container').scrollIntoView().click();
        cy.get('#react-select-2-option-0 > :nth-child(1) > .y_ml-xxl').click();
        cy.get('.presenterKitButton').click();
        cy.get('[data-testid="kitShipping"]').contains('$0.00');
        cy.get('.braintree-option__card > .braintree-option__label').click();

        cy.getIFrame('#braintree-hosted-field-number')
            .find('#credit-card-number')
            .type(this.guestOrderData.shippingInformation.creditCardNo);
        cy.getIFrame('#braintree-hosted-field-expirationDate')
            .find('#expiration')
            .type(this.guestOrderData.shippingInformation.exp);
        cy.getIFrame('#braintree-hosted-field-cvv')
            .find('#cvv')
            .type(this.guestOrderData.shippingInformation.cvv);

        cy.wait(1000);

        cy.intercept('api/presenter/enroll/1/submit').as('saveRegister');
        cy.get('#send-it').click();
        cy.wait('@saveRegister');
        cy.wait(5000);
        cy.get('[data-testid="presenterName"]').contains(
            `Welcome to the Younique Family, ${this.registerData.EnterFirstName} ${this.registerData.EnterLastName}!`
        );
    });
});
