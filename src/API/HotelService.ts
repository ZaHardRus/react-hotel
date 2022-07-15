import axios from "axios";
import {IDataForRequest} from "../types";

export class HotelService {

    private static baseUrl: string = 'http://engine.hotellook.com/api/v2/cache.json';

    static async getHotelsByConditions(conditions: IDataForRequest) {
        try {
            const {data} = await axios.get(
                `${HotelService.baseUrl}`, {
                    params: {
                        location: conditions.location,
                        currency: 'rub',
                        checkIn: conditions.checkIn,
                        checkOut: conditions.checkOut,
                        limit: 12,
                        lang: 'ru'
                    }
                }
            )
            return {data, error: null}
        } catch (e: any) {
            return {data: null, error: e.response.data.message}
        }
    }
}