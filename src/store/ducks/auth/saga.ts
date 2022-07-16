import {call, put, takeLatest} from 'redux-saga/effects'
import {loginAC, setAuthIsLoadingAC} from './actionCreators';
import {AuthActionType, LoginAction} from './actionTypes';

//Имитация запроса к API для логина
const wait = (t: number) => new Promise((resolve) => setTimeout(resolve, t));
function* loginHandler (email:string) {
    yield wait(750)
    return email
}

function* loginWorker({payload}: LoginAction) {
    try {
        yield put(setAuthIsLoadingAC(true))
        const response:string = yield call(loginHandler, payload.email)

        yield put(loginAC(payload))

        localStorage.setItem('HotelToken', response)
    } catch (e) {
       console.log(e)
    }
}

export function* authSagaWatcher() {
    yield takeLatest(AuthActionType.FETCH_LOGIN, loginWorker)
}
