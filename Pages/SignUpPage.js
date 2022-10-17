class SignUpPage {

    TypeFirstName(name){
        cy.get('.mt-25 > .relative > [data-testid="input"]')
          .type(`${name}`, {force: true})
          .should('have.value', `${name}`, 'be.visible')
    }
    TypeSurname(surname){
        cy.get(':nth-child(2) > .relative > [data-testid="input"]')
          .type(`${surname}`, {force:true})
          .should('have.value', `${surname}`, 'be.visible')
    }
    TypeEmail(email){
            cy.get(':nth-child(3) > .relative > [data-testid="input"]')
            .type(`${email}`, {force:true})
            .should('have.value', `${email}`, 'be.visible')
    }
    TypePassword(password){
        cy.get(':nth-child(4) > .relative > [data-testid="input"]')
        .type(`${password}`, {force:true})
        .should('have.value', `${password}`)
        
    }
    TypeRepeatPassword(password){
        cy.get(':nth-child(5) > .relative > [data-testid="input"]')
        .type(`${password}`, {force:true})
        .should('have.value', `${password}`)
    }
    CompleateRegistrationClick(){
        cy.get('.btn').click()
    }
    
    ScipForNowButtonClick() {
        cy.get('.inline-btn-green').click()
    }

}
export default SignUpPage