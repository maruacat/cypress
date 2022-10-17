/// <reference types="Cypress" />

import LoginPage from '../../../../Pages/Loginpage'

const LoginPage2 = new LoginPage

let email_val =  'm.kirillova@brightlab.me'
let password_val = 'Test1234'
let email_invalid = 'cat@brightlab.me'
let password_invalid = '0000jooooo'

describe('Login HomeCooks as Chef', ()=> {
  //Login valid date
    it('Login from promo page as Chef valid date', () => {
      cy.visit('https://home-cooks.co.uk')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton('.link.flex > svg')
    })

    it('Login from page login as Chef valid date', ()=> {
      cy.visit('https://home-cooks.co.uk/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton()
    })

    it('Login - promo page => login page valid date', () => {
      cy.visit('https://home-cooks.co.uk/')
      cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2)').click({timeout:3000})
      cy.url().should('include', '/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton()
    })
/// Login invalid date
    it('Login from promo page as Chef invalid date', () => {
      cy.visit('https://home-cooks.co.uk')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_invalid)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })

    it('Login from page login as Chef invalid date', ()=> {
      cy.visit('https://home-cooks.co.uk/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_invalid)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })

    it('Login - promo page => login page invalid date', () => {
      cy.visit('https://home-cooks.co.uk/')
      cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2)').click({timeout:3000})
      cy.url().should('include', '/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_invalid)
      LoginPage2.TypePassword(password_invalid)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })
  })


  
  