@AutomationPracticeSite
Feature: Testing the cart features for Automation  website


@tc_01_login
Scenario Outline: validate the login functionality

Given launch the broswer and enter the url
When login page is opened
Then enter the "<username>" and "<password>"
And click the login button

Examples:
|username    |password |
|suryatejapadi15@gmail.com		 |8520888118@Padi|



@tc_02_verifytitle
Scenario: verify the title

 Given launch the automation appliction
Then get the title name 
And compare with expected title

@tc_03_stockandcart
Scenario: To know the stock and add to the cart

Given launch the automation page
Then open the product
Then verify whether product is in stock or not
And add product to the cart

@tc_04_deleteitem
Scenario: To remove item from cart
Given launch the automation practice page
Then add item to the cart
Then  open the cart
And delete the item from cart

@tc_05_checkout
Scenario: To checkout the cart
Given launch the automation practice website
Then open cart
Then click on proceed
Then enter delivery details and payment type
Then place order
