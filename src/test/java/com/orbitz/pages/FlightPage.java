package com.orbitz.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.orbitz.utilities.Driver;

public class FlightPage {
	
		public FlightPage() {
			PageFactory.initElements(Driver.getDriver(), this);
		}
		@FindBy(id = "primary-header-flight")
		public WebElement linkFlight;
		
		@FindBy(xpath = "//h1[.=' Search Flights ']")
		public WebElement searchFlightsText;
		
		
		
		@FindBy(xpath = "//*[@id=\"flight-origin-flp\"]")     
		public WebElement flyingFromInput;
		 
		@FindBy(xpath = "//*[@id=\"flight-destination-flp\"]")   
		public WebElement flyingToInput;
		
		@FindBy(id = "flight-departing-flp")
		public WebElement flightDepartDate;
		
		@FindBy(id = "flight-returning-flp")
		public WebElement flightReturningDate;
		@FindBy(xpath = "//span[.='Direct flights only']")
		public WebElement directFlightsText;
		@FindBy(xpath = "//*[@id=\"gcw-flights-form-flp\"]/div[8]/label/button")
		public WebElement searchFligthCarButton;
		@FindBy(id = "flight-add-car-checkbox-flp")
		public WebElement addCarCheckBox;
		
		@FindBy(id = "flight-adults-flp")
		public WebElement adualts;
		
		@FindBy(id = "flight-children-flp")
		public WebElement children;
		
		@FindBy(id = "flight-age-select-1-flp")
		public WebElement childrenAge;
		
//		@FindBy(xpath = "//span[.='Search'][1]")
//		public WebElement SearchButton;
		
		@FindBy(xpath = "//label[@class='col search-btn-col'][1]")
		public WebElement SearchButton;
		
		
		@FindBy(id = "stopFilter_stops-0")
		public WebElement noStopOption;
		
		@FindBy(xpath = "//span[@class='duration-emphasis']")
		public WebElement noStopOptionText;
		
		
		@FindBy(linkText = "Please provide the ages of children below.")
		public WebElement errorMessage;
		
		@FindBy(xpath = "//ul[@class=\"utility-nav nav-group cf\"]//a[contains(.,\"Vacation Packages\")]")
		public WebElement VacationPackageLink;
		
		public WebElement getLinks(String options) {
			String customXpath = "//ul[@class=\\\"utility-nav nav-group cf\\\"]//a[contains(., '"+options+"')]" ;
			return Driver.getDriver().findElement(By.xpath(customXpath));
	}
		
	}


