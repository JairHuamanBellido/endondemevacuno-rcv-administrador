import { HttpRestApiVaccineCenter } from "../../../CreateVaccineCenter/Infrastructure/HttpRestApiVaccineCenter";
import { HttpRestApiInventory } from "../../Infrastructure/HttpRestApiInventory";

export class RemoveInventoryService {
  public static async execute(inventoryId: string) {
    const { id } = await HttpRestApiVaccineCenter.getVaccineCenter();
    await HttpRestApiInventory.removeInventory(id, inventoryId);
  }
}
