class repoCartPage {
    cartPage() {
        return cy.get('#shopping-cart-app');
    }

    freeShippingBanner() {
        return cy.get('#freeshipping .freeShippingBanner');
    }
}
export default repoCartPage;
