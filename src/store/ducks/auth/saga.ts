import {call, put, takeLatest} from 'redux-saga/effects'
import {loginAC} from './actionCreators';
import {AuthActionType, LoginAction} from './actionTypes';

//Имитация запроса к API для логина
const wait = (t: number) => new Promise((resolve) => setTimeout(resolve, t));
function* loginHandler (email:string) {
    yield wait(500)
    return email
}

function* loginWorker({payload}: LoginAction) {
    try {
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
