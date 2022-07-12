package energy.ensek.purchaseapplication;

import energy.ensek.testbase.Testbase;
import io.restassured.response.Response;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class GetOrder extends Testbase {
    @Test
    public  void getData(){
        Response response= given().log().all()
                .when()
                .get("/orders");
        response.then().log().all().statusCode(200);
    }
}
