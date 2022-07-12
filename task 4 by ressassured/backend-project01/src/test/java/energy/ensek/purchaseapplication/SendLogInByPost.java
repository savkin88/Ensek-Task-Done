package energy.ensek.purchaseapplication;

import energy.ensek.model.LoginPOJO;
import energy.ensek.testbase.Testbase;
import io.restassured.http.ContentType;
import io.restassured.response.ValidatableResponse;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class SendLogInByPost extends Testbase {

    @Test
    public void sendingLogin() {
        LoginPOJO loginPOJO = new LoginPOJO();
        loginPOJO.setUsername("test");
        loginPOJO.setPassword("testing");
        ValidatableResponse response = given().log().all().contentType(ContentType.JSON)
                .when().body(loginPOJO)
                .post("/login")
                .then().log().all().statusCode(200);
        String token = response.extract().path("access_token");
        System.out.println(token);


    }
}
