import {IDataForRequest, IHotelWithHelpers} from "../../../types";

export enum HotelsActionType {
    FETCH_HOTEL = 'FETCH_HOTEL',
    SET_HOTEL = 'SET_HOTEL',
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE',
    SET_LOCATION = 'SET_LOCATION',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface FetchHotelsAction {
    type: HotelsActionType.FETCH_HOTEL,
    payload: IDataForRequest
}
export const fetchHotelsAC = (payload: IDataForRequest): FetchHotelsAction => ({
    type: HotelsActionType.FETCH_HOTEL,
    payload
})

export interface SetHotelsAction {
    type: HotelsActionType.SET_HOTEL,
    payload: Array<IHotelWithHelpers>
}
export const setHotelsAC = (payload: Array<IHotelWithHelpers>): SetHotelsAction => ({
    type: HotelsActionType.SET_HOTEL,
    payload
})

export interface SetLocationAction {
    type: HotelsActionType.SET_LOCATION,
    payload: string
}
export const setLocationAC = (payload: string): SetLocationAction => ({type: HotelsActionType.SET_LOCATION, payload})

export interface AddFavoriteAction {
    type: HotelsActionType.ADD_FAVORITE,
    payload: IHotelWithHelpers
}
export const addFavoriteAC = (payload: IHotelWithHelpers): AddFavoriteAction => ({
    type: HotelsActionType.ADD_FAVORITE,
    payload
})

export interface RemoveFavoriteAction {
    type: HotelsActionType.REMOVE_FAVORITE,
    payload: string
}
export const removeFavoriteAC = (payload: string): RemoveFavoriteAction => ({
    type: HotelsActionType.REMOVE_FAVORITE,
    payload
})

export interface SetIsLoadingAction {
    type: HotelsActionType.SET_IS_LOADING,
    payload: boolean
}
export const setIsLoadingAC = (payload: boolean): SetIsLoadingAction => ({
    type: HotelsActionType.SET_IS_LOADING,
    payload
})

export interface SetErrorAction {
    type: HotelsActionType.SET_ERROR,
    payload: string
}
export const setErrorAC = (payload: string): SetErrorAction => ({type: HotelsActionType.SET_ERROR, payload})


export type HotelActions =
    FetchHotelsAction |
    SetHotelsAction |
    SetLocationAction |
    AddFavoriteAction |
    RemoveFavoriteAction |
    SetIsLoadingAction |
    SetErrorAction
