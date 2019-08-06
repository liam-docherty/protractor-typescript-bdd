Feature: Registration

   Testing of the Registration component found on http://www.globalsqa.com/angularjs-protractor-practice-site/

   Scenario: After completing registration the user should be redirected to the Login page
     Given the user is on the registration page
     When the user successfully completes registration
     Then the user should be redirected to the login page