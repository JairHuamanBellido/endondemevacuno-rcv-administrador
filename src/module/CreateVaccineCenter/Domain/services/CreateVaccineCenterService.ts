import { HttpRestApiVaccineCenter } from "../../Infrastructure/HttpRestApiVaccineCenter";
import { HttpRestApiCreateVaccineCenter } from "../../Infrastructure/model/HttpRestApiCreateVaccineCenter.model";
import { CreateVaccineCenter } from "../model/CreateVaccineCenter";
import { VaccineSelected } from "../model/VaccinesSelected";

export class CreateVaccineCenterService {
  public static async execute(
    vaccinesSelected: VaccineSelected[],
    vaccineCenter: CreateVaccineCenter
  ) {
    const payload: HttpRestApiCreateVaccineCenter = {
      businessHour: `${vaccineCenter.hourStart} - ${vaccineCenter.hourEnd}`,
      direction: vaccineCenter.direction,
      diris: vaccineCenter.diris,
      localization: "123-123.-123",
      name: vaccineCenter.name,
      ubigeoId: vaccineCenter.ubigeoId,
      vaccines: vaccinesSelected,
    };
    return await HttpRestApiVaccineCenter.create(payload);
  }
}
