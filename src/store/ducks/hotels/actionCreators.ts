import {IDataForRequest, IHotelWithHelpers} from "../../../types";
import {
    AddFavoriteAction,
    FetchHotelsAction,
    HotelsActionType,
    RemoveFavoriteAction,
    SetErrorAction,
    SetHotelsAction,
    SetIsLoadingAction,
    SetLocationAction
} from "./actionTypes";

export const fetchHotelsAC = (payload: IDataForRequest): FetchHotelsAction => ({
    type: HotelsActionType.FETCH_HOTEL,
    payload
})

export const setHotelsAC = (payload: Array<IHotelWithHelpers>): SetHotelsAction => ({
    type: HotelsActionType.SET_HOTEL,
    payload
})

export const setLocationAC = (payload: string): SetLocationAction => ({type: HotelsActionType.SET_LOCATION, payload})

export const addFavoriteAC = (payload: IHotelWithHelpers): AddFavoriteAction => ({
    type: HotelsActionType.ADD_FAVORITE,
    payload
})

export const removeFavoriteAC = (payload: string): RemoveFavoriteAction => ({
    type: HotelsActionType.REMOVE_FAVORITE,
    payload
})

export const setIsLoadingAC = (payload: boolean): SetIsLoadingAction => ({
    type: HotelsActionType.SET_IS_LOADING,
    payload
})

export const setErrorAC = (payload: string): SetErrorAction => ({type: HotelsActionType.SET_ERROR, payload})



