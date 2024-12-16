Feature: Win the game
  As a user I want to win the game by obtaining 5 cups of espresso (based on my empirical knowledge about how to win the game).
  
  Scenario: Use all the money to buy coffee
    Given that I have started the game by navigating to "http://localhost:3000"
    And my position is "Inside the cafe"
    And I know my current health
    When I make the choice to "Buy an espresso"
    Then my health should be "10 more than before"
    And the value of my "Money" should be 5
    When I make the choice to "Buy an espresso"
    Then my health should be "10 more than before"
    And the value of my "Money" should be 0

  Scenario: Health is deteriorated
    Given that I have started the game by navigating to "http://localhost:3000"
    And my position is "Outside the cafe"
    And I know my current health
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    When I make the choice to "Wait"
    Then the value of my "Health" should be 0