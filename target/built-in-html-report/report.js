$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/Flights_functionality.feature");
formatter.feature({
  "name": "Verification of Flights functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify error message by miussing one of the required field info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@my"
    }
  ]
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.step({
  "name": "The user clicks on Flight link",
  "keyword": "When "
});
formatter.step({
  "name": "User provides \"\u003cFlyingFrom\u003e\" info to Flying from field",
  "keyword": "When "
});
formatter.step({
  "name": "Provides \"\u003cFlyingTo\u003e\" info to Flying to field",
  "keyword": "When "
});
formatter.step({
  "name": "User provides \"\u003cDepartingDate\u003e\" info of fligth",
  "keyword": "When "
});
formatter.step({
  "name": "User provides \"\u003cReturningDate\u003e\" info",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"\u003cAdults\u003e\" value to Adualts field",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"\u003cChildren\u003e\" value to Children field",
  "keyword": "When "
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FlyingFrom",
        "FlyingTo",
        "DepartingDate",
        "ReturningDate",
        "Adults",
        "Children"
      ]
    },
    {
      "cells": [
        "Washington, DC (IAD-Washington Dulles Intl.)",
        "Boston, MA (BOS-Logan Intl.)",
        "08/17/2020",
        "08/27/2020",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "Toronto, ON (YYZ-Pearson Intl.)",
        "London (LHR-Heathrow)",
        "09/19/2020",
        "09/29/2020",
        "1",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify error message by miussing one of the required field info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "User provides \"Washington, DC (IAD-Washington Dulles Intl.)\" info to Flying from field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info_to_Flying_from_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Provides \"Boston, MA (BOS-Logan Intl.)\" info to Flying to field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.provides_info_to_Flying_to_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"08/17/2020\" info of fligth",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info_of_fligth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"08/27/2020\" info",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"1\" value to Adualts field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.select_value_to_Adualts_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"1\" value to Children field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.select_value_to_Children_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Please provide the ages of children below.\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65012}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a9b9069c8901cea1e77a621cf465d50d\n*** Element info: {Using\u003dlink text, value\u003dPlease provide the ages of children below.}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.orbitz.step_definitions.FlightsFuncrionality.verify_error_message(FlightsFuncrionality.java:126)\r\n\tat ✽.verify error message(file:///C:/Users/Lenovo/eclipse-workspace/orbitz/src/test/resources/com/orbitz/features/Flights_functionality.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify error message by miussing one of the required field info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "User provides \"Toronto, ON (YYZ-Pearson Intl.)\" info to Flying from field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info_to_Flying_from_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Provides \"London (LHR-Heathrow)\" info to Flying to field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.provides_info_to_Flying_to_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"09/19/2020\" info of fligth",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info_of_fligth(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"09/29/2020\" info",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.user_provides_info(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"1\" value to Adualts field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.select_value_to_Adualts_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"1\" value to Children field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.select_value_to_Children_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Please provide the ages of children below.\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65315}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 06e482d6e7d6cccf71c1b1fbb56a8690\n*** Element info: {Using\u003dlink text, value\u003dPlease provide the ages of children below.}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.orbitz.step_definitions.FlightsFuncrionality.verify_error_message(FlightsFuncrionality.java:126)\r\n\tat ✽.verify error message(file:///C:/Users/Lenovo/eclipse-workspace/orbitz/src/test/resources/com/orbitz/features/Flights_functionality.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/orbitz/features/deals_functionality.feature");
formatter.feature({
  "name": "Verification of Deals functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Payment Type functionality when filtering results",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Deals link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter correct info into the \"\u003cDestination\u003e\", \"\u003cCheck-in\u003e\" and \"\u003cCheck-out\u003e\" fields and click on Search button",
  "keyword": "When "
});
formatter.step({
  "name": "I verify page title contains \"\u003cDestination\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I check \u003cpayment type\u003e payment option",
  "keyword": "And "
});
formatter.step({
  "name": "Results must contain the text of my \"\u003cpayment type\u003e\" selections",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payment type",
        "Destination",
        "Check-in",
        "Check-out"
      ]
    },
    {
      "cells": [
        "Free cancellation",
        "Chicago",
        "06/01/2020",
        "06/02/2020"
      ]
    },
    {
      "cells": [
        "Reserve now, pay later",
        "Chicago",
        "06/01/2020",
        "06/02/2020"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Payment Type functionality when filtering results",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I enter correct info into the \"Chicago\", \"06/01/2020\" and \"06/02/2020\" fields and click on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_enter_correct_info_into_the_and_fields_and_click_on_Search_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify page title contains \"Chicago\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_verify_page_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check Free cancellation payment option",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_check_Free_cancellatin_payment_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Results must contain the text of my \"Free cancellation\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.results_must_contain_the_text_of_my_selections(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Payment Type functionality when filtering results",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I enter correct info into the \"Chicago\", \"06/01/2020\" and \"06/02/2020\" fields and click on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_enter_correct_info_into_the_and_fields_and_click_on_Search_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify page title contains \"Chicago\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_verify_page_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check Reserve now, pay later payment option",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.i_check_Reserve_now_pay_later_payment_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Results must contain the text of my \"Reserve now, pay later\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.DealsFunctionality.results_must_contain_the_text_of_my_selections(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});