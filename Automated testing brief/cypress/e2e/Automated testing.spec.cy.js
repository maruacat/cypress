/// <reference types="Cypress" />
import LoginPage from '../../../Pages/Loginpage'
import MainPage from '../../../Pages/Mainpage'
import ProfilePage from '../../../Pages/Profilepage'
import SignUpPage from '../../../Pages/SignUpPage'
import MenuPage from '../../../Pages/MenuPage'
import BasketPage from '../../../Pages/BasketPage'
import FeedPage from '../../../Pages/FeedPage'
import OrderPage from '../../../Pages/OrderPage'
import AdminPage from '../../../Pages/AdminPage'
import SalesPage from '../../../Pages/SalesPage'


const LoginPage2 = new LoginPage
const MainPage2 = new MainPage
const SignUp2 = new SignUpPage
const ProfilePage2 = new ProfilePage
const MenuPage2 = new MenuPage
const BasketPage2 = new BasketPage
const OrderPage2 = new OrderPage
const AdminPage2 = new AdminPage
const SalesPage2 = new SalesPage

let first_name = 'Boris'
let surname = 'Cat'
let email_new = 'cat_auto_test@mail.ru'
let password_new = 'Test1234'

let email_existing_eater = "marina.chizhikova.94@mail.ru"
let password_exiting_eater = 'Test1234'

let email_existing_chef = 'm.kirillova@brightlab.me'
let password_exiting_chef = 'Test1234'

describe('Automated testing brief', () => {
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

  it('Existing user purchase', () => {
    //User navigates to the homepage, browse menus
    cy.visit('/discover/')
    LoginPage2.CloseAdvertisingBox()
    MainPage2.AutoTestButtonClick() 
    cy.wait(3000)   
    MainPage2.OpenFirstMenu()
    MenuPage2.BrowseMenuPage()

    ///user views menu, adds to cart
    MenuPage2.OpenFirstMenu()
    MenuPage2.SendMessageButtonCheck()
    MenuPage2.ClickPlusMenuModal()  
    MenuPage2.AddBasketModalClick()
    MenuPage2.BasketButtonClick()
    //user logins successfully
    MainPage2.LogInButton()
    LoginPage2.TypeEmail(email_existing_eater)
    LoginPage2.TypePassword(password_exiting_eater)
    LoginPage2.LogInButtonClick()
    //User go to the basket and checks out
    MainPage2.BasketIconClick()
    BasketPage2.CheckoutButtonClick()

  })

  it('Existing user feedback', () => {
    cy.visit('/discover/')
    //user logins successfully
    LoginPage2.CloseAdvertisingBox()
    MainPage2.LogInButton()
    LoginPage2.TypeEmail(email_existing_eater)
    LoginPage2.TypePassword(password_exiting_eater)
    LoginPage2.LogInButtonClick()
    cy.wait(2000)

    //Go to Order page
    MainPage2.ProfileIconMouseOver()
    MainPage2.OrderDropdownClick()
    cy.wait(2000)

    //User leaves a feedback
    OrderPage2.AddFeedbackButtonClick()
    OrderPage2.TypeReview()
    OrderPage2.SetRating()
    OrderPage2.SendButtonClick()

    //User see their previously left feedbacks
    OrderPage2.YourFeedbackButtonClick()
    OrderPage2.CloseYourFeedback()

  })

  it('Basic chef flow', () => {
    cy.visit('/discover/')
    //Existing chef logins successfully
    LoginPage2.CloseAdvertisingBox()
    MainPage2.LogInButton()
    LoginPage2.TypeEmail(email_existing_chef)
    LoginPage2.TypePassword(password_exiting_chef)
    LoginPage2.LogInButtonClick()
    cy.wait(2000)
    MainPage2.ProfileIconMouseOver()
    //Chef see their incoming sales 
    MainPage2.SalesTabClick()
    cy.wait(2000)
    SalesPage2.CookingListButtonClick()
    SalesPage2.CloseCookingListButtonClick()    

    //Chef see their messages from customers
    MainPage2.MessageIconClick()
    cy.get('#headlessui-popover-panel-4 > .relative > .btn').click({force:true})  //Go to messenger in popap
    cy.wait(3000)
    //Chef see their feedback
    MainPage2.ProfileIconMouseOver()
    MainPage2.AddFeedbackButtonClick()
    cy.get(':nth-child(2) > .stroke-current').click()
  })

  it('Delete Feedback', () => {
    //admin logs
    cy.visit('/admin/login')
    AdminPage2.LoginType(email_existing_chef)
    AdminPage2.PasswordType(password_exiting_chef)
    AdminPage2.LoginButtonClick()  
    AdminPage2.AccountTabClick()
    AdminPage2.FeedbackTabClick()
    AdminPage2.SortByDateFeedbackClick() ///old first
    AdminPage2.SortByDateFeedbackClick()  //new first
    AdminPage2.FirstFeedbackOpen()
    cy.contains('Test Feedback')
    AdminPage2.DeleteButtonClick()
    AdminPage2.ConfirmDeleteButton()
    cy.get('.alert').contains('Success: The record was deleted successfully')

  })

  

})