$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/deals_functionality.feature");
formatter.feature({
  "name": "Verification of Deals functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Weekly deald booking options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_am_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Deals link",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_click_on_Deals_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Correct title should be dispalayed",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.correct_title_should_be_dispalayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The fallowing booking options should display",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.the_fallowing_booking_options_should_display(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});