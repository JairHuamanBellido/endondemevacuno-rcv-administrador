import { HttpRestApiVaccineCenter } from "../../Infrastructure/HttpRestApiVaccineCenter";

export class IsValidForCreateAVaccineCenterService {
  public static async execute(): Promise<{ flag: boolean }> {
    return await HttpRestApiVaccineCenter.isValidForCreateAVaccineCenter();
  }
}
