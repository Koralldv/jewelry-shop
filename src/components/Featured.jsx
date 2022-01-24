import React from 'react';
import styled from 'styled-components';

import { Slider } from './Slider';
import { SwiperSlide } from 'swiper/react';
import { Button } from './Button';
import { Card } from './Card';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination, Navigation]);

export const Featured = ({ cards }) => {
    return (
        <Wrapper>
            <FeaturedProds>
                <SliderBlock>
                    <Slider sliderName="main" spaceBetween={0} slidesPerGroup={1} slidesPerView={1}>
                        {cards.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Product>
                                    <PreTitle>featured product</PreTitle>
                                    <Img src={item.img} />
                                    <Category>{item.category}</Category>
                                    <Name>{item.name}</Name>
                                    <About>{item.about}</About>
                                    <BottomBlock>
                                        <Price>${item.price}.00</Price>
                                        <Button bg="grey" position="0">
                                            add to card
                                        </Button>
                                    </BottomBlock>
                                </Product>
                            </SwiperSlide>
                        ))}
                    </Slider>
                </SliderBlock>
                {cards.map((item) => {
                    if (item.id !== 0) {
                        return <Card item={item} key={item.id} />;
                    }
                })}
            </FeaturedProds>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--white);
    padding: 3rem 0;
`;

const FeaturedProds = styled.section`
    max-width: 1110px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1.28fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    & div {
        width: 100%;
        max-width: 100vw;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
    }
`;

const SliderBlock = styled.div`
    overflow: hidden;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background: var(--bgGradient);
    position: relative;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 1rem 0 1rem;
    }
`;

const PreTitle = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    text-transform: uppercase;
`;

const Img = styled.img`
    height: 150px;
    margin: 2rem auto;
`;

const Category = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    color: var(--grey);
    text-transform: uppercase;
    display: block;
    padding: 1rem 0;
`;

const Name = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const About = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const BottomBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Price = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    display: block;
    padding: 1rem 0 0 0;
`;
