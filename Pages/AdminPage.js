class AdminPage {
    LoginType(email) {
        cy.get('#login').type(`${email}`)
    }
    PasswordType(password){
    cy.get('#password').type(`${password}`)
    }

    LoginButtonClick(){
        cy.get('button').click()
    }
    AccountTabClick(){
        cy.get(':nth-child(5) > .nav-link > .fas').click() 
    }
    FeedbackTabClick(){
        cy.get('#account-context > .nav > :nth-child(3) > .nav-link').click() 
    }
    SortByDateFeedbackClick(){
        cy.get(':nth-child(9) > .kaffy-order-field').click()
    }
    FirstFeedbackOpen(){
        cy.get(':nth-child(2) > .container-scroller > .container-fluid > .main-panel > .content-wrapper > .col-lg-12 > .card > .card-body > .table > tbody > :nth-child(1) > :nth-child(2) > a')
      .click() 
    }
    DeleteButtonClick(){
        cy.get('.p-2 > .btn-danger').click()
    }

    ConfirmDeleteButton(){
        cy.get('.modal-footer > .btn-danger').click()
    }




}

export default AdminPage