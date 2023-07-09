
class LandingPage {
    visit() {
        cy.visit('/')
    }

    getPageTitle() {
        return cy.get('h2')
    }

    getNavBar() {
        return cy.get('.wrapper')
    }

    getFooter() {
        return cy.get('footer.row > article.center_content > div.row')
    }

    getHoustonOfficeButton() {
        return cy.get('footer.row > article.center_content > div.row').contains('a', 'Houston')
    }

    
}

export default LandingPage;