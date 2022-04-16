import { useQuery } from "react-query";
import { GetInflowByDatesService } from "../../Domain/services/GetInflowByDatesService";

export default function useGetInflow(filter: string) {
  return useQuery("Get inflow", () => GetInflowByDatesService.execute(filter));
}
