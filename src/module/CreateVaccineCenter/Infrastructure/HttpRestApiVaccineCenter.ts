import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { UpdateVaccineCenter } from "../../Configuration/Domain/model/UpdateVaccineCenter.model";
import { VaccineCenter } from "../../VaccineCenter/Domain/VaccineCenter";
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
  public static async getVaccineCenter() {
    const { data } = await HttRestApiWithInterceptor.get<VaccineCenter>(
      `/vaccine-center/`
    );
    return data;
  }

  public static async updateVaccineCenter(vaccineCenter: Partial<UpdateVaccineCenter>) {
    const { data } = await HttRestApiWithInterceptor.put<VaccineCenter>(
      "/vaccine-center",
      { ...vaccineCenter }
    );

    return data;
  }
}
