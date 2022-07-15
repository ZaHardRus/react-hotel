import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {fetchHotelsAC} from "../../store/ducks/hotels/actionCreators";
import {Button} from '../Button/Button';
import {TextField} from "../TextField/TextField";

import style from './OrderDetails.module.scss'

export const OrderDetails = () => {
    const {location: initialLocation} = useAppSelector(state => state.hotel)
    const currentDate = new Date().toLocaleDateString().split('T')[0].split('.').reverse().join('-')

    const [location, setLocations] = useState<string>(initialLocation)
    const [daysCount, setDaysCount] = useState<string>('1')
    const [checkIn, setCheckIn] = useState<string>(currentDate)

    function addDays(date: string, days: number) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toLocaleDateString().split('.').reverse().join('-');
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchHotelsAC({
            location: initialLocation,
            checkIn: checkIn,
            checkOut: addDays(checkIn, +daysCount),
            daysCount: +daysCount
        }))
    }, [])

    const validateInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDaysCount(e.target.value)
        if (!Number.isInteger(e.target.value)) {
            setDaysCount(parseInt(e.target.value).toString())
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
            />
            <Button onClick={searchHotelsHandler}>Найти</Button>
        </div>
    )
}