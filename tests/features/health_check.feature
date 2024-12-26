Feature: Win the game
  As a user I want to win the game by obtaining 5 cups of espresso (based on my empirical knowledge about how to win the game).

  Scenario: Health decreased by clicking the wait button
    Given that I have started the game by navigating to "http://localhost:3000"
    And my position is "Outside the cafe"
    And I know my current "Health"
    When I click on button "Wait"
    Then the value of my "Health" should be decreased

  Scenario: Health increases when the player buys espresso
    Given that I have started the game by navigating to "http://localhost:3000"
    And the value of my "Health" should be 50
    And the value of my "Espressos" should be 0
    When I am at the location "in the Cloud Forest Cafe"
    And I click on button "Buy an espresso"
    Then the value of my "Health" should be 60
    And the value of my "Espressos" should be 1