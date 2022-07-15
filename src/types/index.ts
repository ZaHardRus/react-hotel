export type ISortBy = 'asc' | 'desc'

export interface IHotel {
    "location": {
        "country": string,
        "geo": {
            "lon": number,
            "lat": number
        },
        "state": null | string,
        "name": string
    },
    "priceAvg": number,
    "pricePercentile": {
        "3": number,
        "10": number,
        "35": number,
        "50": number,
        "75": number,
        "99": number
    },
    "hotelName": string,
    "stars": number,
    "locationId": number,
    "hotelId": number,
    "priceFrom": number
}

export interface IHotelWithHelpers extends IHotel{
    new_id:string
    checkIn:string
    daysCount:number
}

export interface FieldData {
    value: string
    error: null | string
}

export interface IDataForRequest{
    location: string
    checkIn: string
    checkOut: string
    daysCount: number
}