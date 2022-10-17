/// <reference types="Cypress" />
import LoginPage from '../Pages/Loginpage'

const page = new LoginPage
let email_val =  'm.kirillova@brightlab.me'
let password_val = 'Test1234'
let email_invalid = 'cat@brightlab.me'
let password_invalid = '0000jooooo'

describe('Open first element',() => {
    it('Search element', ()=> {
    //  cy.intercept('GET',
    //     'https://js.stripe.com/v3/fingerprinted/data/ru-6736e470bfc591dc6aaba27fe5c41922.json',
    //     //  'success')
    //         ({statusCode: 200,
    //           body: {}
    //          }))
    //     cy.intercept('POST', 'https://r.stripe.com/0', 'success')

        cy.visit('/login')
        .wait(2000)
        page.CloseAdvertisingBox()
        page.TypeEmail(email_val)
        page.TypePassword(password_val)
        page.LogInButtonClick()
        cy.url().should('include', '/discover')        
        // cy.get('.ml-auto').click() //кнопка пролистывания даты
        // cy.get(':nth-child(12) > .flex_center').click({timeout:5000}) //выбрать 30 число
        cy.get(':nth-child(3) > .px-21').click()  //выбрать алкоголь
        // cy.get(':nth-child(1) > .px-21').click()//выбрать афганское меню
            .wait(2000) 

        // cy.intercept('GET', 'https://js.stripe.com/v3/fingerprinted/data/ru-6736e470bfc591dc6aaba27fe5c41922.json', 'success')
        // cy.intercept('POST', 'https://r.stripe.com/0', 'success')
        // cy.get('class="mb-60"')
        cy.get('.mt-20')
        // .contains("T8afc506a-8f6c-4d1c-a29c-5c759a0158cb",{timeout:10000})
         .first()
         .click()
        cy.contains('Bogdan')
        cy.get('.h-full > :nth-child(2) > .flex > .btn', {timeout:5000}).click()  //Add basket button
        cy.get('.pb-56 > .btn').click()
        cy.get('.items-center > .btn').click()
        cy.get('.items-center > .btn').click()
        
        cy.get('.px-15 > .btn').click()

        cy.on('uncaught:exception', (e, runnable) => {
            console.log('Error is', e)
            console.log('Runable is', runnable)
    
            if (e.message.includes('(uncaught exception)Error: Script error. Cypress detected that an uncaught error was thrown from a cross origin script. We cannot provide you the stack trace, line number, or file where this error occurred. Check your Developer Tools Console for the actual error - it should be printed there'))
            return false
          })
          cy.origin('https://stripe.com', () => {
          cy.visit('https://api.stripe.com/')})


          // cy.origin('https://homecooksstaging.uk', () => {
          // cy.visit('https://homecooksstaging.uk/api')})


        // cy.origin('https://stripe.com', () => {
        //       cy.visit('https://api.stripe.com/v1/payment_pages/cs_test_b1oIaKnm4t6K3yyL29icFqkUHOqRYis5lCEfv7LK2BTQU78nMeBreW2Tp1/init')})
        
      // cy.get('.px-15 > .btn').click()   //

      // cy.intercept({
      //   method: 'POST',
      //   url: 'https://homecooksstaging.uk/api'}).then((response) => {
      //     expect(response.status).equal(200)})
        
        
        
        
      //   as('apiCheck')
      // cy.wait('@apiCheck').then(console.log)
      
      
      // then((interception) => {
      //   expect('respone')
      // })
      // its('response', console.log('response'))
      
      
      
    
  
                
        // cy.get('#email', { timeout: 4000 }).type('email@mail.ru')
        // cy.get('#cardNumber').type('4242424242424242')
        // cy.get('#cardExpiry').type('12 24')
        // cy.get('#cardCvc').type('123')
        // cy.get('#billingName').type('Kirillova')
        // cy.get('.SubmitButton-IconContainer').click()
        //   .wait(5000)
          
        //     })
       
     })
    }) 