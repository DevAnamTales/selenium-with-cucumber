Feature: Hipster Bag value

  Scenario: Hipster Bag updates with a can of beer
    Given I am at the location "in a crowded bar"
    And my hipster bag should contain "nothing cool"
    When I wait until the event "a can of beer for free" occurs
    Then my hipster bag should contain "a can of beer"
