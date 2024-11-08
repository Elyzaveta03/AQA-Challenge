@login
Feature: Log in functionality

  @login
  Scenario: Successful log in
    Given Go to the log in page
    When Enter a valid username and password

  @login
  Scenario: Failed log in
    Given Go to the log in page
    When Enter an invalid username
    Then Should see an error message
    When Enter an invalid password
    Then Should see an error message
