@message
Feature: Check the history of the chat between two users

  @message
  Scenario: Sending a message as user1 and user2
    Given User logged in as "user1" for type message
    When Type message into the message input as user1
    When User switches to another user and logs in as "user2"
    And User types message into the message input as user2
    Then User should see the chat history between user1 and user2



