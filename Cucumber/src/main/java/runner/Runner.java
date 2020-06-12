package runner;

import org.junit.runner.*;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@SuppressWarnings("unused")
@Test
@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\rjarayht\\Cucumber\\Cucumber\\FNFHW-12.feature", 
glue="stepdefinition",
plugin = {"usage", "html:target/cucumber","json:target/cucumber-report.json"},
strict = false,
dryRun = false,
monochrome = true)
public class Runner extends AbstractTestNGCucumberTests{
 
}
