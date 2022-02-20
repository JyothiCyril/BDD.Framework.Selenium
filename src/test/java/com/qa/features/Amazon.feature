Feature: Validate amazon web application

Background: prerequisite for a scenario
Given the user to invoke the browser
Then Enter the URL

@RegressionTest
Scenario Outline: validate amazon application to search an item
Given the user is on amazon home page
Then select the category as "<Category>"
Then type the input as "<ItemName>"
And click the maginifier button
Then check all the items based on search term
Then close the browser

Examples:
|Category|ItemName|
|Books|Da vinci Code|
|Furniture|Wooden tables|
|Electronics|Mobile phones|

@SmokeTest@RegressionTest
Scenario: validate the registration process
Given the user is on amazon home page
When the user mouseover on accountslist element
Then click start here link
Then check if user is on registration page
Then close the browser

@SmokeTest
Scenario: validate the footer links
Given the user is on amazon home page
Then get the footer links of the page
Then close the browser