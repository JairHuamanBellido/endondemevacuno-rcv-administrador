import { useQuery } from "react-query";
import { GetAllVacinesService } from "../../../Vaccines/Domain/services/GetAllVacinesService";

export default function useGetAllVacines() {
  return useQuery("Get all Vaccines", () => GetAllVacinesService.execute());
}
