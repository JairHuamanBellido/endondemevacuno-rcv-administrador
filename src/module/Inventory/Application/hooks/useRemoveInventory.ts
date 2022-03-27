import { useMutation } from "react-query";
import { RemoveInventoryService } from "../../Domain/services/RemoveInventoryService";

export default function useRemoveInventory(id: string) {
  const mutation = useMutation(() => RemoveInventoryService.execute(id));
  return mutation;
}
