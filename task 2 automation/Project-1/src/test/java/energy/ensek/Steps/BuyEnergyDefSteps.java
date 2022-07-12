package energy.ensek.Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import energy.ensek.pages.BuyEnergyPage;
import energy.ensek.pages.HomePage;
import energy.ensek.pages.SaleConfirmedPage;
import org.junit.Assert;

public class BuyEnergyDefSteps {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Buy energy link$")
    public void iClickOnBuyEnergyLink() {
        new HomePage().clickOnBuyEnergyLink();
    }

    @And("^I can add \"([^\"]*)\" units$")
    public void iCanAddUnits(String num) throws InterruptedException {
        new BuyEnergyPage().clickOnResetField();
       new BuyEnergyPage().enterNumberOfUnit(num);
    }

    @And("^I can click on buy button$")
    public void iCanClickOnBuyButton() {
        new BuyEnergyPage().clickOnBuyButton();
    }

    @Then("^I should be able to buy unit successfully$")
    public void iShouldBeAbleToBuyUnitSuccessfully() throws InterruptedException {
        String expactedText="Sale Confirmed!";
        Assert.assertEquals(new SaleConfirmedPage().getText(),expactedText);

    }
    @And("^I add \"([^\"]*)\"in quanity field$")
    public void iAddInQuanityField(String num) throws InterruptedException {
        new BuyEnergyPage().clickOnResetField();
        new BuyEnergyPage().enterNumberOfUnit(num);
    }

    @Then("^I should not able buy with invalid quantity$")
    public void iShouldNotAbleBuyWithInvalidQuantity()  {


    }

    @And("^verify \"([^\"]*)\" in Error message field$")
    public void verifyInErrorMessageField(String message) throws InterruptedException {
        Thread.sleep(5000);
        String expactedText="An error occurred while processing your request";
        Assert.assertEquals(new SaleConfirmedPage().getText(),expactedText);
    }


}
