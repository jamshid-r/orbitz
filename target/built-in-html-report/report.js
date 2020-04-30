$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/Flights_functionality.feature");
formatter.feature({
  "name": "Verification of Flights functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "test",
=======
  "name": "Verify Today\u0027s Top Deals subcategories",
>>>>>>> f13b9137bfe866e88c18b45861ecb524ba0239fe
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
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
<<<<<<< HEAD
  "name": "Verify that user on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_user_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user provides information to Flying from input field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_provides_information_to_Flying_from_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user provides information to Flying to input field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_provides_information_to_Flying_to_input_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects Departing date",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_Departing_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects Returning date",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_Returning_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects value to Adults field on Search Flights page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_value_to_Adults_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects value to Children field on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_selects_value_to_Children_field_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that Add a car check box is selected",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_Add_a_car_check_box_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Direct flights only message displayed on Search Flights page",
  "keyword": "And "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_Direct_flights_only_message_displayed_on_Search_Flights_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Search Hotel and Car button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.the_user_clicks_on_Search_Hotel_and_Car_button()"
=======
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
>>>>>>> f13b9137bfe866e88c18b45861ecb524ba0239fe
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/orbitz/features/ForgotPassword.feature");
formatter.feature({
  "name": "This feature will test a LogIn Functionality with reset password",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the ‘Forgot Password’ functionality.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
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
  "name": "The user clicks on Forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_clicks_on_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.verify_that_user_on_Reset_your_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user inserts Email address to input field on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_inserts_Email_address_to_input_field_on_Reset_your_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Reset My Password button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_clicks_on_Reset_My_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/orbitz/features/LoginNegative.feature");
formatter.feature({
  "name": "This feature will test a LogIn Functionality with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate if the user is not allowed access when the credentials entered are incorrect.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bravo"
    }
  ]
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.step({
  "name": "The user clicks on My account button",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks on LogIn button from submenu",
  "keyword": "When "
});
formatter.step({
  "name": "The user inserts \"\u003cEmailAddress\u003e\" value to Email address input field",
  "keyword": "When "
});
formatter.step({
  "name": "The user inserts \"\u003cpassword\u003e\" value to the password input field",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks on Sign In button",
  "keyword": "When "
});
formatter.step({
  "name": "The user should not land on Home page by Orbitz title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "password"
      ]
    },
    {
      "cells": [
        "wrong_emmaelAddress",
        "test12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate if the user is not allowed access when the credentials entered are incorrect.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bravo"
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
  "name": "The user inserts \"wrong_emmaelAddress\" value to Email address input field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginNegativeTest.the_user_inserts_value_to_Email_address_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user inserts \"test12345\" value to the password input field",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginNegativeTest.the_user_inserts_value_to_the_password_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should not land on Home page by Orbitz title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginNegativeTest.the_user_should_not_land_on_Home_page_by_Orbitz_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:d8c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:64414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a858acde7a58601aa8707c302407ace0\n*** Element info: {Using\u003did, value\u003dgss-signin-password}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\n\tat com.orbitz.step_definitions.LoginPositiveTest.the_user_inserts_password_value_to_the_password_input_field(LoginPositiveTest.java:41)\n\tat ✽.The user inserts password value to the password input field(file:///Users/mkits/git/orbitz/src/test/resources/com/orbitz/features/LoginPositive.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "The user clicks on Sign In button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_Sign_In_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:d8c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:64414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a858acde7a58601aa8707c302407ace0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.orbitz.step_definitions.Hooks.tearDown(Hooks.java:34)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the ‘Forgot Password’ functionality.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bravo"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:d8c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:64414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a858acde7a58601aa8707c302407ace0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.orbitz.step_definitions.Hooks.setUp(Hooks.java:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that user launch on login page by Orbitz title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orbitz.step_definitions.FlightsFuncrionality.verify_that_user_launch_on_login_page_by_Orbitz_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on My account button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_My_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on LogIn button from submenu",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.LoginPositiveTest.the_user_clicks_on_LogIn_button_from_submenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on Forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_clicks_on_Forgot_password_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that user on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.verify_that_user_on_Reset_your_password_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user inserts Email address to input field on Reset your password page",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_inserts_Email_address_to_input_field_on_Reset_your_password_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on Reset My Password button",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.the_user_clicks_on_Reset_My_Password_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify a confirmation message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.ForgotPasswordTest.verify_a_confirmation_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MGL139.local\u0027, ip: \u00272601:147:8200:4890:0:0:0:d8c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/7d/90lwlwr14_7...}, goog:chromeOptions: {debuggerAddress: localhost:64414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a858acde7a58601aa8707c302407ace0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.orbitz.step_definitions.Hooks.tearDown(Hooks.java:34)\n",
  "status": "failed"
});
});