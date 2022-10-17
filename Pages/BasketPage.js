class BasketPage {

CheckoutButtonClick() {
    cy.get('.items-center > .btn').click()
}

DeleteAllFromBasket(){
    cy.get('.btn > .flex').click()   //delete all from basket
        cy.get('.mb-32').contains('Basket is empty')
}


}

export default BasketPage