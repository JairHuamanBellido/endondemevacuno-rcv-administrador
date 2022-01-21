import { useQuery } from "react-query";
import { IsValidForCreateAVaccineCenterService } from "../../Domain/services/IsValidForCreateAVaccineCenterService";

export default function useIsValidForCreate() {
  return useQuery("is valid", () =>
    IsValidForCreateAVaccineCenterService.execute()
  );
}
