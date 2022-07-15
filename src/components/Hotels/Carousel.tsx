import {memo} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import carouselItem from "../../assets/images/carousel_item.jpg";
import carouselItem_1 from "../../assets/images/carousel_item_1.jpg";
import carouselItem_2 from "../../assets/images/carousel_item_2.jpg";

import style from "./Hotels.module.scss";
import 'swiper/css';

const images = [carouselItem, carouselItem_1, carouselItem_2, carouselItem, carouselItem_1, carouselItem_2]

export const Carousel = memo(() => {
    return (
        <div className={style.carousel}>
            <Swiper
                spaceBetween={4}
                slidesPerView={3.33}>
                {
                    images.map((el, index) =>
                        <SwiperSlide key={index}>
                            <img src={el} width={164} height={149} alt={`slide-hotel${index}`}/>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
})