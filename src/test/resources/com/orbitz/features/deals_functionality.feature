Feature: Verification of Deals functionality

  @test, @dj
  Scenario: Verify I am on the correct page
    
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    Then Correct title should be dispalayed

 @test, @dj
  Scenario: Verify Weekly deals text is present
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    When Correct title should be dispalayed
    Then Weekly deals text is present

  @test, @dj
  Scenario: Verify Weekly deals booking options
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    When Correct title should be dispalayed
    Then The fallowing booking options should display
      | Hotel only     |
      | Flight only    |
      | Flight + Hotel |

  @test, @dj
  Scenario: Verify Deals Page booking elements
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    Then I should be able to see boxes bof destination, check in date, check out date, rooms, adults count, children count

  @test, @dj
  Scenario: Verify Today's Top Deals subcategories
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    Then The following subcategories should be displayed
      | top-hotel-deals    |
      | member-discounts   |
      | top-rated-hotels   |
      | weekend-road-trips |
      | last-minute        |
      | pet-friendly       |
      
   @test, @dj, @my
   Scenario Outline: Verify error messages
   	Given Verify that user launch on login page by Orbitz title
   	When I click on Deals link
   	When I enter info into the "<Destination>", "<Check-in>" and "<Check-out>" fields
   	Then when some of the fields are left empty, the proper "<Error Message>" should appear

   	
   	Examples:
   	| Destination | Check-in  	 | Check-out		|	Error Message						  |
   	| 						| 06/01/2020   |  06/01/2020  | Destination is required.  |
   	| Chicago		  |  					   |  06/02/2020  | Check-in is required. 	  |
   	| Chicago		  |  06/01/2020  | 							| Check-out is required.    |
   	
   	
   	
   @test, @dj, @my
   Scenario Outline: Verify Payment Type functionality when filtering results
   Given Verify that user launch on login page by Orbitz title
   	When I click on Deals link
   	When I enter correct info into the "<Destination>", "<Check-in>" and "<Check-out>" fields and click on Search button
   	Then I verify page title contains "<Destination>"
   	And I check <payment type> payment option 
   	And Results must contain the text of my "<payment type>" selections
   	
   	Examples:
   	| payment type           | Destination  | Check-in  	 | Check-out	|
   	|	Free cancellation 		 | Chicago		  | 06/01/2020 | 06/02/2020 	|
   	| Reserve now, pay later | Chicago		  | 06/01/2020 | 06/02/2020 	|
   	