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
      localization: vaccineCenter.localization,
      name: vaccineCenter.name,
      ubigeoId: vaccineCenter.ubigeoId,
      vaccines: vaccinesSelected,
      capacity: parseInt(vaccineCenter.capacity),
    };
    return await HttpRestApiVaccineCenter.create(payload);
  }
}
