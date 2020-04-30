$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/Deals_functionality.feature");
formatter.feature({
  "name": "Verification of Deals functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Today\u0027s Top Deals subcategories",
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
  "name": "The following subcategories should be displayed",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.the_following_subcategories_should_be_displayed(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/orbitz/features/Flights_functionality.feature");
formatter.feature({
  "name": "Verification of Flights functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test",
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
  "name": "The user clicks on Flight link",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_clicks_on_Flight_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_user_on_Search_Flights_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[.\u003d\u0027 Search Flights \u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:d8c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:56284}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 59b6fef36fee44ba2727516cb6825c98\n*** Element info: {Using\u003dxpath, value\u003d//h1[.\u003d\u0027 Search Flights \u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\n\tat com.orbitz.step_definitions.FlightsFuncrionality.verify_that_user_on_Search_Flights_page(FlightsFuncrionality.java:37)\n\tat ✽.Verify that user on Search Flights page(file:///Users/mkits/git/orbitz/src/test/resources/com/orbitz/features/Flights_functionality.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "The user provides information to Flying from input field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_provides_information_to_Flying_from_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user provides information to Flying to input field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_provides_information_to_Flying_to_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects Departing date",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_Departing_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects Returning date",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_Returning_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects value to Adults field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_value_to_Adults_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user selects value to Children field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_value_to_Children_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Add a car check box is selected",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_Add_a_car_check_box_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify Direct flights only message displayed on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_Direct_flights_only_message_displayed_on_Search_Flights_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on Search Hotel and Car button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_clicks_on_Search_Hotel_and_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/orbitz/features/LanguageOptions.feature");
formatter.feature({
  "name": "This feature will test a language Functionality with valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if a user will be able to login with a valid Email address and valid password.",
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
  "name": "The user clicks on My account button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_My_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on LogIn button from submenu",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_LogIn_button_from_submenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user inserts Email address value to Email address input field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_inserts_Email_address_value_to_Email_address_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user inserts password value to the password input field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_inserts_password_value_to_the_password_input_field()"
});
