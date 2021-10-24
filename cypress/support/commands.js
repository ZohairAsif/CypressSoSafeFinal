// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('topIsWithinViewport', { prevSubject: true }, (subject) => {
    const windowInnerHeight = Cypress.config('viewportHeight');

    const bounding = subject[0].getBoundingClientRect();
    expect(bounding.right).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    expect(bounding.top).to.be.at.least(0);
    expect(bounding.top).to.be.lessThan(windowInnerHeight);

    return subject;
});

function getBoundingClientRect(selector) {
    return cy.wrap(selector).then((elem) => Cypress.$(elem)[0].getBoundingClientRect());
}

function getRect(subject, element, funk) {
    const boundingRect = subject[0].getBoundingClientRect();
    getBoundingClientRect(element).then((elementRect) => {
        funk(boundingRect, elementRect);
    });
}

Cypress.Commands.add('rightOf', { prevSubject: true }, (subject, element) => {
    getRect(subject, element, (subjectRect, elementRect) => {
        expect(subjectRect.left).gte(elementRect.right);
    });
    // const boundingS = subject[0].getBoundingClientRect();
    // getBoundingClientRect(element).then((elementRect) => {
    //    expect(elementRect.right).to.be.at.least(boundingS.left);
    // });
});

Cypress.Commands.add('leftOf', { prevSubject: true }, (subject, element) => {
    getRect(subject, element, (subjectRect, elementRect) => {
        expect(subjectRect.right).lte(elementRect.left);
    });
});

Cypress.Commands.add('aboveOf', { prevSubject: true }, (subject, element) => {
    getRect(subject, element, (subjectRect, elementRect) => {
        expect(subjectRect.bottom).lte(elementRect.top);
    });
});

Cypress.Commands.add('belowOf', { prevSubject: true }, (subject, element) => {
    getRect(subject, element, (subjectRect, elementRect) => {
        expect(subjectRect.top).gte(elementRect.bottom);
    });
});

