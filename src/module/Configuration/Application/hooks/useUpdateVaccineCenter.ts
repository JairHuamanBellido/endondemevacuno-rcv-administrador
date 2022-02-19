import { useMutation } from "react-query";
import { HttpError } from "../../../../core/types/HttpError";
import { UpdateVaccineCenter } from "../../Domain/model/UpdateVaccineCenter.model";
import { UpdateVaccineCenterService } from "../../Domain/services/UpdateVaccineCenterService";

export default function useUpdateVaccineCenter() {
  const mutation = useMutation<any, HttpError, Partial<UpdateVaccineCenter>>((payload) =>
    UpdateVaccineCenterService.execute(payload)
  );

  return mutation;
}
