import { HttRestApiWithInterceptor } from "../../../core/api/HttpRestApi";
import { HttpRestApiCreateVaccineCenter } from "./model/HttpRestApiCreateVaccineCenter.model";

export class HttpRestApiVaccineCenter {
    public static async create(payload: HttpRestApiCreateVaccineCenter) {
        const { data } = await HttRestApiWithInterceptor.post('/vaccine-center', payload);

        return data
    }
    
}