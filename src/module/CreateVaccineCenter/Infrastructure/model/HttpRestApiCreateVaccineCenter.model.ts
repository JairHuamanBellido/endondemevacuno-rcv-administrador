interface Vaccine {
  vaccineId: string;
  quantity: number;
}
export interface HttpRestApiCreateVaccineCenter {
  name: string;
  direction: string;
  businessHour: string;
  localization: string;
  diris: string;
  ubigeoId: string;
  vaccines: Vaccine[];
  capacity: number;
}
