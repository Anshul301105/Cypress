class repoProductsPage {

     lblProductPage() {
        return cy.get('.y_c-flow--max > .y_ls-md')
     }
     frameThumbnails() {
        return cy.get('.y_c-flow--max > .y_row')
     }
     productPageFirstItem() {
         return cy.get('.categoryContainer .productList .result-card').first().find('.y_focus-box')
     }
}
export default repoProductsPage