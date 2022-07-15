import {IHotelWithHelpers} from "../../../types";
import { HotelActions, HotelsActionType } from "./actionTypes";

interface IHotelsReducer {
    hotels: Array<IHotelWithHelpers>
    favorites: Array<IHotelWithHelpers>
    location: string
    isLoading: boolean
    error: string
}

const initialState: IHotelsReducer = {
    hotels: [],
    favorites: [],
    location: 'Москва',
    isLoading: false,
    error: ''
}

export const hotelReducer = (state = initialState, action: HotelActions): IHotelsReducer => {
    switch (action.type) {
        case HotelsActionType.SET_HOTEL: {
            return {...state, hotels: action.payload, isLoading: false}
        }
        case HotelsActionType.ADD_FAVORITE: {
            return {...state, favorites: [...state.favorites, action.payload]}
        }
        case HotelsActionType.REMOVE_FAVORITE: {
            return {...state, favorites: [...state.favorites.filter(el => el.new_id !== action.payload)]}
        }
        case HotelsActionType.SET_LOCATION: {
            return {...state, location: action.payload}
        }
        case HotelsActionType.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case HotelsActionType.SET_ERROR: {
            return {...state, isLoading: false, error: action.payload}
        }
        default: {
            return state
        }
    }
}