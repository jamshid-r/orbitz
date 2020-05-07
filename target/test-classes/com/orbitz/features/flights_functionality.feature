Feature: Verification of Flights functionality

  @test
  Scenario: test
  
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on Flight link
    And   Verify that user on Search Flights page
    When  The user provides information to Flying from input field on Search Flights page
    And   The user provides information to Flying to input field on Search Flights page
    When  The user selects Departing date
    And   The user selects Returning date
    When  The user selects value to Adults field on Search Flights page
    And   The user selects value to Children field on Search Flights page
    When  Verify that Add a car check box is selected
    And   Verify Direct flights only message displayed on Search Flights page
    Then  The user clicks on Search Hotel and Car button

	@my
    Scenario Outline: verify error message by miussing one of the required field info
  Given Verify that user launch on login page by Orbitz title
  When  The user clicks on Flight link
  When  User provides "<FlyingFrom>" info to Flying from field
 	 When  Provides "<FlyingTo>" info to Flying to field
 	 When  User provides "<DepartingDate>" info of fligth
 	 When  User provides "<ReturningDate>" info 
 	 When  Select "<Adults>" value to Adualts field
 	 When  Select "<Children>" value to Children field
 	 Then  verify error message
 	  
 	 		  	
 	 		Examples:
  		|      FlyingFrom            									 |      FlyingTo                        | DepartingDate   |ReturningDate   | Adults | Children |   
  		| Washington, DC (IAD-Washington Dulles Intl.) |  Boston, MA (BOS-Logan Intl.)	      | 08/17/2020			| 08/27/2020	   |  1     |   1      |   
 	 		| Toronto, ON (YYZ-Pearson Intl.)			  			 |  London (LHR-Heathrow)		            | 09/19/2020			| 09/29/2020	   |  1     |   1      |





    