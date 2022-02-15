import { Ubigeo } from "../../Ubigeo/Domain/model/Ubigeo";

export interface VaccineCenter {
  id: string;
  name: string;
  direction: string;
  businessHour: string;
  isAvailable: boolean;
  localization: string;
  diris: string;
  createdAt: Date;
  ubigeo: Ubigeo
}
