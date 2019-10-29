@CustomerAccount @_HarryPotter
Feature: Customer Account

  Background: Customer has logged in to their account
    Given I am logged in as Harry Potter

  @_SetupCustomerAccountTransactions @_TeardownCustomerAccountTransactions
  Scenario: Confirm that details of the customer's default account is displayed
    Then the customer's default account should be selected
    And details of the customer's default account should be displayed
    