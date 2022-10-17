
class ProfilePage {
    EditButtonClick(){
        cy.get('.btn-white', {timeout:10000}).contains('Edit')
        .click({force: true})
    }
    EditInformationClick(){
        cy.get('.pt-30 > .flex > .btn').click()
    }
    NameType(){
        cy.get(':nth-child(1) > .relative > [data-testid="input"]')
        .clear()    
        .type('Marina')
    }
    SurnameType(){
        cy.get(':nth-child(2) > .relative > [data-testid="input"]')
            .clear()
            .type('Kirillova')
    }
    DescriptionType(){
        cy.get('[data-testid="textarea"]')
            .clear()
            .type('Test')
    }
    YourBuisnessClick(){
         cy.get('.pt-26')
        .contains('Your Business').click()
    }
    MyOrderClick(){
        cy.get('.pt-33 > .flex-col > :nth-child(2)').click()
    }
    MyAddressesClick(){
        cy.get('.pt-33 > .flex-col > :nth-child(3)').click({force:true})
    }
    AccountDetailsClick(){
        cy.get('.pt-33 > .flex-col > :nth-child(4)').click({force:true})
    }
    LogOutClick(){
        cy.get('.flex-col > :nth-child(10)').click({timeout:5000})
    }
    LinkedType(){
        cy.get(':nth-child(3) > .xs\:flex-col > .mb-8 > .flex-col > .relative', {timeout:5000}).within(()=> {
            cy.get('input:first').should('have.attr', 'placeholder', 'URL required')
        }
        )
            //.type('https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D1%8F%D1%86%D1%83%D0%BA-399422237')
    }
    InstagrammType(){
        cy.get(':nth-child(4) > .xs\:flex-col > .mb-8 > .flex-col > .relative > [data-testid="input"]')
            .type('https://www.instagram.com/brightlab.company/')

    }
    FacebookType(){
        cy.get(':nth-child(5) > .xs\:flex-col > .mb-8 > .flex-col > .relative > [data-testid="input"]')
        .type('https://www.facebook.com/brightlab.company/?ref=page_internal')
    }

    AddNewAddres(){
        cy.get('.z-0 > .btn').click()
        cy.get('.z-0 > .btn')
           .type('54')
           .contains('Flat 2, 54 Crown Street West, Lowestoft, Suffolk').click()
        cy.get(':nth-child(5) > .flex-col > .relative > [data-testid="input"]')
           .type('1234567891')
        cy.get('[data-testid="textarea"]').type('Home. Sweet home.')
        cy.get('.w-16').check()
        cy.get('.w-16').click()
    }
    EditeAddres(){
        cy.get(':nth-child(1) > :nth-child(2) > .relative > :nth-child(1) > .text-\[\#AEB1B1\]').click()
        cy.get('#headlessui-popover-panel-63 > .bg-white > :nth-child(2)', {timeout: 3000}).click()
        cy.get('div[tabindex="0"] > .flex-col > .relative > .stroke-current').click()
        cy.get('div[tabindex="0"] > .flex-col > .relative > [data-testid="input"]')
          .type('32')
          .contains('32 Plaisir Place, Thurston Road, Lowestoft, Suffolk')
          .click()
        cy.get('.btn-green').click()

    }

    DeleteAccount(){
        cy.get('.mt-auto > .btn').click()
        cy.get('.btn-danger').click()
    }

}
export default ProfilePage