import { HttpRestApiVaccineCenter } from "../../../CreateVaccineCenter/Infrastructure/HttpRestApiVaccineCenter";
import { HttpRestApiInventory } from "../../Infrastructure/HttpRestApiInventory";
import { Inventory } from "../model/Inventory";

export class GetAllInventoryService {
  public static async execute(): Promise<Inventory[]> {
    const { id } = await HttpRestApiVaccineCenter.getVaccineCenter();
    return await HttpRestApiInventory.getAll(id);
  }
}
