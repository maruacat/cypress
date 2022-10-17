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

let first_name = 'Boris'
let surname = 'Cat'
let email_new = 'cat_test@mail.ru'
let password_new = 'Test1234'

let email_existing_eater = "marina.chizhikova.94@mail.ru"
let password_exiting_eater = 'Test1234'



describe('SignUp', ()=> {
    it('New user signing up - Staging', () => {

        //User navigates to the homepage, browse menus
        cy.visit('/discover/')
        LoginPage2.CloseAdvertisingBox()
        MainPage2.OpenFirstMenu()
        MenuPage2.BrowseMenuPage()
        
        
        //Sign up
        MainPage2.SignUpButtonClick()
        cy.url().should('include', '/sign-up')
        SignUp2.TypeFirstName(first_name)
        SignUp2.TypeSurname(surname)
        SignUp2.TypeEmail(email_new)
        SignUp2.TypePassword(password_new)
        SignUp2.TypeRepeatPassword(password_new)
        SignUp2.CompleateRegistrationClick()
        SignUp2.ScipForNowButtonClick()
    
        //Delete user
        MainPage2.ProfileIconMouseOver()
        cy.get(':nth-child(1) > .p-12').click()  //My profile button in drop-down
        ProfilePage2.AccountDetailsClick()
        ProfilePage2.DeleteAccount()
        MainPage2.SignUpButtonClick()
    
      })
    

})