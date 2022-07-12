package energy.ensek.pages;

import energy.ensek.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SaleConfirmedPage extends Utility {
    private static final Logger log = LogManager.getLogger(SaleConfirmedPage.class.getName());

    public SaleConfirmedPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h2")
    WebElement saleConfirmedField;

    public String getText() throws InterruptedException {
        Thread.sleep(5000);
        return getTextFromElement(saleConfirmedField);
    }
}
