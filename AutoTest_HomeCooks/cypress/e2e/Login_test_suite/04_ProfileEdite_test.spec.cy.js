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


const MainPage2 = new MainPage
const SignUp2 = new SignUpPage
const MenuPage2 = new MenuPage
const BasketPage2 = new BasketPage
const OrderPage2 = new OrderPage
const AdminPage2 = new AdminPage
const LoginPage2 = new LoginPage
const ProfilePage2 = new ProfilePage

let email_val =  'm.kirillova@brightlab.me'
let password_val = 'Test1234'

describe('Profile Edite', ()=> {
    it('Profile_edit_info', () => {
        cy.visit('/')
        cy.get('.py-20 > .flex-grow > .items-center > .flex > :nth-child(2)').click({timeout:3000})
        cy.wait(2000)
        cy.url().should('include', '/login')
        LoginPage2.CloseAdvertisingBox()
        LoginPage2.TypeEmail(email_val)
        LoginPage2.TypePassword(password_val)
        LoginPage2.LogInButtonClick()
        cy.url().should('include', '/discover')
        LoginPage2.LogoHomeCooksButton()
        cy.get('.mr-20 > :nth-child(1) > .relative > .fill-current > path').click({force:true})
        cy.get(':nth-child(1) > .relative > .fill-current', {timeout:10000}).click()
        cy.get('.mr-29 > .relative > .fill-current').click()
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
})