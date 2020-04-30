Feature: Verification of Deals functionality

  @test
  Scenario: Verify I am on the correct page
    #Given I am on the homepage
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    Then Correct title should be dispalayed

  @test
  Scenario: Verify Weekly deals text is present
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    When Correct title should be dispalayed
    Then Weekly deals text is present

  @test
  Scenario: Verify Weekly deals booking options
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    When Correct title should be dispalayed
    Then The fallowing booking options should display
      | Hotel only     |
      | Flight only    |
      | Flight + Hotel |

  @test
  Scenario: Verify Deals Page booking elements
    Given Verify that user launch on login page by Orbitz title
    When I click on Deals link
    Then I should be able to see boxes bof destination, check in date, check out date, rooms, adults count, children count

  @test
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
