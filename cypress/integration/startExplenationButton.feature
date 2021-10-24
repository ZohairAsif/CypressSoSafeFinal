Feature: Start-Explenation-Button

    a button is present which scrolls to the template and starts the explenation

    Scenario: Open a page and two explenation-Buttons are present
        Given I'm on the maximum page
        Then I see a start-explenation-button above the template
        And I see a start-explenation-button below the template

    Scenario: When I click on the Button the page scrolls to the template and the explenation is started
        Given I'm on the maximum page
        When I click on the start-explenation-button
        Then the template is scrolled to the top of the browser
        And the explenation is started
