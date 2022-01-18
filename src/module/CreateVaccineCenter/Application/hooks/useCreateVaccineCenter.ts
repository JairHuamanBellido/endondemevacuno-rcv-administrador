import { useMutation } from "react-query";
import { HttpError } from "../../../../core/types/HttpError";
import { CreateVaccineCenter } from "../../Domain/model/CreateVaccineCenter";
import { VaccineSelected } from "../../Domain/model/VaccinesSelected";
import { CreateVaccineCenterService } from "../../Domain/services/CreateVaccineCenterService";

export default function useCreateVaccineCenter() {
  const mutation = useMutation<
    any,
    HttpError,
    { vaccinesSelected: VaccineSelected[]; vaccineCenter: CreateVaccineCenter }
  >((payload) =>
    CreateVaccineCenterService.execute(
      payload.vaccinesSelected,
      payload.vaccineCenter
    )
  );
  return mutation;
}
