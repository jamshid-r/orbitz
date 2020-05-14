package com.orbitz.runners;


	import org.junit.runner.RunWith;

	import io.cucumber.junit.Cucumber;
	import io.cucumber.junit.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(



			plugin = { "pretty",
					"html:target/built-in-html-report", 
					"json:target/Cucumber.json "

			}

			
		   
			,features = "@target/return.txt", 
			glue = "com/orbitz/step_definitions"
			
		
	)
	public class FailedReRunner {
}
