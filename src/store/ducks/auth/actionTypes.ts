export enum AuthActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface LoginAction {
    type: AuthActionType.LOGIN,
    payload: string
}
export interface LogoutAction {
    type: AuthActionType.LOGOUT,
}

export type AuthActions =
    LoginAction |
    LogoutAction
