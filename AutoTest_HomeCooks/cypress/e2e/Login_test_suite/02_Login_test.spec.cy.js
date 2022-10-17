/// <reference types="Cypress" />
import LoginPage from '../../../../Pages/Loginpage'
import MainPage from '../../../../Pages/Mainpage'
import ProfilePage from '../../../../Pages/Profilepage'
import SignUpPage from '../../../../Pages/SignUpPage'
import MenuPage from '../../../../Pages/MenuPage'
import BasketPage from '../../../../Pages/BasketPage'
import FeedPage from '../../../../Pages/FeedPage'
import OrderPage from '../../../../Pages/OrderPage'
import AdminPage from '../../../../Pages/AdminPage'


const LoginPage2 = new LoginPage
const MainPage2 = new MainPage
const SignUp2 = new SignUpPage
const ProfilePage2 = new ProfilePage
const MenuPage2 = new MenuPage
const BasketPage2 = new BasketPage
const OrderPage2 = new OrderPage
const AdminPage2 = new AdminPage

let email_val =  'm.kirillova@brightlab.me'
let password_val = 'Test1234'
let email_invalid = 'cat@brightlab.me'
let password_invalid = '0000jooooo'

describe('Login HomeCooks as Chef', ()=> {
  //Login valid date
    it('Login from pomo page as Chef valid date', () => {
      cy.visit('/')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton('.link.flex > svg')

    })

    it('Login from page login as Chef valid date', ()=> {
      cy.on('uncaught:exception', (e, runnable) => {
        console.log('Error is', e)
        console.log('Runable is', runnable)

        if (e.message.includes('uncaught exception)Error: Script error. Cypress detected that an uncaught error was thrown from a cross origin script.'))
        return false
      })
      cy.visit('/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton()
       //   // go to the checkout test sripe work will be continue
      //  cy.get('#ea3f43a9-9ef6-408b-a5e2-1fdf393b9ddd > .drop-shadow-md > .relative > .link > .max-h-full').click()
      //  cy.get('.h-full > :nth-child(2) > .flex > .btn').click()
      //  cy.get('.pb-56 > .btn').click()
      //  cy.get('.items-center > .btn').click()
      //  cy.get('.items-center > .btn').click()
      //  cy.origin('https://stripe.com', () => {
      //   cy.visit('https://checkout.stripe.com/pay/cs_test_b18RyYclh9txYrX7sMSUIRBmdVmZiCTHfNBRLRKXOdYvaY3aSBxi6xBnDI#fidkdWxOYHwnPyd1blpxYHZxWjA0Tzx2Yk1HcERDf0c2NkZOcG5BT0F%2FVzFWMVVINGp3VWxvY3xMMGtGSjVCaTw1ZzBxaXJQREQ9dFBUa2RONlZrNVYxUWtKQWJVNUFPcFExZ0tjZlZJYX1HNTV%2FVlNOZzxpcycpJ2hsYXYnP34nYnBsYSc%2FJ2A8MGM8YGFjKDY0PGAoMWE1YCg9MTA1KDY2ZDJjYDc0NDI3YzQzMjM9PCcpJ2hwbGEnPydgNTJjZjJjMig0YGEwKDFmMTwoZDFkNihhZjMyPDE3PDcwZ2MwZz1mPGQnKSd2bGEnPydjMjBnMj08Myg8Mj0yKDFkZmYoPDA2NShkNGRmPTQ9NTZkNmQxZGY8MmcneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8naHBpcWxabHFgaCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKiptamhgZmpqbnZ2cWRibGtiK3BuJ3gl')        
    })
      
    })

    it('Login - promo page => login page valid date', () => {
      cy.visit('/')
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
    it('Login from pomo page as Chef invalid date', () => {
      cy.visit('/')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_invalid)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })

    it('Login from page login as Chef invalid date', ()=> {
      cy.visit('/')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_invalid)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })

    it('Login - promo page => login page invalid date', () => {
      cy.visit('/')
      cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2)').click({timeout:3000})
      cy.url().should('include', '/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_invalid)
      LoginPage2.TypePassword(password_invalid)
      LoginPage2.LogInButtonClick()
      cy.get('[data-testid="alert"]')
    })

  
  