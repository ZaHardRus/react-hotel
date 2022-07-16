import {Header} from '../../components/Header/Header'
import {OrderDetails} from "../../components/OrderDetails/OrderDetails";
import {Favorite} from '../../components/Favorite/Favorite';
import {Index} from '../../components/Hotels';

import style from './MainPage.module.scss'
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { fetchHotelsAC } from '../../store/ducks/hotels/actionCreators';
import { getCurrentDate } from '../../helpers/getCurrentDate';
import { addDays } from '../../helpers/addDays';

export const MainPage = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const currentDate =  getCurrentDate()
        dispatch(fetchHotelsAC({
            location: "Москва",
            checkIn: currentDate,
            checkOut: addDays(currentDate, 1),
            daysCount: 1
        }))
    }, [])

    return (
        <div className={style.mainPage}>
            <Header/>
            <div className={style.container}>
                <div className={style.leftSide}>
                    <OrderDetails/>
                    <Favorite/>
                </div>
                <div className={style.rightSide}>
                    <Index/>
                </div>
            </div>
        </div>
    )
}