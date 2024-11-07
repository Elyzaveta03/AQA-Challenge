Feature: Login functionality

  Scenario: Successful login
    Given Go to the login page
    When Enter a valid username and password

  Scenario: Failed login
    Given Go to the login page
    When Enter an invalid username
    Then Should see an error message
    When Enter an invalid password
    Then Should see an error message
