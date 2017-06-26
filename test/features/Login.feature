@Login
Feature: Login

    As a user, I want to be able to log into my private area using my credentials

  @LoginKO
  Scenario: Login with invalid credentials
    Given a user at login screen
     When he introduces wrong credentials
    Then he should see an error message

  @LoginOK
  Scenario: Login with valid credentials
    Given a user with valid credentials at login page
     When he introduces his credentials
     Then he should view his global position