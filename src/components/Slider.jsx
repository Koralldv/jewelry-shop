import React from 'react';
import { Swiper } from 'swiper/react';
import { Arrow } from '../components/Arrow';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const Slider = ({
    children,
    sliderName,
    spaceBetween,
    slidesPerGroup,
    slidesPerView,
    breaks,
}) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerGroup={slidesPerGroup}
            slidesPerView={slidesPerView}
            // pagination={{
            //     el: '.swiper-paginations',
            // }}
            navigation={{
                nextEl: `.${sliderName}__next`,
                prevEl: `.${sliderName}__prev`,
            }}
            breakpoints={breaks}
            onSwiper={(swiper) => console.log(swiper)}>
            <Arrow top="40px" right="80px" className={`${sliderName}__prev`} main={sliderName}>
                <BsChevronLeft size="16px" />
            </Arrow>
            <Arrow top="40px" right="30px" className={`${sliderName}__next`} main={sliderName}>
                <BsChevronRight size="16px" />
            </Arrow>
            {children}
        </Swiper>
    );
};
