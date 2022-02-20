$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Devlabs/Global- Batch 1/Selenium/BDD.Framework.Selenium/src/test/java/com/qa/features/Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Validate amazon web application",
  "description": "",
  "id": "validate-amazon-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "validate amazon application to search an item",
  "description": "",
  "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category as \"\u003cCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "type the input as \"\u003cItemName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check all the items based on search term",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;",
  "rows": [
    {
      "cells": [
        "Category",
        "ItemName"
      ],
      "line": 17,
      "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;1"
    },
    {
      "cells": [
        "Books",
        "Da vinci Code"
      ],
      "line": 18,
      "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;2"
    },
    {
      "cells": [
        "Furniture",
        "Wooden tables"
      ],
      "line": 19,
      "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;3"
    },
    {
      "cells": [
        "Electronics",
        "Mobile phones"
      ],
      "line": 20,
      "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 797800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite for a scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user to invoke the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_to_invoke_the_browser()"
});
formatter.result({
  "duration": 26755867500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 17895661600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate amazon application to search an item",
  "description": "",
  "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category as \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "type the input as \"Da vinci Code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check all the items based on search term",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 1416302500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 24
    }
  ],
  "location": "AmazonStepDefinition.select_the_category_as(String)"
});
formatter.result({
  "duration": 3084792500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da vinci Code",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.type_the_input_as(String)"
});
formatter.result({
  "duration": 912684600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_maginifier_button()"
});
formatter.result({
  "duration": 4200260100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_items_based_on_search_term()"
});
formatter.result({
  "duration": 3454714000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 9888396300,
  "status": "passed"
});
formatter.after({
  "duration": 370400,
  "status": "passed"
});
formatter.before({
  "duration": 391500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite for a scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user to invoke the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_to_invoke_the_browser()"
});
formatter.result({
  "duration": 10012581700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 6257262500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validate amazon application to search an item",
  "description": "",
  "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category as \"Furniture\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "type the input as \"Wooden tables\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check all the items based on search term",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 696530300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Furniture",
      "offset": 24
    }
  ],
  "location": "AmazonStepDefinition.select_the_category_as(String)"
});
formatter.result({
  "duration": 1493957500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wooden tables",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.type_the_input_as(String)"
});
formatter.result({
  "duration": 555840900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_maginifier_button()"
});
formatter.result({
  "duration": 4403407100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_items_based_on_search_term()"
});
formatter.result({
  "duration": 905097100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1360055800,
  "status": "passed"
});
formatter.after({
  "duration": 184900,
  "status": "passed"
});
formatter.before({
  "duration": 2136200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite for a scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user to invoke the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_to_invoke_the_browser()"
});
formatter.result({
  "duration": 18236846300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 8286030600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate amazon application to search an item",
  "description": "",
  "id": "validate-amazon-web-application;validate-amazon-application-to-search-an-item;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category as \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "type the input as \"Mobile phones\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check all the items based on search term",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 1245910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 24
    }
  ],
  "location": "AmazonStepDefinition.select_the_category_as(String)"
});
formatter.result({
  "duration": 6618106300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phones",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.type_the_input_as(String)"
});
formatter.result({
  "duration": 760432100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_maginifier_button()"
});
formatter.result({
  "duration": 11088852000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_items_based_on_search_term()"
});
formatter.result({
  "duration": 1563921000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1918663000,
  "status": "passed"
});
formatter.after({
  "duration": 214900,
  "status": "passed"
});
});