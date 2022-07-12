Feature: Buy energy functionality

  Background: i am on home page
    Given I am on Home page

  Scenario: I should able to  buy electricity unit and verify Availability of Units Quantity
    When I click on Buy energy link
    And  I can add "22" units
    And  I can click on buy button
    Then I should be able to buy unit successfully

  Scenario Outline: I should not able to buy invalid quantity of electricity unit
    When I click on Buy energy link
    And  I add "<quantity>"in quanity field
    And  I can click on buy button
    Then I should not able buy with invalid quantity
    And  verify "<message>" in Error message field

    Examples:
      | quantity | message                                         |
      | 0        | An error occurred while processing your request |
      |          | An error occurred while processing your request |
      | 5000     | An error occurred while processing your request |
      | -722     | An error occurred while processing your request |




