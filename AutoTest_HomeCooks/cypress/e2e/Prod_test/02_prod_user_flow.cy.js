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
import PromoPage from '../../../../Pages/PromoPage'




const LoginPage2 = new LoginPage
const ProfilePage2 = new ProfilePage
const MainPage2 = new MainPage
const MenuPage2 = new MenuPage
const BasketPage2 = new BasketPage
const PromoPage2 = new PromoPage




let email_val =  'marina.chizhikova.94@mail.ru'
let password_val = 'Test1234'

describe('Prod user-flow', ()=> {
    it('User check messages and notification, edit info, then go to tab on Profile page', () => {
    cy.visit('/')
    PromoPage2.LoginButtonUppBarClick()
    cy.wait(2000)
    cy.url().should('include', '/login')
    LoginPage2.CloseAdvertisingBox()
    LoginPage2.TypeEmail(email_val)
    LoginPage2.TypePassword(password_val)
    LoginPage2.LogInButtonClick()
    cy.url().should('include', '/discover')
    LoginPage2.LogoHomeCooksButton()
    MainPage2.NotificationIconClick()
    MainPage2.MessageIconClick()
    MainPage2.BasketIconClick()
    cy.url({timeout:5000}).should('include', '/basket')
    LoginPage2.ProfileClick()
    ProfilePage2.EditButtonClick()
    ProfilePage2.EditInformationClick()
    ProfilePage2.NameType()
    ProfilePage2.SurnameType()
    ProfilePage2.DescriptionType()
    cy.get('.btn-green').click()
    ProfilePage2.YourBuisnessClick()
    ProfilePage2.MyOrderClick()
    cy.url().should('include','/orders')
    ProfilePage2.MyAddressesClick()
    cy.url().should('include', '/address')
    ProfilePage2.AccountDetailsClick()
    cy.url().should('include', '/details')
    ProfilePage2.LogOutClick()
    MainPage2.LogInButton()
    })


    it.only('Existing user flow', () => {
        //User navigates to the homepage, open all menu
        cy.visit('/discover')
        LoginPage2.CloseAdvertisingBox()
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        
        MainPage2.OpenAllMenu() 
        
        // User open first menu and add in basket
        cy.get('.mt-20').filter(':contains("left to order!")').first().click()
          ////Открыть первое меню не солд аут\

        MenuPage2.BrowseMenuPage()
        MenuPage2.SendMessageButtonCheck()
        MenuPage2.AddBasketCardMenuClick()
        MenuPage2.ClickPlusMenuModal()
        MenuPage2.ClickPlusMenuModal()
        MenuPage2.BasketButtonClick()

        cy.get('.justify-end > .font-neueHaasUnica > :nth-child(1)').click()  ///menu tab main page
        // //user logins successfully
       cy.visit('/login')       // MainPage2.LogInButton()

        LoginPage2.TypeEmail(email_val)
        LoginPage2.TypePassword(password_val)
        LoginPage2.LogInButtonClick()
        // //User go to the basket and checks out
        MainPage2.BasketIconClick()
        
        BasketPage2.CheckoutButtonClick()
        cy.wait(2000)
        cy.go('back')
        BasketPage2.DeleteAllFromBasket()


        cy.get('.justify-end > .font-neueHaasUnica > :nth-child(1)').click()  ///menu tab main page

        cy.get('.mt-20').filter(':contains("left to order!")').first().click()
          ////Открыть первое меню не солд аут\
        MenuPage2.BrowseMenuPage()
        MenuPage2.SendMessageButtonCheck()
        MenuPage2.AddBasketCardMenuClick()
        MenuPage2.ClickPlusMenuModal()
        MenuPage2.ClickPlusMenuModal()
        MenuPage2.BasketButtonClick()
        BasketPage2.CheckoutButtonClick()

        // cy.get('.px-15 > .btn').click()  //By now in checkout page
      

        // cy.on('uncaught:exception', (e, runnable) => {
        //     console.log('Error is', e)
        //     console.log('Runable is', runnable)
    
        //     if (e.message.includes('(uncaught exception)Error: Script error. Cypress detected that an uncaught error was thrown from a cross origin script. We cannot provide you the stack trace, line number, or file where this error occurred. Check your Developer Tools Console for the actual error - it should be printed there'))
        //     return false
        //   })
        // cy.origin('https://stripe.com')








        
    })
})
