import { useMutation } from "react-query";
import { HttpError } from "../../../../core/types/HttpError";
import { AddVaccineToInventoryService } from "../../Domain/services/AddVaccineToInventoryService";
import { HttpRestApiCreateInventory as Payload } from "../../Infrastructure/model/HttpRestApiCreateInventory.model";

export default function useAddVaccineToInventory() {
  const mutation = useMutation<any, HttpError, Payload>((payload) =>
    AddVaccineToInventoryService.execute(payload)
  );

  return mutation;
}
