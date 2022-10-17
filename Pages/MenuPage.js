class MenuPage{

    BrowseMenuPage () {
        cy.get('.pb-56 > .btn', {timeout:5000}).scrollIntoView().should('be.visible')
    }

    OpenFirstMenu () {
        cy.get('.mb-40').find('section')
          .first()
          .click()
    }
    AddBasketCardMenuClick(){
        cy.get('.h-full > :nth-child(2) > .flex > .btn').should('be.visible')
        .first()
        .click()
    }

    SendMessageButtonCheck(){
        cy.get('.ml-5').should('be.visible')   }

    /// кнопка плюс в модальном окне 
    ClickPlusMenuModal() {
        cy.get('.text-center > :nth-child(3)').click()
    }

    ///кнопка добавить в корзину в модалке меню
    AddBasketModalClick() {
        cy.get('.relative > .justify-between > .btn').click()
    }

    //check that the chef of the menu is Bogdan
    AutoTestCheck(){
        cy.contains('AutoTest')
    }

    BasketButtonClick(){
        cy.get('.pb-56 > .btn').click()
    }

}

export default MenuPage