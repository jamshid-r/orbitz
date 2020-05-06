$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/deals_functionality.feature");
formatter.feature({
  "name": "Verification of Deals functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify error messages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test,"
    },
    {
      "name": "@dj,"
    },
    {
      "name": "@my"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_user_launch_on_login_page_by_Orbitz_title()"
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
  "name": "I pass the following data and when some of the fields are left empty, the proper error message should appear",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_pass_the_following_data_and_when_some_of_the_fields_are_left_empty_the_proper_error_message_should_appear(java.util.List\u003ccom.orbitz.beans.Entry\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});