import {call, put, takeLatest} from 'redux-saga/effects'
import {FetchHotelsAction, HotelsActionType, setErrorAC, setHotelsAC, setIsLoadingAC, setLocationAC} from "./actions";
import {HotelService} from "../../../API/HotelService";
import {IHotel, IHotelWithHelpers} from "../../../types";

function* fetchHotel({payload}: FetchHotelsAction) {

    try {
        yield put(setErrorAC(''))
        yield put(setIsLoadingAC(true))
        const response: { data: Array<IHotelWithHelpers>, error: string | null } = yield call(HotelService.getHotelsByConditions, payload)

        if (response.data) {
            const checkIn = new Intl.DateTimeFormat('ru-RU', {dateStyle: "long"}).format(new Date(payload.checkIn))

            if (response.data.length === 0) {
                yield put(setErrorAC('Нет вариантов удовлетворяющих запросу'))
                return
            }

            const newData = response.data.map((el: IHotel) => (
                {
                    ...el,
                    checkIn,
                    daysCount: payload.daysCount,
                    new_id: `${el.hotelId}${checkIn.replaceAll(' ', '')}${payload.daysCount}`
                }))

            const location = response.data[0].location.name
            yield put(setLocationAC(location))
            yield put(setHotelsAC(newData))
        }
        if (response.error) {
            yield put(setErrorAC(response.error))
        }

    } catch (e) {
        yield put(setErrorAC('Произошла ошибка'))
    }
}

export function* hotelSagaWatcher() {
    yield takeLatest(HotelsActionType.FETCH_HOTEL, fetchHotel)
}
