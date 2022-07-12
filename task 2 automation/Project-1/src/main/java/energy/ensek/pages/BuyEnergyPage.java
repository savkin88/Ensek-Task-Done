package energy.ensek.pages;

import energy.ensek.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuyEnergyPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuyEnergyPage.class.getName());

    public BuyEnergyPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//tbody/tr[3]/td[4]/input[1]")
    WebElement unitEmptyField;
    @CacheLookup
    @FindBy(xpath = "//tbody/tr[3]/td[5]/input[1]")
    WebElement buyButton;
    @CacheLookup
    @FindBy(xpath = "//input[@name='Reset']")
    WebElement resetField;
    @FindBy(xpath = "////th[(text()='Quanity of Units Available')]")
    WebElement quantityOfUnitsAvaiableField;
    @FindBy(xpath = "//th[(text()='Price')]")
    WebElement priceField;
    @FindBy(xpath = "//th[(text()='Energy Type')]")
    WebElement energyTypeField;



    public void enterNumberOfUnit(String num) throws InterruptedException {
        Thread.sleep(5000);
        unitEmptyField.clear();
        sendKeyOnElement(unitEmptyField, num);
    }

    public void clickOnBuyButton() {
        buyButton.click();
    }

    public void clickOnResetField() {
        resetField.click();
    }
}