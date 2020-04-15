package automation_testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(format = {"pretty"}, features =
"C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\BATCH_1_AUTOMATION_PROJECT\\src\\test\\resources\\features\\",
        glue={"automation_stepdefinition"},
plugin = { "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},dryRun=false)

public class Combined_features_testrunner{
	
	@AfterClass
    public static void extendReport()
  {
      Reporter.loadXMLConfig("\\src\\test\\resources\\testdata\\extent-config.xml");
      Reporter.setSystemInfo("user", System.getProperty("user.name"));
      Reporter.setSystemInfo("os", "Windows");
      Reporter.setTestRunnerOutput("Sample test runner output message");
  }   
      
	
}