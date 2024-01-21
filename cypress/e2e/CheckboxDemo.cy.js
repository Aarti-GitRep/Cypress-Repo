// cypress/integration/zohoBooksCheckbox.spec.js

describe('Zoho Books Checkbox Test', () => {
    it('Handles checkboxes on the Zoho Books demo page', () => {
      // Visit the Zoho Books demo page
      cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports');
  
      // Wait for the page to load (you can adjust the duration based on your needs)
      cy.wait(2000);
      cy.get('.nav-link.pr-2').click()
      cy.get('#af70bf425').click()
      })
      

     
    })
