class SalesPage{
CookingListButtonClick(){
        cy.get(':nth-child(1) > .shadow-container > :nth-child(1) > .max-w-255 > :nth-child(2) > .btn').click()

}


CloseCookingListButtonClick(){
    cy.get('.flex_center > .stroke-current > path').click({force:true})
}

}

export default SalesPage