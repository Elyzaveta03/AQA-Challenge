Feature: Sending messages in the chat

  Scenario: Sending a message successfully
    Given User logged in as "user1"
    When Type message into the message input
    And Click the send button
    Then Should see the message in the chat window

  Scenario: Sending an empty message
    Given User logged in as "user1"
    When Leave the message input empty
    And Click the send button
    Then Should see the message in the chat window
