package com.orbitz.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber ;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)
@CucumberOptions (
		
		plugin = {"rerun:target/rerun.txt",
				"html:target/built-in-html-report",
				"json:target/Cucumber.json "
		
		},
		
		tags = "@test", //"@smoke and @test"
		features= "src/test/resources/com/orbitz/features",
		glue = "com/orbitz/step_definitions"
//		,strict =true
//		,dryRun = true
		,monochrome =true
		,stepNotifications = true
//		,snippets = SnippetType.CAMELCASE
		
		)
public class CukesRunner {

}
