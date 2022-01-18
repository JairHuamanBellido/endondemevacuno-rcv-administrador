import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { Ubigeo } from "../Domain/model/Ubigeo";

export class HttpRestApiUbigeo {
  public static async getAll(): Promise<Ubigeo[]> {
    const { data } = await HttRestApiWithInterceptor.get<Ubigeo[]>("/ubigeos");
    return data;
  }
}
