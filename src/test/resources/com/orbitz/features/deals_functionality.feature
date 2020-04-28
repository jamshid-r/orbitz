Feature: Verification of Deals functionality

Scenario: Verify I am on the correct page

			Given I am on the homepage
			When I click on Deals link
			Then Correct title should be dispalayed
		
		

Scenario: Verify Weekly deals text is present

			Given I am on the homepage
			When I click on Deals link
			When Correct title should be dispalayed
			Then Weekly deals text is present
			
@test
Scenario: Verify Weekly deald booking options

			Given I am on the homepage
			When I click on Deals link
			When Correct title should be dispalayed
			Then The fallowing booking options should display 
			
			|Hotel only    |
			|Flight only   |
			|Flight + Hotel|
