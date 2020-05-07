package com.orbitz.pages;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections4.functors.WhileClosure;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.gargoylesoftware.htmlunit.javascript.host.Iterator;
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
	
	@FindBy (id ="H-searchButtonExt1")
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
	
	@FindBy (id ="H-destination")
	public WebElement destinationField;
	
	@FindBy (id ="H-fromDate")
	public WebElement checkInDate;
	
	@FindBy (id ="H-toDate")
	public WebElement checkOutDate;

	@FindBy (xpath = "//a[contains(.,'Destination is required.')]")
	public WebElement errorMessages;
	
	public WebElement errorMessages(String erOptions) {
		String customXpath = "//a[contains(.,'"+erOptions+"')]";
				
		return Driver.getDriver().findElement(By.xpath(customXpath));
}
	public WebElement paymentTypeSubcategories(String sCategories) {
		String customXpath = "//div[@class=\"uitk-switch uitk-checkbox\"]//label[contains(.,'\"+sCategories+\"')]";
				
		return Driver.getDriver().findElement(By.xpath(customXpath));
	}
	@FindBy (id = "paymentType-0-FREE_CANCELLATION")
	public WebElement freeCancellationCheckBox;
	
	@FindBy (id = "paymentType-1-PAY_LATER")
	public WebElement reserveNowPayLaterCheckBox;

	@FindBy(xpath = "//div[contains(.,'Reserve now, pay later')]") 
	public WebElement searchResults;
	
	public WebElement searchResults(String options) {
		String customXpath = "//div[contains(.,'"+options+"')]";
				
		return Driver.getDriver().findElement(By.xpath(customXpath));
}
	
//	List<WebElement>allLinks = Driver.getDriver().findElements(By.xpath("//div[@class=\"uitk-cell all-cell-align-bottom\"]//div[contains(.,\"Free Cancellation\")]"));
//	Iterator itr = searchResultsList.iterator();
//	while(itr.hasNext()) {

//	public List<WebElement>searchResults(){
//		List<WebElement> searchResultsList = new ArrayList<>();
//		for (WebElement webElement : searchResultsList) {
//			searchResultsList.add(webElement);
//			
//		}
//		return searchResultsList;
//	}
	
//	public WebElements paymentTypeSubcategories(String sCategories) {
//		String customXpath = "//div[@class=\"uitk-switch uitk-checkbox\"]//label[contains(.,'\"+sCategories+\"')]";
//				
//		return Driver.getDriver().findElement(By.xpath(customXpath));
}




