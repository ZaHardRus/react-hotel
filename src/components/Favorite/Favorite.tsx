import React, {useState} from 'react';
import {useAppSelector} from "../../store";
import {Card} from "../Card/Card";
import {ArrowToggle} from '../ArrowToggler/ArrowToggle';
import arrowTop from '../../assets/images/arrow_top.svg'
import arrowBottom from '../../assets/images/arrow_bottom.svg'

import style from './Favorite.module.scss'

export const Favorite = () => {
    const [contentVisible, setContentVisible] = useState(true)
    const [optionId, setOptionId] = useState(0)
    const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc')

    const {favorites} = useAppSelector(state => state.hotel)
    const arrOption = [{id: 0, label: 'Рейтинг', value: 'stars'}, {id: 1, label: 'Цена', value: 'priceFrom'}]
    const activeOption = arrOption[optionId].value as 'stars' | 'priceFrom'

    const favoritesList = [...favorites]
        .sort((a, b) => sortBy === "asc" ? b[activeOption] - a[activeOption] : a[activeOption] - b[activeOption])



    const toggleSortByHandler = () => sortBy === "asc" ? setSortBy('desc') : setSortBy('asc')
    const toggleActiveOption = (id: number) => optionId === id ? toggleSortByHandler() : setOptionId(id)

    return (
        <div className={style.favorite}>
            <div className={style.favoriteHeader}>
                <div className={style.title}>
                    Избранное
                </div>
                <div className={style.toggleVisible} onClick={() => setContentVisible(prev => !prev)}>
                    <img src={contentVisible ? arrowTop : arrowBottom} alt="togle_visivble"/>
                </div>
            </div>
            {
                contentVisible &&
                <>
                    <div className={style.sortButtons}>
                        <button onClick={() => toggleActiveOption(0)}
                                className={optionId === 0 ? style.sortBtn : style.sortBtn_disable}>
                            <div>{arrOption[0].label}</div>
                            <ArrowToggle flag={sortBy}/>
                        </button>
                        <button onClick={() => toggleActiveOption(1)}
                                className={optionId === 1 ? style.sortBtn : style.sortBtn_disable}>
                            <div>{arrOption[1].label}</div>
                            <ArrowToggle flag={sortBy}/>
                        </button>
                    </div>
                    {
                        favorites.length === 0
                            ?
                            <div className={style.emptyList}>Список пуст</div>
                            :
                            <div className={style.listWrapper}>
                                {
                                    favoritesList?.map(el =>
                                        <React.Fragment key={el?.new_id}>
                                            <Card {...el}/>
                                        </React.Fragment>)
                                }
                            </div>
                    }
                </>
            }
        </div>
    )
}