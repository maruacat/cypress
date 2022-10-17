class LoginPage {

TypeEmail(email){
    cy.get('.mb-16 > .flex-col > .relative > [data-testid="input"]', {timeout:25000})
        .type(`${email}`, {force: true})  
}
TypePassword(password){
    cy.get('.mb-8 > .flex-col > .relative > [data-testid="input"]')
          .type(`${password}`, {force: true})
}
LogInButtonClick(){
    cy.get('.btn-green', {timeout: 10000}).click({force:true}, {timeout: 10000})
}
//Кнопка HomeCooks на всех страницах
LogoHomeCooksButton(){
    cy.get('.link.flex > svg')
} 
CloseAdvertisingBox() {
    cy.get('.klaviyo-close-form > .needsclick').click({force: true})
}
//Навести курсор на профиль
ProfileMouseOver(){
    cy.get(':nth-child(6) > :nth-child(1) > .flex > .rounded-full').trigger('mouseover')

} 
//Сделать логаут через выпадающее бургер меню профиля
LogOutProfil(){
    cy.get('.bg-white > :nth-child(10) > .flex').click()
} 
ProfileClick(){
    cy.get(':nth-child(6) > :nth-child(1) > .flex > .rounded-full').click()

} 

}

export default LoginPage