import { useQuery } from "react-query";
import { GetAllUbigeosService } from "../../../Ubigeo/Domain/services/GetAllUbigeosService";

export default function useGetAllUbigeo() {
  return useQuery("get all ubigeos", () => GetAllUbigeosService.execute());
}
