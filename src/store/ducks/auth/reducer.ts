import { AuthActions, AuthActionType } from "./actionTypes"

interface IAuthReducer {
    isLoading:boolean
    isAuth: boolean
    email: string
}

const initialState: IAuthReducer = {
    isLoading:false,
    isAuth: false,
    email: ''
}

export const authReducer = (state = initialState, action: AuthActions): IAuthReducer => {
    switch (action.type) {
        case AuthActionType.LOGIN: {
            return {...state, isAuth: true, email: action.payload.email,isLoading:false}
        }
        case AuthActionType.LOGOUT: {
            return {...state, isAuth: false, email: ''}
        }
        case AuthActionType.SET_IS_LOADING:{
            return {...state,isLoading:action.payload}
        }
        default: {
            return state
        }
    }
}