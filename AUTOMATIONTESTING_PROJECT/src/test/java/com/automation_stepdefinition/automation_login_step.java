package com.automation_stepdefinition;

import com.automation_pages.automation_login_page;
import com.baseclass.LibraryClass;
import com.excelutility.ExcelLogin;
import com.seleniumutil.selenium_util;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class automation_login_step extends LibraryClass{
	
	automation_login_page login;

	  selenium_util util;
	  ExcelLogin eid= new  ExcelLogin();
	
	@Given("^launch the broswer and enter the url$")
	public void launch_the_broswer_and_enter_the_url() throws Throwable {
		launchApp();// To launch the browser and url
	}

	@When("^login page is opened$")
	public void login_page_is_opened() throws Throwable {
		util = new selenium_util(driver);
		util.takeSnapShot("C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\screenshots\\practice_automation_Login.png");
	}

	@Then("^enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_and(String arg1, String arg2) throws Throwable {
		login = new  automation_login_page(driver);
		login.automation_username("username");// To call the username method
		login.automation_password("password");// To call the password method
	}

	@Then("^click the login button$")
	public void click_the_login_button() throws Throwable {
		login = new  automation_login_page(driver);
		login.automation_loginbtn();// To call the loginbtn method
		
		driver.quit();
	}

}
