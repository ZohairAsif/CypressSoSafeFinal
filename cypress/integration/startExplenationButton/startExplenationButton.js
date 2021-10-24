import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';
import '../../support/commands'
/// <reference types="Cypress" />

Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

Then('I see a start-explenation-button above the template', () => {

    cy.get("#explanationButtonDefault").aboveOf("#stepByStep","#explanationButtonDefault");
    cy.get("#explanationButtonDefault").should('have.text',"Start explanation");
    
});

Then('I see a start-explenation-button below the template', () => {
   
    cy.get("#explanationButton2").belowOf("#stepByStep","#explanationButton2");
    cy.get('span').get("#explanationButtonDefault2").should('have.text',"Start explanation");
});

When('I click on the start-explenation-button', () => {
   
    cy.get("#explanationButtonDefault").click();

});

Then('the template is scrolled to the top of the browser', () => {
   
    cy.get("#stepByStep").topIsWithinViewport("#stepByStep");
});

Then('the explenation is started', () => {

    cy.get("h3").get(".hopscotch-title").should("have.text","Counterfeit sender / domain spoofing");

    cy.get(".hopscotch-actions button").should("have.text","Continue");

   
});
