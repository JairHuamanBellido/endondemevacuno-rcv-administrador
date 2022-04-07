import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { Responsable } from "../Domain/model/Responsable";

export class HttpRestApiResponsable {
  public static async getPersonalInformation() {
    const { data } = await HttRestApiWithInterceptor.get<Responsable>(
      "/responsables/me"
    );
    return data;
  }
}
