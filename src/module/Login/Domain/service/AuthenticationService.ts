import { HttpRestApiAuthentication } from "../../Infrastructure/HttpRestApiAuthentication";
import { HttpRestApiAuthenticationRequest } from "../../Infrastructure/model/HttpRestApiAuthenticationRequest";

export class AuthenticationService {
  public static async execute(body: HttpRestApiAuthenticationRequest) {
    const httpResponse = await HttpRestApiAuthentication.login(body);
    // localStorage.setItem("token", httpResponse.token);
    // localStorage.setItem("userId", httpResponse.userId);
    return httpResponse;
  }
}
