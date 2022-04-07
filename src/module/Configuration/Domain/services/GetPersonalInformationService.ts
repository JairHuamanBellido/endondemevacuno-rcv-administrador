import { HttpRestApiResponsable } from "../../Infrastructure/HttpRestApiResponsable";
import { Responsable } from "../model/Responsable";

export class GetPersonalInformationService {
  public static async execute(): Promise<Responsable> {
    return await HttpRestApiResponsable.getPersonalInformation();
  }
}
