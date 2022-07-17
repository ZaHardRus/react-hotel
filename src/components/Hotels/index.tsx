import {useAppSelector} from "../../store";
import {declinationHotels} from "../../helpers/declination";
import {Loader} from '../Loader/Loader';
import {HotelsHeader} from "./HotelsHeader";
import {Carousel} from "./Carousel";
import {CardWrapper} from "./CardWrapper";

import style from './Hotels.module.scss'


export const Index = () => {
    const {hotels, location, favorites, isLoading, error} = useAppSelector(state => state.hotel)
    return (
        <main className={style.hotels}>
            {isLoading
                ?
                <Loader/>
                :
                error
                    ?
                    <div className={style.error}>{error}</div>
                    :
                    <>
                        <HotelsHeader hotels={hotels} isLoading={isLoading} location={location}/>
                        <Carousel/>
                        <div className={style.hotelsContent}>
                            <div className={style.favoriteCount}>
                                Добавлено в Избранное: <span>{favorites.length}</span> {declinationHotels(favorites.length)}
                            </div>
                            <CardWrapper hotels={hotels}/>
                        </div>
                    </>
            }
        </main>
    )
}