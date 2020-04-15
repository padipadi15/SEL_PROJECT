package com.baseclass;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LibraryClass {
	protected WebDriver driver;
	public static Properties prop;
	 
	 Logger LOG = Logger.getLogger(LibraryClass.class.getName());
//To launch
	 public void launchApp() throws IOException {
		FileInputStream fis =new FileInputStream("C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\config.property\\configuration.property");
		prop =new Properties();
		 prop.load(fis);
		 String browser = prop.getProperty("browser");
		
		 //launch Chrome Browser
		 if(browser.equalsIgnoreCase("chrome")) {
			 System.setProperty("webdriver.chrome.driver", "C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\drivers\\chromedriver.exe");
			 driver = new ChromeDriver();
			 LOG.info("Chrome is Launched");
			 
			 
		 }
		 //Launch Firefox Broswer
		 else if (browser.equalsIgnoreCase("firefox")) {
			 System.setProperty("webdriver.gecko.driver", "C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\src\\test\\resources\\drivers\\geckodriver.exe");
			 driver = new FirefoxDriver();
			 LOG.info("FireFox is Launched");
		 }
		
		 driver.manage().window().maximize();
		 LOG.info("Window is Maximized");
		 driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		 driver.get(prop.getProperty("url"));
		 LOG.info("URL is entered");
		 

	 
 }
 //To close the application
 public void quit() {
	  driver.close();
  }


}
