import {memo, useState} from "react";
import {addDays} from "../../helpers/addDays";
import {getCurrentDate} from "../../helpers/getCurrentDate";
import {useAppDispatch} from "../../store";
import {fetchHotelsAC} from "../../store/ducks/hotels/actionCreators";
import {Button} from '../Button/Button';
import {TextField} from "../TextField/TextField";

import style from './OrderDetails.module.scss'

export const OrderDetails = memo(() => {
    const currentDate = getCurrentDate()
    const dispatch = useAppDispatch()

    const [location, setLocations] = useState<string>('Москва')
    const [daysCount, setDaysCount] = useState<string>('1')
    const [checkIn, setCheckIn] = useState<string>(currentDate)

    const validateInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDaysCount(e.target.value)
        if (!Number.isInteger(+e.target.value)) {
            setDaysCount('1')
        }
    }

    const searchHotelsHandler = () => {
        dispatch(fetchHotelsAC({location, checkIn, checkOut: addDays(checkIn, +daysCount), daysCount: +daysCount}))
    }
    return (
        <div className={style.orderDetails}>
            <TextField
                label={'Локация'}
                value={location}
                onChange={e => setLocations(e.target.value)}
                labelWeight={500}
            />
            <label>
                <div>Дата заселения</div>
                <input
                    min={currentDate}
                    className={style.datePicker}
                    type="date" value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                />
            </label>
            <TextField label={'Количество дней'}
                       value={daysCount}
                       type="number"
                       step={1}
                       onChange={validateInputNumber}
                       labelWeight={500}
            />
            <Button style={{height:50}} onClick={searchHotelsHandler}>Найти</Button>
        </div>
    )
})