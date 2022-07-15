export enum AuthActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface LoginAction {
    type: AuthActionType.LOGIN,
    payload: string
}
export const loginAC = (payload: string): LoginAction => ({type: AuthActionType.LOGIN, payload})

export interface LogoutAction {
    type: AuthActionType.LOGOUT,
}
export const logoutAC = (): LogoutAction => ({type: AuthActionType.LOGOUT})


export type AuthActions =
    LoginAction |
    LogoutAction
