import { useQuery } from "react-query";
import { GetAllInventoryService } from "../../Domain/services/GetAllInventoryService";

export default function useGetAllInventory() {
  return useQuery("Get inventories", () => GetAllInventoryService.execute());
}
