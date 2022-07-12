package energy.ensek.pages;

import energy.ensek.DriverControl.ManageDriver;
import energy.ensek.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

   @CacheLookup
   @FindBy(xpath = "//a[normalize-space()='Buy energy »']")
    WebElement buyEnergyLink;


    public void clickOnBuyEnergyLink(){
        clickOnElement(buyEnergyLink);
    }
}


