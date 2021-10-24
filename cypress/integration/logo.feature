Feature: logoLayout

    It is possible to set different logo-layouts

    Scenario: SoSafe-Headder logo default layout
        Given I'm on the "minimum" page
        Then I see the "sosafe-headder" logo
        And the "sosafe-headder" logo is placed on the "left" side

    Scenario: SoSafe-Headder logo and customer logo enabled with default layout
        Given I'm on a standard-learning-page with a customer logo
        Then I see the "sosafe-headder" logo
        And the "sosafe-headder" logo is placed on the "left" side
        And I see the "customer" logo
        And the "customer" logo is placed on the "right" side

    Scenario: SoSafe-Headder logo and customer logo enabled with swithced logos
        Given I'm on the "maximum" page
        Then I see the "sosafe-headder" logo
        And the "sosafe-headder" logo is placed on the "right" side
        And I see the "customer" logo
        And the "customer" logo is placed on the "left" side

    Scenario: No logo is displayed
        Given I'm on the "other" page
        Then I don't see the "sosafe-headder" logo
        And I don't see the "customer" logo
