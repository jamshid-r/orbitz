package com.orbitz.step_definitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.orbitz.beans.Entry;
import com.orbitz.pages.DealsPage;
import com.orbitz.utilities.BrowserUtilities;
import com.orbitz.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DealsFunctionality {

	DealsPage dealsPage = new DealsPage();

	String actual;
	String expected;

	

	@When("I click on Deals link")
	public void i_click_on_Deals_link() {
		
		BrowserUtilities.waitForPageToLoad(5000);
		dealsPage.dealsLink.click();
		// brUtils.waitForPageToLoad(5);
		//BrowserUtilities.waitForPageToLoad(5000);
	}

	@Then("Correct title should be dispalayed")
	public void correct_title_should_be_dispalayed() {

		actual = Driver.getDriver().getTitle();
		System.out.println("actual"+actual);
		expected = "Travel Deals";
		System.out.println("expected"+expected);
		Assert.assertTrue(actual.contains(expected));
	}

	@Then("Weekly deals text is present")
	public void weekly_deals_text_is_present() {
		expected = "Weekly deals";
		Assert.assertTrue(Driver.getDriver().getPageSource().contains(expected));
	}

	@Then("The fallowing booking options should display")
	public void the_fallowing_booking_options_should_display(List<String> subcategories) {
		
		for (String subItem : subcategories) {
			assertTrue(dealsPage.bookingOptions(subItem).isDisplayed());
			
		}
	}

	@Then("I should be able to see boxes bof destination, check in date, check out date, rooms, adults count, children count")
	public void i_should_be_able_to_see_boxes_bof_destination_check_in_date_check_out_date_rooms_adults_count_children_count() {
		
		dealsPage.goingToBox.isDisplayed();
		dealsPage.departDateBox.isDisplayed();
		dealsPage.returnDateBox.isDisplayed();
		dealsPage.roomCountDropdown.isDisplayed();
		dealsPage.adultsCountDropdown.isDisplayed();
		dealsPage.childrenCountDropdown.isDisplayed();
		dealsPage.searchButton.isDisplayed();

	}

	@Then("The following subcategories should be displayed")
	public void the_following_subcategories_should_be_displayed(List<String> subcategories) {
		
		for (String subItem : subcategories) {
			assertTrue(dealsPage.todaysTopDealsSubcategories(subItem).isDisplayed());

		}
	}
	

	@When("I enter info into the {string}, {string} and {string} fields")
	public void i_enter_info_into_the_and_fields(String string, String string2, String string3) {
		DealsPage dp = new DealsPage();
		dp.destinationField.sendKeys(string);
		dp.checkInDate.sendKeys(string2);
		dp.checkOutDate.sendKeys(string3);
		dp.searchButton.click();
		
	}

	@Then("when some of the fields are left empty, the proper {string} should appear")
	public void when_some_of_the_fields_are_left_empty_the_proper_should_appear(String string) {
		DealsPage dp = new DealsPage();
		String actual = dp.errorMessages(string).getText();
		String expected = string;
		assertEquals(expected, actual);
	}
	
	@When("I enter correct info into the {string}, {string} and {string} fields and click on Search button")
	public void i_enter_correct_info_into_the_and_fields_and_click_on_Search_button(String string, String string2, String string3) {
		DealsPage dp = new DealsPage();
		dp.destinationField.sendKeys(string);
		dp.checkOutDate.clear();
		dp.checkInDate.sendKeys(string2);
		dp.checkOutDate.sendKeys(string3);
		dp.searchButton.click();
		BrowserUtilities.waitFor(5);
	}
	@Then("I verify page title contains {string}")
	public void i_verify_page_title_contains(String string) {
	    assertTrue(Driver.getDriver().getTitle().contains(string));
	}

//	@Then("I check {string} payment option")
//	public void i_check_payment_option(String string) {
//
//	    DealsPage dp = new DealsPage();
//	    String option = dp.paymentTypeSubcategories(string).getText();
//	    if (option. ) {
//			
//		} 
//	}
	@Then("I check Free cancellation payment option")
	public void i_check_Free_cancellatin_payment_option() {
		 DealsPage dp = new DealsPage();
		 dp.freeCancellationCheckBox.click();
	}

	@When("I check Reserve now, pay later payment option")
	public void i_check_Reserve_now_pay_later_payment_option() {
		 DealsPage dp = new DealsPage();
		 dp.reserveNowPayLaterCheckBox.click();
	}

	
	@Then("Results must contain the text of my {string} selections")
	public void results_must_contain_the_text_of_my_selections(String string) {
//		DealsPage dp = new DealsPage();
//		actual = dp.searchResults.getText();
//		expected = string;
//		assertEquals(expected, actual);
		
		
//		assertTrue(dp.searchResultsList.contains(string));
//		dp.searchResultsList.
//		System.out.println(st);
//		for (WebElement webElement : dp.searchResultsList) {
//			assertTrue(webElement.getText().contains(string));
//		}
		
	
	
		
	}

	



}
