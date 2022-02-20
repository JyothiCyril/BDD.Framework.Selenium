package com.qa.stepdefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.AmazonPages;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AmazonStepDefinition {
	
	WebDriver driver;
	AmazonPages AmazonOR;
	
	@Before
	public void setUp() {
		System.out.println("Starting the test...");
	}
	
	@After
	public void tearDown() {
		System.out.println("Stopping the test...");
	}
	
	
	@Given("^the user is on amazon home page$")
	public void the_user_is_on_amazon_home_page() {
		boolean Urlcontains = driver.getCurrentUrl().contains("amazon");
		Assert.assertTrue(Urlcontains);		
	}

	@Then("^select the category as \"([^\"]*)\"$")
	public void select_the_category_as(String Category){
		AmazonOR.getCategory().selectByVisibleText(Category);
	}

	@Then("^type the input as \"([^\"]*)\"$")
	public void type_the_input_as(String ItemName){
		AmazonOR.getsearchTxtField().clear();
		AmazonOR.getsearchTxtField().sendKeys(ItemName);
	}

	@Then("^click the maginifier button$")
	public void click_the_maginifier_button() {
		AmazonOR.getMagnifierBtn().click();
	}

	@Then("^check all the items based on search term$")
	public void check_all_the_items_based_on_search_term() {
		List<WebElement> allItems = AmazonOR.getAllItems();
		for(WebElement item: allItems) {
			System.out.println(item.getText());
		}
	}
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}
	
	@Given("^the user to invoke the browser$")
	public void the_user_to_invoke_the_browser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
	}

	@Then("^Enter the URL$")
	public void enter_the_URL() {
		AmazonOR=new AmazonPages(driver);
		driver.get("https://www.amazon.in/");
	}

	@When("^the user mouseover on accountslist element$")
	public void the_user_mouseover_on_accountslist_element() {
		WebElement ele = AmazonOR.getAccountsandList();
		Actions act = new Actions(driver);
		act.moveToElement(ele).build().perform();
	}

	@Then("^click start here link$")
	public void click_start_here_link() {
		AmazonOR.getstartHereLnk().click();
	}

	@Then("^check if user is on registration page$")
	public void check_if_user_is_on_registration_page(){
		boolean ttlContains = driver.getTitle().contains("Registration");
		Assert.assertTrue(ttlContains);
	}


	@Then("^get the footer links of the page$")
	public void get_the_footer_links_of_the_page() {
		List<WebElement> getfooterLnks = AmazonOR.getfooterLnks();
		for(WebElement link:getfooterLnks) {
			System.out.println(link.getText());
		}
	}


}
