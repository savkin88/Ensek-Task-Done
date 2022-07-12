package energy.ensek.purchaseapplication;

import energy.ensek.testbase.Testbase;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;

import static io.restassured.RestAssured.given;


public class PurchaseEnergyByPut extends Testbase {
    @Test
    public void buyEnergy() {

        Response response = given().log().all()
                .contentType(ContentType.JSON)
                .when()
                .put("/buy/1/10");
        response.then().statusCode(200);


    }
}