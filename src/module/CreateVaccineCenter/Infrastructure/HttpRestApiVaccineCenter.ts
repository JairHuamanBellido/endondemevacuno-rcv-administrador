import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { HttpRestApiCreateVaccineCenter } from "./model/HttpRestApiCreateVaccineCenter.model";

export class HttpRestApiVaccineCenter {
  public static async create(payload: HttpRestApiCreateVaccineCenter) {
    const { data } = await HttRestApiWithInterceptor.post(
      "/vaccine-center",
      payload
    );

    return data;
  }
  public static async isValidForCreateAVaccineCenter() {
    const { data } = await HttRestApiWithInterceptor.get<{ flag: boolean }>(
      "/responsables/valid-for-create-vaccine-center"
    );
    return data;
  }
}
