import {AuthActionType, LoginAction, LogoutAction} from "./actionTypes"

export const loginAC = (payload: string): LoginAction => ({type: AuthActionType.LOGIN, payload})
export const logoutAC = (): LogoutAction => ({type: AuthActionType.LOGOUT})


