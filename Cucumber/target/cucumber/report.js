$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rjarayht/Cucumber/Cucumber/FNFHW-12.feature");
formatter.feature({
  "line": 2,
  "name": "Validating feature file",
  "description": "Validating Features",
  "id": "validating-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BDDSTORY-FNFHW-12"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login Feature validation",
  "description": "Validate the Login Functionality",
  "id": "validating-feature-file;login-feature-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@BDDTEST-FNFHW-13"
    },
    {
      "line": 5,
      "name": "@BDDVER--1"
    },
    {
      "line": 5,
      "name": "@BDDCYC-35b221f1-4573-4266-8bb6-f0e7c199dcff"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefClass.i_am_in_login_page()"
});
formatter.result({
  "duration": 135549971,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.login_with_valid_credentials()"
});
formatter.result({
  "duration": 67950,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.home_page_should_display()"
});
formatter.result({
  "duration": 124050,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Home Page Validation",
  "description": "Validate Home page links",
  "id": "validating-feature-file;home-page-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@BDDTEST-FNFHW-14"
    },
    {
      "line": 13,
      "name": "@BDDVER--1"
    },
    {
      "line": 13,
      "name": "@BDDCYC-35b221f1-4573-4266-8bb6-f0e7c199dcff"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "check all the links",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Validate all the links should working fine",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefClass.i_am_in_Home_page()"
});
formatter.result({
  "duration": 92839,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.check_all_the_links()"
});
formatter.result({
  "duration": 219259,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.validate_all_the_links_should_working_fine()"
});
formatter.result({
  "duration": 184099,
  "status": "passed"
});
});