package com.automation_pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.excelutility.ExcelLogin;



public class automation_login_page {
	
	
	 WebDriver driver;
	By uname = By.id("username"); // username in login portal
	By pword = By.id("password"); // password in the login portal
	By Loginbutton = By.xpath("//*[@id=\"customer_login\"]/div[1]/form/p[3]/input[3]"); //login button for the login
	

	ExcelLogin eid= new  ExcelLogin();
	public automation_login_page(WebDriver driver) 
	{
		this.driver =driver;
	}

	//Enter username
	public void automation_username(String username) {
		driver.findElement(By.xpath("//*[@id=\"menu-item-50\"]/a")).click(); // accounts will clicked to open the login page

		driver.findElement(uname).sendKeys(username); // to enter username
		
	}
	
	//Entering the password
	public void automation_password(String password) {
		driver.findElement(pword).sendKeys(password);// To enter password 
		
	}
	
	//click the login button
	public void automation_loginbtn() {
		driver.findElement(Loginbutton).click(); // To click the login button
		
	}
	


}
