class HoustonOffice {

    visit() {
        cy.visit('/locations/houston/') ;
    }

    getUrl() {
        return cy.url() ;
    }

    getPageTitle() {
       return cy.get('h1')
    }

    getNavBarMenu() {
       return cy.get('.wrapper')
    }

    getSceduleConsultationButton() {
         return cy.get('.left > .buttons > .button')
    }

    getConsultationModal() {
        return cy.get('.dl-schedule-consultation-modal > .dl-modal-content > .start-project-form')
    }


    verifyScheduleForm() {
        cy.get('#wpforms-form-876 > .wpforms-field-container').find('input').should('have.length', 3)
        cy.get('#wpforms-form-876 > .wpforms-field-container').find('textarea').should('have.length', 1)
    }

    getCloseModalButton() {
        return cy.get('[class="dl-modal dl-schedule-consultation-modal dl-downloadportfolio-modal open"] >[class="dl-modal-content"] > [class="btn-close-modal"]')
    }
    
}

export default HoustonOffice;