Feature: Events

  Scenario: Event occurs in a specific location
    Given I am at the location "<location>"
    #And I see the initial picture of the location
    When I wait until the event "<event_message>" occurs
    Then the event "<event_message>" should be initialized
    And I should see the text includes the "<event_text>"
    #And I should see the button "<button_text>"

    Examples:
      | location                   | event_message                   | event_text                                                                              | button_text       |
      | in the Cloud Forest Cafe   | The barista is in a dark corner | The barista is in a dark corner phoning a friend. You overhear parts of the conversion: |                   |
      #| A guitarist and sax player | jam with us?                    | You look like a hip kid, why don't come on up and jam with us?                          | Jam with the band |
      #| in a crowded bar           | a can of beer for free          | The bartender offers you a can of beer for free...                                      |                   |
