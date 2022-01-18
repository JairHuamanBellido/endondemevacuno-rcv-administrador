import { Disease } from "../../../Disease/model/Disease.model";

export interface Vaccine {
  id: string;
  name: string;
  description: string;
  disease: Disease;
}
