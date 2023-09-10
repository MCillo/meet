Feature: Show hide an events details.

  Scenario: event details are closed by default.
    Given the user has first opened the app
    When the list of cities is displayed
    Then the event details are collapsed (hidden)

  Scenario: user can show the event details.
    Given the list of events for all or selected city is shown
    When the user selects a specific event from the displayed list
    Then the details for the selected event are displayed to the user

  Scenario: user can hide the event details.
    Given the details for a selected event are shown
    When the user closes the event details view
    Then the list of events for all or selected city is shown