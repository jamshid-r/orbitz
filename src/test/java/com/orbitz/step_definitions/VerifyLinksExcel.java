package com.orbitz.step_definitions;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import com.google.common.collect.Lists;
import com.orbitz.pages.FlightPage;
import com.orbitz.utilities.ExcelUtils;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class VerifyLinksExcel {

	@When("Links are displayed")
	public void links_are_displayed() {
	    
		FlightPage flightpg = new FlightPage();
		ExcelUtils sheet = new ExcelUtils("src/test/resources/com/orbitz/test-data/Book1.xlsx", "Sheet1");
		List<Map<String, String>>allRows = sheet.getDataAsList();
		
		for (Map<String, String> map : allRows) {
			if (map.get("Execute").equals("Y")) {
			
				String expected = map.get("Product");
				
				assertTrue(flightpg.getLinks("Product").isDisplayed());
				
			}
			
		}
//		for (int i = 0; i < allRows.size(); i++) {
//			Map<String, String>row = allRows.get(i);
//			
//			 if (row.get("Execute").equalsIgnoreCase("Y")){
//			String expected  = row.get("Product");
			
//			assertTrue(flightpg.getLinks(expected).isDisplayed());
			//String actual = flightpg.VacationPackageLink.getText();
//			System.out.println(flightpg.getLinks(row.get("Product")).getText());
//		}
//	}
	}
	@Then("I click on the link and proper text should be dispayed on the page")
	public void i_click_on_the_link_and_proper_text_should_be_dispayed_on_the_page() {
	    
	}
}
