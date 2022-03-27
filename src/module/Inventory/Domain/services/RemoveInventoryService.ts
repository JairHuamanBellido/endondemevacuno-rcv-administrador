import { HttpRestApiInventory } from "../../Infrastructure/HttpRestApiInventory";

export class RemoveInventoryService {
  public static async execute(inventoryId: string) {
    await HttpRestApiInventory.removeInventory(inventoryId);
  }
}
