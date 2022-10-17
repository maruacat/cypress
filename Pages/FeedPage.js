class FeedPage {
    FeedType(){
        cy.get('[data-testid="input"]').type('Helo world!!')
    }

    SendButtonClick() {
        cy.get('.btn-green').click()
    }

    ScrollFeedPage(){
        cy.scrollTo('bottom')
    }



}

export default FeedPage