import {FC, memo} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {addFavoriteAC, removeFavoriteAC} from "../../store/ducks/hotels/actionCreators";
import {IHotelWithHelpers} from "../../types";
import {LikeButton} from '../LikeButton/LikeButton'
import {Rating} from '../Raiting/Rating'
import {declinationDays} from "../../helpers/declination";
import {formatPrice} from '../../helpers/formatPrice';

import style from './Card.module.scss'


export const Card: FC<IHotelWithHelpers> = memo((props) => {
        const {favorites} = useAppSelector(state => state.hotel)
        const dispatch = useAppDispatch()

        const toggleFavoriteHandler = () => {
            if (favorites.find(el => el.new_id === props.new_id)) {
                dispatch(removeFavoriteAC(props.new_id))
            } else {
                dispatch(addFavoriteAC(props))
            }
        }

        return (
            <div className={style.card}>
                <div className={style.topLine}>
                    <div className={style.name}>{props.hotelName}</div>
                    <div className={style.like}>
                        <LikeButton _id={props.new_id} onClick={toggleFavoriteHandler}/>
                    </div>
                </div>

                <div className={style.middleLine}>
                    <div className={style.date}>{props.checkIn}</div>
                    <div className={style.divider}/>
                    <div className={style.daysCount}>{props.daysCount} {declinationDays(props.daysCount)}</div>
                </div>

                <div className={style.bottomLine}>
                    <div className={style.rating}>
                        <Rating value={props.stars}/>
                    </div>
                    <div className={style.price}>
                        <span>Price:</span>
                        <span>{formatPrice(props.priceFrom)}</span>
                    </div>
                </div>
            </div>
        )
    }
)