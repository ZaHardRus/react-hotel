import {AuthActions, AuthActionType} from "./actions";

interface IAuthReducer {
    isAuth: boolean
    email: string
}

const initialState: IAuthReducer = {
    isAuth: false,
    email: ''
}

export const authReducer = (state = initialState, action: AuthActions): IAuthReducer => {
    switch (action.type) {
        case AuthActionType.LOGIN: {
            return {...state, isAuth: true, email: action.payload}
        }
        case AuthActionType.LOGOUT: {
            return {...state, isAuth: false, email: ''}
        }
        default: {
            return state
        }
    }
}