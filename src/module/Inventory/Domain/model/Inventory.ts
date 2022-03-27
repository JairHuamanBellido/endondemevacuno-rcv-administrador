import { Vaccine } from "../../../Vaccines/Domain/model/Vaccine";
export interface Inventory {
  id: string;
  quantity: number;
  vaccine: Vaccine;
}
