import { useQuery } from "react-query";
import { GetPersonalInformationService } from "../../Domain/services/GetPersonalInformationService";

export default function useGetPersonalInformation() {
  return useQuery("Get personal information", () =>
    GetPersonalInformationService.execute()
  );
}
