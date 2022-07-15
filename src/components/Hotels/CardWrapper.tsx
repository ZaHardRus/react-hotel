import {FC, memo} from "react";
import {IHotelWithHelpers} from "../../types";
import {Card} from "../Card/Card";
import houseIcon from "../../assets/images/house.svg";

import style from "./Hotels.module.scss";

interface CardWrapperProps {
    hotels: Array<IHotelWithHelpers>
}

export const CardWrapper: FC<CardWrapperProps> = memo(({hotels}) => {
    return (
        <div className={style.hotelsWrapper}>
            {
                hotels?.map(el =>
                    <div className={style.hotelsItem} key={el.new_id}>

                        <div className={style.houseIcon}>
                            <img width={36} height={36} src={houseIcon} alt={`${el.hotelName}_logo`}/>
                        </div>

                        <div className={style.card}>
                            <Card {...el}/>
                        </div>

                    </div>)
            }
        </div>
    )
})