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
}