package com.orbitz.step_definitions;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.support.ui.Wait;

import com.orbitz.pages.DealsPage;
import com.orbitz.utilities.BrowserUtilities;
import com.orbitz.utilities.Driver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DealsFunctionality {
	DealsPage dealsPage = new DealsPage();
	BrowserUtilities brUtils = new BrowserUtilities();
	String actual;
	String expected;
	
	
	@Given("I am on the homepage")
	public void i_am_on_the_homepage() {
		Driver.getDriver().get(com.orbitz.utilities.ConfigReader.getConfiguration("url"));
	}

	@When("I click on Deals link")
	public void i_click_on_Deals_link() {
	   dealsPage.dealsLink.click();
			brUtils.waitForPageToLoad(5);
	}

	@Then("Correct title should be dispalayed")
	public void correct_title_should_be_dispalayed() {
	
	 actual = Driver.getDriver().getTitle();
	 expected = "Travel Deals";
	   Assert.assertTrue(actual.contains(expected));
	}
	@Then("Weekly deals text is present")
	public void weekly_deals_text_is_present() {
		expected = "Weekly deals";
		Assert.assertTrue(Driver.getDriver().getPageSource().contains(expected));
	}
	@Then("The fallowing booking options should display")
	public void the_fallowing_booking_options_should_display(List<String> subcategories) {
		// dealsPage.bookingOprions
		    for (String subItem : subcategories) {
		 	   assertTrue(dealsPage.bookingOptions(subItem).isDisplayed());
		     //assertTrue(wPage.getSubcategoriy(subcategories.get(1)).isDisplayed()); 
		    }
			}
	}



