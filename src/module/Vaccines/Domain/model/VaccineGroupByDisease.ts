import { Vaccine } from "./Vaccine";

export interface VaccinesGroupByDisease {
  [key: string]: Vaccine[];
}
