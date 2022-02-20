package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Devlabs\\Global- Batch 1\\Selenium\\BDD.Framework.Selenium\\src\\test\\java\\com\\qa\\features\\Amazon.feature",
		glue="com.qa.stepdefinitions",
		dryRun=false,
		strict=true,
		monochrome=true,
		format = {"pretty","html:test-output"},
		tags= {"~@SmokeTest"}
		
		)

public class TestRunner {

}
