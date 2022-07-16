export enum AuthActionType {
    FETCH_LOGIN='FETCH_LOGIN',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}
export interface FetchLoginAction {
    type: AuthActionType.FETCH_LOGIN,
    payload: {email:string,password:string}
}
export interface LoginAction {
    type: AuthActionType.LOGIN,
    payload: {email:string,password:string}
}
export interface LogoutAction {
    type: AuthActionType.LOGOUT,
}

export type AuthActions =
    LoginAction |
    LogoutAction |
    FetchLoginAction
