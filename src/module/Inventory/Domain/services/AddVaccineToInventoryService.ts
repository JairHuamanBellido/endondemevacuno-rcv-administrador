import { HttpRestApiVaccineCenter } from "../../../CreateVaccineCenter/Infrastructure/HttpRestApiVaccineCenter";
import { HttpRestApiInventory } from "../../Infrastructure/HttpRestApiInventory";
import { HttpRestApiCreateInventory } from "../../Infrastructure/model/HttpRestApiCreateInventory.model";

export class AddVaccineToInventoryService {
  public static async execute(payload: HttpRestApiCreateInventory) {
    const { id } = await HttpRestApiVaccineCenter.getVaccineCenter();
    const inventory = await HttpRestApiInventory.insert(payload, id);
    return inventory;
  }
}
