$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Automation  website",
  "description": "",
  "id": "automation--website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AutomationPracticeSite"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "validate the login functionality",
  "description": "",
  "id": "automation--website;validate-the-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch the broswer and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "automation--website;validate-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "automation--website;validate-the-login-functionality;;1"
    },
    {
      "cells": [
        "suryatejapadi15@gmail.com",
        "8520888118@Padi"
      ],
      "line": 15,
      "id": "automation--website;validate-the-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "validate the login functionality",
  "description": "",
  "id": "automation--website;validate-the-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@AutomationPracticeSite"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch the broswer and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter the \"suryatejapadi15@gmail.com\" and \"8520888118@Padi\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "automation_login_step.launch_the_broswer_and_enter_the_url()"
});
formatter.result({
  "duration": 103734464255,
  "status": "passed"
});
formatter.match({
  "location": "automation_login_step.login_page_is_opened()"
});
formatter.result({
  "duration": 1220693999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suryatejapadi15@gmail.com",
      "offset": 11
    },
    {
      "val": "8520888118@Padi",
      "offset": 43
    }
  ],
  "location": "automation_login_step.enter_the_and(String,String)"
});
formatter.result({
  "duration": 12490276876,
  "status": "passed"
});
formatter.match({
  "location": "automation_login_step.click_the_login_button()"
});
formatter.result({
  "duration": 9283811985,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify the title",
  "description": "",
  "id": "automation--website;verify-the-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@tc_02_verifytitle"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "launch the automation appliction",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "get the title name",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "compare with expected title",
  "keyword": "And "
});
formatter.match({
  "location": "automation_verifytitle_step.launch_the_automation_appliction()"
});
formatter.result({
  "duration": 69445032299,
  "status": "passed"
});
formatter.match({
  "location": "automation_verifytitle_step.get_the_title_name()"
});
formatter.result({
  "duration": 22996469,
  "status": "passed"
});
formatter.match({
  "location": "automation_verifytitle_step.compare_with_expected_title()"
});
formatter.result({
  "duration": 3656289262,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To know the stock and add to the cart",
  "description": "",
  "id": "automation--website;to-know-the-stock-and-add-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_03_stockandcart"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "launch the automation page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "open the product",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "verify whether product is in stock or not",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "add product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "automation_stockandadd_step.launch_the_automation_page()"
});
formatter.result({
  "duration": 60583254862,
  "status": "passed"
});
formatter.match({
  "location": "automation_stockandadd_step.open_the_product()"
});
formatter.result({
  "duration": 58605818137,
  "status": "passed"
});
formatter.match({
  "location": "automation_stockandadd_step.verify_whether_product_is_in_stock_or_not()"
});
formatter.result({
  "duration": 73021143,
  "status": "passed"
});
formatter.match({
  "location": "automation_stockandadd_step.add_product_to_the_cart()"
});
formatter.result({
  "duration": 8621258734,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To remove item from cart",
  "description": "",
  "id": "automation--website;to-remove-item-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc_04_deleteitem"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "launch the automation practice page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "add item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "open the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "delete the item from cart",
  "keyword": "And "
});
formatter.match({
  "location": "automation_deleteitemincart_step.launch_the_automation_practice_page()"
});
formatter.result({
  "duration": 53879704299,
  "status": "passed"
});
formatter.match({
  "location": "automation_deleteitemincart_step.add_item_to_the_cart()"
});
formatter.result({
  "duration": 21855636606,
  "status": "passed"
});
formatter.match({
  "location": "automation_deleteitemincart_step.open_the_cart()"
});
formatter.result({
  "duration": 9505114080,
  "status": "passed"
});
formatter.match({
  "location": "automation_deleteitemincart_step.delete_the_item_from_cart()"
});
formatter.result({
  "duration": 9281778155,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To checkout the cart",
  "description": "",
  "id": "automation--website;to-checkout-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc_05_checkout"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "launch the automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "open cart",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "click on proceed",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "enter delivery details and payment type",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "place order",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "it is directed to another page",
  "keyword": "And "
});
formatter.match({
  "location": "automation_checkout_step.launch_the_automation_practice_website()"
});
formatter.result({
  "duration": 60142118741,
  "status": "passed"
});
formatter.match({
  "location": "automation_checkout_step.open_cart()"
});
formatter.result({
  "duration": 37895256935,
  "status": "passed"
});
formatter.match({
  "location": "automation_checkout_step.click_on_proceed()"
});
formatter.result({
  "duration": 5458290677,
  "status": "passed"
});
formatter.match({
  "location": "automation_checkout_step.enter_delivery_details_and_payment_type()"
});
formatter.result({
  "duration": 2903386266,
  "status": "passed"
});
formatter.match({
  "location": "automation_checkout_step.place_order()"
});
formatter.result({
  "duration": 376917406,
  "status": "passed"
});
formatter.match({
  "location": "automation_checkout_step.it_is_directed_to_another_page()"
});
formatter.result({
  "duration": 11340615092,
  "status": "passed"
});
});