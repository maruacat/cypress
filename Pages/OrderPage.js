class OrderPage {

AddFeedbackButtonClick(){
    cy.get('.btn').contains('Add Feedback').click()
}

TypeReview() {
    cy.get('[data-testid="textarea"]').type('Test Feedback')
}

SetRating(){
    cy.get(':nth-child(1) > .flex > :nth-child(4) > .px-1 > .h-18 > path').click()
    cy.get(':nth-child(2) > .flex > :nth-child(1) > .px-1 > .h-18 > path').click()
    cy.get(':nth-child(3) > .flex > :nth-child(5) > .px-1 > .h-18 > path').click()
    cy.get(':nth-child(4) > .flex > :nth-child(2) > .px-1 > .h-18').click()
    cy.get(':nth-child(5) > .flex > :nth-child(1) > .px-1 > .h-18').click()
    cy.get(':nth-child(6) > .flex > :nth-child(4) > .px-1 > .h-18').click()
}

SendButtonClick(){
    cy.get('.btn-green').contains('Send').dblclick()
}

YourFeedbackButtonClick(){
    cy.get('.btn').contains('Your Feedback').click()
}

CloseYourFeedback(){
    cy.get('.pb-40 > .btn').click()

}



}
 export default OrderPage