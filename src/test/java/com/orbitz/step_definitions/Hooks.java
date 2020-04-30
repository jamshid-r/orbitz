package com.orbitz.step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import com.orbitz.utilities.ConfigReader;
import com.orbitz.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

	@Before()
	public void setUp() {

		Driver.getDriver().get(ConfigReader.getConfiguration("url"));
		Driver.getDriver().manage().timeouts().implicitlyWait((Long.parseLong(ConfigReader.getConfiguration("implicitTimeout"))), TimeUnit.SECONDS);
		Driver.getDriver().manage().window().maximize();

	}

//	@Before ("@database")
//	public void setUpApi() {
//		
//		System.out.println("Setting up connection  to database");

//}

	@After()
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
		Driver.closeDriver();
	}

//	@After ("@database")
//	public void tearDownDatbse() {
//
//		System.out.println("Tearing down db");
//		
//		
//	}

}
