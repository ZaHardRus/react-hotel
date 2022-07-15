import {FC, memo} from "react";
import {IHotelWithHelpers} from "../../types";
import {Loader} from "../Loader/Loader";
import arrow from "../../assets/images/arrow.svg";

import style from "./Hotels.module.scss";

interface HotelsHeaderProps {
    location: string
    isLoading: boolean
    hotels: Array<IHotelWithHelpers>
}

export const HotelsHeader: FC<HotelsHeaderProps> = memo(({location, isLoading, hotels}) => {
    return (
        <div className={style.hotelsHeader}>
            <div className={style.leftSide}>
                <span>Отели</span>
                <img src={arrow} width={8} height={16} alt="arrow"/>
                <span className={style.location}>{location}</span>
            </div>
            <div className={style.rightSide}>
                <span>{isLoading ? <Loader/> : hotels.length && hotels[0].checkIn}</span>
            </div>
        </div>
    )
})