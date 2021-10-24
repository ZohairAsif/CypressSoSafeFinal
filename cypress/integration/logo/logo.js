import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

Given('I\'m on the {string} page', (page) => {
    if (page === 'minimum') {
        LearningPage.visitMinimum();
    } else if (page === 'maximum') {
        LearningPage.visitMaximum();
    } else if (page === 'other') {
        LearningPage.visitOther();
    }
});

Given('I\'m on a standard-learning-page with a customer logo', () => {
    LearningPage.visit('43a6f336704d321d');
});

Then('I see the {string} logo', (logo) => {
   if(logo==='sosafe-headder'){
        cy
            .get('#SoSafeHeaderIcon')
            .should('be.visible');
   }

   else if(logo === 'customer'){
        cy
          .get('.Header-brandedLogo')
          .should('be.visible')
          .and('have.css', 'background-image');
   }
   
});

Then('the {string} logo is placed on the {string} side', (logo,position) => {
    if(position==='left'){
        if(logo==='sosafe-headder'){
            cy
             .get('#SoSafeHeaderIcon')
             .leftOf('.Header-branded');
    }
     else if(logo==='customer'){
        cy
            .get('#page > header')
            .find('.u-flexRowReverse')
            .should('have.css', 'flex-direction', 'row-reverse');
        cy
            .get('.Header-branded')
            .leftOf('#SoSafeHeaderIcon');

        }
    }

    else if(position==='right'){

        if(logo==='sosafe-headder'){
            cy
                .get('#page > header')
                .find('.u-flexRowReverse')
                .should('have.css', 'flex-direction', 'row-reverse');
            cy
                .get('#SoSafeHeaderIcon')
                .rightOf('.Header-branded');
    }
        else if(logo==='customer'){
             cy
                .get('.Header-branded')
                .rightOf('#SoSafeHeaderIcon');

        }

    }
});

Then('I don\'t see the {string} logo', (logo) => {
    
    if(logo === 'sosafe-headder'){
        cy
            .get('#SoSafeHeaderIcon')
            .should('not.be.visible');
    }

    else if (logo === 'customer'){
        cy
            .get('.Header-brandedLogo')
            .should('not.be.visible');
    }
   
});



