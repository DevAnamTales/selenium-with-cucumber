Feature: Buying an espresso

  Scenario: Buying an espresso decreases Money and increases Health and Espressos
    Given I am at the location "in the Cloud Forest Cafe"
    And I know my current "Health"
    And I know my current "Money"
    And I know my current "Espressos"
    #And the value of my "bag" is "nothing cool"
    When I click on button "Buy an espresso"
    Then the value of my "Money" should be 5
    And the value of my "Health" should be 60
    And the value of my "Espressos" should be 1

