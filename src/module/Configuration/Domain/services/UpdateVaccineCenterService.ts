import { HttpRestApiVaccineCenter } from "../../../CreateVaccineCenter/Infrastructure/HttpRestApiVaccineCenter";
import { VaccineCenter } from "../../../VaccineCenter/Domain/VaccineCenter";
import { UpdateVaccineCenter } from "../model/UpdateVaccineCenter.model";

export class UpdateVaccineCenterService {
  public static async execute(
    vaccineCenter: Partial<UpdateVaccineCenter>
  ): Promise<VaccineCenter> {
    return await HttpRestApiVaccineCenter.updateVaccineCenter(vaccineCenter);
  }
}
