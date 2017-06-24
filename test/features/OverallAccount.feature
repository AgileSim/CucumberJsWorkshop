@GlobalPosition
Feature: Global Position

    As a user, I want to have a screen where I could see all my product listed with my current status.

  @AccountDetail
  Scenario: Account Detail
    Given a user with current accounts
     When he access his global position
     Then he sould see his accounts each with this information:
        |account alias                         |
        |account number                        |
        |account balance with currency symbol  |
