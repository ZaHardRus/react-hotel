import {AuthActionType, FetchLoginAction, LoginAction, LogoutAction, SetAuthIsLoading} from "./actionTypes"

export const fetchLoginAC = (payload: {email:string,password:string}): FetchLoginAction => ({
    type: AuthActionType.FETCH_LOGIN,
    payload
})

export const setAuthIsLoadingAC = (payload: boolean): SetAuthIsLoading => ({type: AuthActionType.SET_IS_LOADING, payload})
export const loginAC = (payload: {email:string,password:string}): LoginAction => ({type: AuthActionType.LOGIN, payload})
export const logoutAC = (): LogoutAction => ({type: AuthActionType.LOGOUT})


