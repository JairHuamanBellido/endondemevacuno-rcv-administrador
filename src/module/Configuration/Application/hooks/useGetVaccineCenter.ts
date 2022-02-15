import { useQuery } from "react-query";
import { GetVaccineCenterService } from "../../Domain/services/GetVaccineCenterService";

export default function useGetVaccineCenter() {
  return useQuery("Get vaccine center", () =>
    GetVaccineCenterService.execute()
  );
}
