package energy.ensek.testbase;

import io.restassured.RestAssured;
import org.junit.BeforeClass;

public class Testbase {
    @BeforeClass
    public static void inIt() {
        RestAssured.baseURI="https://ensekapicandidatetest.azurewebsites.net";


    }
}
