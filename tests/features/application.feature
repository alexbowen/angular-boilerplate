Feature: Application
	In order to get more info about Cucumber
  	As a BDDer
  	I want to find Cucumber resources on Google

	Scenario: Page Title
	    Given I am on the Deer Hunter application
	    When I go to the Home Page
	    Then I should see "Deer Hunter" as the page title