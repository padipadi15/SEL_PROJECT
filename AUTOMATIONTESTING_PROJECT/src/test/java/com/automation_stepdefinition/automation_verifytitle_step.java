package com.automation_stepdefinition;

import com.automation_pages.automation_login_page;
import com.automation_pages.automation_verify_title_page;
import com.baseclass.LibraryClass;
import com.seleniumutil.selenium_util;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class automation_verifytitle_step extends LibraryClass {

	automation_login_page login;
	automation_verify_title_page verify;
	
	  selenium_util util;
	  
	
	@Given("^launch the automation appliction$")
	public void launch_the_automation_appliction() throws Throwable {
		launchApp(); // To launch the browser and url
	}

	@Then("^get the title name$")
	public void get_the_title_name() throws Throwable {
	    verify = new automation_verify_title_page(driver);
	    verify.automation_getacttitle(); // to call gettitle method
	    
	}

	@Then("^compare with expected title$")
	public void compare_with_expected_title() throws Throwable {
		 verify = new automation_verify_title_page(driver);
		 verify.automation_verifytitle(); // to get verify title method
		 util = new selenium_util(driver);
			util.takeSnapShot("C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\screenshots\\practice_automation_title.png");//taking snapshot
		 driver.close();
	}

}
