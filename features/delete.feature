Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with
    Then I should see a page title saying <message>
    
    Examples:
      | username | password             | message                        |
      | kloudship.qa.automation@mailinator.com | Password1 | KloudShip - eCommerce & Shipping Solutions |


  Scenario: As a user, on home page I clicked package
    
    When I click package icon on home page

  Scenario: As a user, i want to delete package
    
    When I click delete package which i added previously
  
  Scenario: As a user, i want to logout
    
    Then i logout