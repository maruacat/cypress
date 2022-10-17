class MainPage {

AutoTestButtonClick(){
    cy.get(':nth-child(7) > .px-21').click()
}

OpenAllMenu(){
    cy.get('.mb-60 > ul > li').then($li => {
        const LiCount = $li.length
        for (let i = 0; i <LiCount; i++) {
          cy.get('.mb-60 > ul > li', {timeout:12000}).eq(i, {timeout:12000}).click({timeout:12000})
          cy.get('.ml-5', {timeout:6000})
          cy.get('.flex-grow > .justify-between > .flex').click()
        }
      })
}

OpenFirstMenu () {
    cy.get('.mt-20') 
      .first()
      .click()
} 

SignUpButtonClick () {
    cy.get('.btn-white')
      .click({force:true})
}

LogInButton(){
    cy.get('.btn-green', {timeout:6000}).click()
}

ProfileIconClick(){
    cy.get(':nth-child(6) > :nth-child(1) > .flex > .rounded-full', {timeout:7000}).click({force:true})

} 
ProfileIconMouseOver(){
    cy.get(':nth-child(6) > :nth-child(1) > .flex > .rounded-full').rightclick()
}

OrderDropdownClick(){
    cy.get('.bg-white > :nth-child(2) > .flex').click({force:true})
}

BasketIconClick() {
    cy.get('.mr-29 > .relative > .fill-current', {timeout:12000}).click({force:true})
}

MessageIconClick(){
    cy.get('.mr-20 > :nth-child(1) > .relative > .fill-current > path', {timeout:10000}).click({force:true})
}

NotificationIconClick(){
    cy.get('.w-24').click({force:true})
}


FeedButtonClick(){
    cy.get('.font-neueHaasUnica > :nth-child(2)', {timeout:7000}).click({force:true})
}

SalesTabClick(){
    cy.get('.bg-white > :nth-child(5) > .flex').click({force:true})

}
FeedbackTabClick(){
    cy.get(':nth-child(7) > .flex', {timeout:6000}).click({force:true})
}


}
export default MainPage