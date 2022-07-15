import {all, call, spawn} from 'redux-saga/effects'
import {hotelSagaWatcher} from "./ducks/hotels/saga";

export function* rootSaga() {
    const sagas = [hotelSagaWatcher]
    const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(`RootError >> ${e}`)
                }
            }
        })
    })
    yield all(retrySagas)
}