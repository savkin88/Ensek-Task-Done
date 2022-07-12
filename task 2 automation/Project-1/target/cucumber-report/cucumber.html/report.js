$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuyEnergy.feature");
formatter.feature({
  "line": 1,
  "name": "Buy energy functionality",
  "description": "",
  "id": "buy-energy-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5849734100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "i am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 125025200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I should able to  buy electricity unit and verify Availability of Units Quantity",
  "description": "",
  "id": "buy-energy-functionality;i-should-able-to--buy-electricity-unit-and-verify-availability-of-units-quantity",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can add \"22\" units",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to buy unit successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iClickOnBuyEnergyLink()"
});
formatter.result({
  "duration": 438176500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 11
    }
  ],
  "location": "BuyEnergyDefSteps.iCanAddUnits(String)"
});
formatter.result({
  "duration": 5416155700,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iCanClickOnBuyButton()"
});
formatter.result({
  "duration": 352792000,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iShouldBeAbleToBuyUnitSuccessfully()"
});
formatter.result({
  "duration": 5034363000,
  "status": "passed"
});
formatter.after({
  "duration": 1154516600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "I should not able to buy invalid quantity of electricity unit",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add \"\u003cquantity\u003e\"in quanity field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not able buy with invalid quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"\u003cmessage\u003e\" in Error message field",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;",
  "rows": [
    {
      "cells": [
        "quantity",
        "message"
      ],
      "line": 20,
      "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;1"
    },
    {
      "cells": [
        "0",
        "An error occurred while processing your request"
      ],
      "line": 21,
      "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;2"
    },
    {
      "cells": [
        "",
        "An error occurred while processing your request"
      ],
      "line": 22,
      "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;3"
    },
    {
      "cells": [
        "5000",
        "An error occurred while processing your request"
      ],
      "line": 23,
      "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;4"
    },
    {
      "cells": [
        "-722",
        "An error occurred while processing your request"
      ],
      "line": 24,
      "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4267770100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "i am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I should not able to buy invalid quantity of electricity unit",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add \"0\"in quanity field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not able buy with invalid quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"An error occurred while processing your request\" in Error message field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iClickOnBuyEnergyLink()"
});
formatter.result({
  "duration": 361001400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "BuyEnergyDefSteps.iAddInQuanityField(String)"
});
formatter.result({
  "duration": 5408660400,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iCanClickOnBuyButton()"
});
formatter.result({
  "duration": 346384300,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iShouldNotAbleBuyWithInvalidQuantity()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occurred while processing your request",
      "offset": 8
    }
  ],
  "location": "BuyEnergyDefSteps.verifyInErrorMessageField(String)"
});
formatter.result({
  "duration": 10045804300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Sale Confirmed!]\u003e but was:\u003c[An error occurred while processing your request]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat energy.ensek.Steps.BuyEnergyDefSteps.verifyInErrorMessageField(BuyEnergyDefSteps.java:55)\r\n\tat ✽.And verify \"An error occurred while processing your request\" in Error message field(BuyEnergy.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1252883900,
  "status": "passed"
});
formatter.before({
  "duration": 4210792900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "i am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I should not able to buy invalid quantity of electricity unit",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add \"\"in quanity field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not able buy with invalid quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"An error occurred while processing your request\" in Error message field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iClickOnBuyEnergyLink()"
});
formatter.result({
  "duration": 467431600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "BuyEnergyDefSteps.iAddInQuanityField(String)"
});
formatter.result({
  "duration": 5416743800,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iCanClickOnBuyButton()"
});
formatter.result({
  "duration": 216529100,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iShouldNotAbleBuyWithInvalidQuantity()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occurred while processing your request",
      "offset": 8
    }
  ],
  "location": "BuyEnergyDefSteps.verifyInErrorMessageField(String)"
});
formatter.result({
  "duration": 10038403800,
  "status": "passed"
});
formatter.after({
  "duration": 1136798100,
  "status": "passed"
});
formatter.before({
  "duration": 4235591900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "i am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I should not able to buy invalid quantity of electricity unit",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add \"5000\"in quanity field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not able buy with invalid quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"An error occurred while processing your request\" in Error message field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iClickOnBuyEnergyLink()"
});
formatter.result({
  "duration": 350284800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 7
    }
  ],
  "location": "BuyEnergyDefSteps.iAddInQuanityField(String)"
});
formatter.result({
  "duration": 5411344700,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iCanClickOnBuyButton()"
});
formatter.result({
  "duration": 353784800,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iShouldNotAbleBuyWithInvalidQuantity()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occurred while processing your request",
      "offset": 8
    }
  ],
  "location": "BuyEnergyDefSteps.verifyInErrorMessageField(String)"
});
formatter.result({
  "duration": 10035589400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Sale Confirmed!]\u003e but was:\u003c[An error occurred while processing your request]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat energy.ensek.Steps.BuyEnergyDefSteps.verifyInErrorMessageField(BuyEnergyDefSteps.java:55)\r\n\tat ✽.And verify \"An error occurred while processing your request\" in Error message field(BuyEnergy.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1182823800,
  "status": "passed"
});
formatter.before({
  "duration": 12899903200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "i am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should not able to buy invalid quantity of electricity unit",
  "description": "",
  "id": "buy-energy-functionality;i-should-not-able-to-buy-invalid-quantity-of-electricity-unit;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I click on Buy energy link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I add \"-722\"in quanity field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on buy button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not able buy with invalid quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"An error occurred while processing your request\" in Error message field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyEnergyDefSteps.iClickOnBuyEnergyLink()"
});
formatter.result({
  "duration": 345117400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-722",
      "offset": 7
    }
  ],
  "location": "BuyEnergyDefSteps.iAddInQuanityField(String)"
});
formatter.result({
  "duration": 5413663500,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iCanClickOnBuyButton()"
});
formatter.result({
  "duration": 347943500,
  "status": "passed"
});
formatter.match({
  "location": "BuyEnergyDefSteps.iShouldNotAbleBuyWithInvalidQuantity()"
});
formatter.result({
  "duration": 19500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occurred while processing your request",
      "offset": 8
    }
  ],
  "location": "BuyEnergyDefSteps.verifyInErrorMessageField(String)"
});
formatter.result({
  "duration": 10030884900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Sale Confirmed!]\u003e but was:\u003c[An error occurred while processing your request]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat energy.ensek.Steps.BuyEnergyDefSteps.verifyInErrorMessageField(BuyEnergyDefSteps.java:55)\r\n\tat ✽.And verify \"An error occurred while processing your request\" in Error message field(BuyEnergy.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1236634900,
  "status": "passed"
});
});