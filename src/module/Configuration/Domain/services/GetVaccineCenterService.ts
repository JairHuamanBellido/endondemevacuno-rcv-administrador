import { VaccineCenter } from "../../../VaccineCenter/Domain/VaccineCenter";
import { HttpRestApiVaccineCenter } from "../../../CreateVaccineCenter/Infrastructure/HttpRestApiVaccineCenter";

export class GetVaccineCenterService {
  public static async execute(): Promise<VaccineCenter> {
    const vaccineCenter = await HttpRestApiVaccineCenter.getVaccineCenter();

    return vaccineCenter;
  }
}
