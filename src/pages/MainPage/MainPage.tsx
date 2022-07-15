import {Header} from '../../components/Header/Header'
import {OrderDetails} from "../../components/OrderDetails/OrderDetails";
import {Favorite} from '../../components/Favorite/Favorite';
import {Index} from '../../components/Hotels';

import style from './MainPage.module.scss'

export const MainPage = () => {

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