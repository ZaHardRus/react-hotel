export enum AuthActionType {
    FETCH_LOGIN='auth/FETCH_LOGIN',
    LOGIN = 'auth/LOGIN',
    LOGOUT = 'auth/LOGOUT',
    SET_IS_LOADING = 'auth/SET_IS_LOADING'
}

export interface SetAuthIsLoading {
    type:AuthActionType.SET_IS_LOADING,
    payload: boolean
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
    FetchLoginAction |
    SetAuthIsLoading
