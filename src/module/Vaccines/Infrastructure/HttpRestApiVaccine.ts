import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { Vaccine } from "../Domain/model/Vaccine";

export class HttpRestApiVaccine {
  public static async getAll(): Promise<Vaccine[]> {
    const { data } = await HttRestApiWithInterceptor.get<Vaccine[]>(
      "/vaccines"
    );
    return data;
  }
}
