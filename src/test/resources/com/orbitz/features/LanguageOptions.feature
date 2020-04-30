Feature: This feature will test a language Functionality with valid credentials 

  @test
  Scenario: Verify if a user will be able to login with a valid Email address and valid password.
  
  
    Given Verify that user launch on login page by Orbitz title
    When  The user clicks on My account button
    When  The user clicks on LogIn button from submenu
    When  The user inserts Email address value to Email address input field
    When  The user inserts password value to the password input field
    Then  The user clicks on Sign In button 
    #Then  Verify that user landed on Home page by his own name 
   
