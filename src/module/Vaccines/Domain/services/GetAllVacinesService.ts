import { HttpRestApiVaccine } from "../../Infrastructure/HttpRestApiVaccine";
import { Vaccine } from "../model/Vaccine";
import { VaccinesGroupByDisease } from "../model/VaccineGroupByDisease";

function groupBy(arr: Vaccine[], criteria: keyof Vaccine) {
  const newObj = arr.reduce(function (
    acc: VaccinesGroupByDisease,
    currentValue
  ) {
    if (!acc[currentValue["disease"]["name"]]) {
      acc[currentValue["disease"]["name"]] = [];
    }
    acc[currentValue["disease"]["name"]].push(currentValue);
    return acc;
  },
  {});
  return newObj;
}
export class GetAllVacinesService {
  public static async execute(): Promise<VaccinesGroupByDisease> {
    const vaccines = await HttpRestApiVaccine.getAll();
    return groupBy(vaccines, "disease");
  }
}
