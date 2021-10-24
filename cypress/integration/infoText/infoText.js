import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';
const requiredExample = require('../../fixtures/example.json')
/// <reference types="Cypress" />



Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

Then('The Info-Text is ending in "[Test-Edit]"', () => {

    cy.get("#title").should('contain',"[Test-Edit]")

    
    cy.fixture('example').then(function(data){
        this.data=data;
        cy.get("#title").should('contain', data.TestEdit);
    })

   
    
});

