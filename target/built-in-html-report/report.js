$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/orbitz/features/OrbitzExcel.feature");
formatter.feature({
  "name": "Verify Orbitz links",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ex"
    }
  ]
});
formatter.scenario({
  "name": "Verify links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ex"
    },
    {
      "name": "@ex"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Links are displayed",
  "keyword": "When "
});
formatter.match({
  "location": "com.orbitz.step_definitions.VerifyLinksExcel.links_are_displayed()"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 4, Size: 3\r\n\tat java.util.ArrayList.rangeCheck(Unknown Source)\r\n\tat java.util.ArrayList.get(Unknown Source)\r\n\tat com.orbitz.utilities.ExcelUtils.getDataAsList(ExcelUtils.java:84)\r\n\tat com.orbitz.step_definitions.VerifyLinksExcel.links_are_displayed(VerifyLinksExcel.java:22)\r\n\tat ✽.Links are displayed(file:///C:/Users/Lenovo/eclipse-workspace/orbitz/src/test/resources/com/orbitz/features/OrbitzExcel.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the link and proper text should be dispayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orbitz.step_definitions.VerifyLinksExcel.i_click_on_the_link_and_proper_text_should_be_dispayed_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});