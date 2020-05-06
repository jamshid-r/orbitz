package com.orbitz.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.orbitz.utilities.Driver;


public class DealsPage {
	public DealsPage() {
		PageFactory.initElements(Driver.getDriver(), this);
}
	
	@FindBy (id = "primary-header-deals")
	public WebElement dealsLink;
	
	
	
	@FindBy (xpath = "(//li[@role=\"presentation\"]//span[contains(., 'Hotel only')])]")
	public WebElement bookingOprions;
	
	public WebElement bookingOptions(String options) {
		String customXpath = "//li[@role=\"presentation\"]//span[contains(., '"+options+"')]" ;
		return Driver.getDriver().findElement(By.xpath(customXpath));
}
	@FindBy (id = "tab-hotel")
	public WebElement hotelOnlyButton;
	
	@FindBy (id = "FH-origin")
	public WebElement leavingFromBox;
	
	@FindBy (id = "FH-destination")
	public WebElement goingToBox;
	
	@FindBy (id = "FH-fromDate")
	public WebElement departDateBox;
	
	@FindBy (id = "FH-toDate")
	public WebElement returnDateBox;
	
	@FindBy (id ="FH-NumRoom")
	public WebElement roomCountDropdown;
	
	@FindBy (id ="FH-NumAdult1")
	public WebElement adultsCountDropdown;
	
	@FindBy (id ="FH-NumChild1")
	public WebElement childrenCountDropdown;
	
	@FindBy (id ="Direct")
	public WebElement directFlightOnlyCheckbox;
	
	@FindBy (id ="partialHotelBooking")
	public WebElement partialHotelBookingCheckbox;
	
	@FindBy (id ="advanced-options-toggle-fph")
	public WebElement advancedOptionsButton;
	
	@FindBy (id ="FH-searchButtonExt1")
	public WebElement searchButton;
	
	@FindBy (xpath = "//div[contains(@class,'editorial-result-card')]//a[contains(@href,'weekend-road-trips')]")
	public WebElement todaysTopDealsSubcategories;
	
	public WebElement todaysTopDealsSubcategories(String options) {
		String customXpath = "//div[contains(@class,'editorial-result-card')]//a[contains(@href,'"+options+"')]";
				
		return Driver.getDriver().findElement(By.xpath(customXpath));
}
//	@FindBy (xpath = "(//li[@role=\"presentation\"]//span[contains(., 'Hotel only')])]")
//	public WebElement bookingOprions;
//	
//	public WebElement bookingOptions(String options) {
//		String customXpath = "//li[@role=\"presentation\"]//span[contains(., '"+options+"')]" ;
//		return Driver.getDriver().findElement(By.xpath(customXpath));
//	
//}
}




