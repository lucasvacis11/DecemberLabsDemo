
import HoustonOffice from '../support/pages/houston-office.page';
import LandingPage from '../support/pages/landing.page';

describe('template spec', () => {
  it('Modal functionality', () => {
    const onLandPage = new LandingPage();
    onLandPage.visit();
    onLandPage.getPageTitle().should('be.visible');
    onLandPage.getPageTitle().should('have.text', 'Rocket-Fuelyour Product');
    onLandPage.getNavBar().should('be.visible');
    onLandPage.getFooter().should('be.visible');
    onLandPage.getHoustonOfficeButton().click();
    
    const onHoustonOffice = new HoustonOffice();
    onHoustonOffice.getUrl().should('include', '/houston');
    onHoustonOffice.getPageTitle().should('be.visible');
    onHoustonOffice.getPageTitle().should('have.text', 'Houston Web and App Developers');
    onHoustonOffice.getSceduleConsultationButton().click().then(() => {
      expect(onHoustonOffice.getConsultationModal()).to.exist;
      onHoustonOffice.verifyScheduleForm();
    });
    onHoustonOffice.getCloseModalButton().click();
    onHoustonOffice.getConsultationModal().should('not.be.visible');
  });
});