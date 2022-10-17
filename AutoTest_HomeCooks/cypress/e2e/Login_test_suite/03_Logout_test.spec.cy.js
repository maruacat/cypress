// / <reference types="Cypress" />
import LoginPage from '../../../../Pages/Loginpage'
import MainPage from '../../../../Pages/Mainpage'
import ProfilePage from '../../../../Pages/Profilepage'
import SignUpPage from '../../../../Pages/SignUpPage'
import MenuPage from '../../../../Pages/MenuPage'
import BasketPage from '../../../../Pages/BasketPage'
import FeedPage from '../../../../Pages/FeedPage'
import OrderPage from '../../../../Pages/OrderPage'
import AdminPage from '../../../../Pages/AdminPage'


const MainPage2 = new MainPage
const SignUp2 = new SignUpPage
const ProfilePage2 = new ProfilePage
const MenuPage2 = new MenuPage
const BasketPage2 = new BasketPage
const OrderPage2 = new OrderPage
const AdminPage2 = new AdminPage
const LoginPage2 = new LoginPage

let email_val =  'm.kirillova@brightlab.me'
let password_val = 'Test1234'

describe('Logout HomeCooks', ()=> {
    it('Logout as chef through burger bar profile', () => {
      //login
      cy.visit('/')
      cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2').click({timeout:3000})
      cy.url().should('include', '/login')
      LoginPage2.CloseAdvertisingBox()
      LoginPage2.TypeEmail(email_val)
      LoginPage2.TypePassword(password_val)
      LoginPage2.LogInButtonClick()
      cy.url().should('include', '/discover')
      LoginPage2.LogoHomeCooksButton()
      cy.wait(2000)

      // log out
      LoginPage2.ProfileMouseOver()
      LoginPage2.LogOutProfil()
      MainPage2.LogInButton()
    })

    it('Logout as chef through Edit button in profile', () => {
        //login
        cy.visit('/')
        cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2').click({timeout:3000})
        cy.url().should('include', '/login')
        LoginPage2.CloseAdvertisingBox()
        LoginPage2.TypeEmail(email_val)
        LoginPage2.TypePassword(password_val)
        LoginPage2.LogInButtonClick()
        cy.url().should('include', '/discover')
        LoginPage2.LogoHomeCooksButton()
        cy.wait(2000)
  
        // // log out
        LoginPage2.ProfileClick()
        ProfilePage2.EditButtonClick()
        ProfilePage2.LogOutClick()
        MainPage2.LogInButton()
      })

  })