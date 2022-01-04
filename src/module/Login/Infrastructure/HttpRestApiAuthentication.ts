import { HttpRestApi } from "../../../core/api/HttpRestApi";
import { HttpRestApiAuthenticationResponse as Response } from "./model/HttpApiRestAuthenticationResponse.model";
import { HttpRestApiAuthenticationRequest as Payload } from "./model/HttpRestApiAuthenticationRequest";

export class HttpRestApiAuthentication {
  public static async login(payload: Payload): Promise<Response> {
    const { data } = await HttpRestApi.post<Response>(
      "/authentication/responsable",
      payload
    );
    return data;
  }
}
