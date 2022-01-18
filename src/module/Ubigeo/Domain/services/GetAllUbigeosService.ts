import { HttpRestApiUbigeo } from "../../Infrastructure/HttpRestApiUbigeo";
import { Ubigeo } from "../model/Ubigeo";

export class GetAllUbigeosService {
  public static async execute(): Promise<Ubigeo[]> {
    return HttpRestApiUbigeo.getAll();
  }
}
