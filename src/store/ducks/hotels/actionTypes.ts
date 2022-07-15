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

export interface SetHotelsAction {
    type: HotelsActionType.SET_HOTEL,
    payload: Array<IHotelWithHelpers>
}

export interface SetLocationAction {
    type: HotelsActionType.SET_LOCATION,
    payload: string
}

export interface AddFavoriteAction {
    type: HotelsActionType.ADD_FAVORITE,
    payload: IHotelWithHelpers
}

export interface RemoveFavoriteAction {
    type: HotelsActionType.REMOVE_FAVORITE,
    payload: string
}

export interface SetIsLoadingAction {
    type: HotelsActionType.SET_IS_LOADING,
    payload: boolean
}

export interface SetErrorAction {
    type: HotelsActionType.SET_ERROR,
    payload: string
}

export type HotelActions =
    FetchHotelsAction |
    SetHotelsAction |
    SetLocationAction |
    AddFavoriteAction |
    RemoveFavoriteAction |
    SetIsLoadingAction |
    SetErrorAction