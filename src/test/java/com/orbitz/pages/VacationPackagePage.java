package com.orbitz.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.orbitz.utilities.Driver;



public class VacationPackagePage {
	public VacationPackagePage() {
		PageFactory.initElements(Driver.getDriver(), this);
}
	
	@FindBy (id = "primary-header-package")
	public WebElement vacationPackagesLink;
	
	@FindBy (id = "tab-packageFlightHotelCar-tab-plp-fhc")
	public WebElement flightHotelCarButton;
	
	@FindBy (id = "package-origin-plp-fhc")
	public WebElement flightFromInput;
		
	@FindBy (id = "package-destination-plp-fhc")
	public WebElement flightToInput;
	
	@FindBy (id ="package-departing-plp-fhc")
	public WebElement flightDepartDateInput;
	
	@FindBy (id ="package-returning-plp-fhc")
	public WebElement flightReturnDateInput;
	
	@FindBy (id ="package-rooms-plp-fhc")
	public WebElement roomCountDropdown;
	
	@FindBy (id ="package-1-adults-plp-fhc")
	public WebElement adultsCountDropdown;
	
	@FindBy (id ="package-1-children-plp-fhc")
	public WebElement childrenCountDropdown;
	
	@FindBy (id ="packageDirectFlight-plp-fhc")
	public WebElement directFlightOnlyCheckbox;
	
	@FindBy (id ="partialHotelBooking-plp-fhc")
	public WebElement partialHotelBookingCheckbox;
	
	@FindBy (id ="search-button-plp-fhc")
	public WebElement searchButton;
	
	@FindBy (linkText = " Book together and SAVE!")
	public WebElement bookTogetherAndSaveText;
	
	@FindBy (xpath = "//div[@class=\"multiLineDisplay details\"]")
	public WebElement flyingFromOptions;
	
	@FindBy (xpath = "//div[@id=\"resultsContainer\"]//a[@href]//span[@class]")
	public List<WebElement> hotelsSearchResult;
	
	@FindBy (id= "inpHotelNameMirror")
	public WebElement searchByHotelNameField;
	
	@FindBy (id= "hotelNameGoBtn")
	public WebElement hotelNameGoBtn;
	
	@FindBy (id= "cancellablecancellable")
	public WebElement FreeCancellationCheckbox;
	
	@FindBy (xpath= "//input[@name=\"star\"]")
	public List<WebElement>propertyClassCheckbox;
	
	@FindBy (xpath= "//label[starts-with(@id,\"lodging\")]")
	public List<WebElement>propertyTypeCheckbox;
}



