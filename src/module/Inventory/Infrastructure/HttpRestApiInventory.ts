import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { Inventory } from "../Domain/model/Inventory";
import { HttpRestApiCreateInventory } from "./model/HttpRestApiCreateInventory.model";

export class HttpRestApiInventory {
  public static async getAll(id: string): Promise<Inventory[]> {
    const { data } = await HttRestApiWithInterceptor.get<Inventory[]>(
      `/vaccine-center/${id}/inventory`
    );
    return data;
  }

  public static async insert(
    payload: HttpRestApiCreateInventory,
    vaccineCenterId: string
  ): Promise<Inventory> {
    const { data } = await HttRestApiWithInterceptor.post<Inventory>(
      `/vaccine-center/${vaccineCenterId}/inventory`,
      payload
    );

    return data;
  }

  public static async removeInventory(inventoryId: string): Promise<boolean> {
    const { data } = await HttRestApiWithInterceptor.delete<boolean>(
      `/vaccine-center/inventory/${inventoryId}`
    );
    return data;
  }
}
