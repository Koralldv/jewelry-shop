import React from 'react';
import styled, { css } from 'styled-components';

import Jewelry1 from '../img/jewelry_2.png';
import Jewelry2 from '../img/jewelry_4.png';
import Jewelry3 from '../img/jewelry_5.png';
import { Button } from './Button';

export const Discount = () => {
    return (
        <Wrapper>
            <WrapperInner>
                <About>
                    <AboutTitle>50% discount from our latest offers</AboutTitle>
                    <AboutText>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt.
                    </AboutText>
                </About>
                <Cards>
                    <Card position="first">
                        <Category>for her</Category>
                        <Name>silver bracelet</Name>
                        <Price>
                            <OldPrice>$2,999 </OldPrice>
                            <DiscountPrice>now $499</DiscountPrice>
                        </Price>
                        <Img src={Jewelry2} />
                        <Button bg="grey" position="2rem auto 0">
                            Read more
                        </Button>
                    </Card>
                    <Card position="second">
                        <Category>necklace</Category>
                        <Name>diamond necklace</Name>
                        <Price>
                            {/* <OldPrice>$2,999 </OldPrice> */}
                            {/* <DiscountPrice>now $499</DiscountPrice> */}
                            <Img src={Jewelry3} />
                            {/* <Button>Read more</Button> */}
                        </Price>
                    </Card>
                    <Card position="thrid">
                        <Category>necklace</Category>
                        <Name>diamond necklace</Name>
                        <Price>
                            {/* <OldPrice>$2,999 </OldPrice> */}
                            {/* <DiscountPrice>now $499</DiscountPrice> */}
                            <Img src={Jewelry1} />
                            {/* <Button>Read more</Button> */}
                        </Price>
                    </Card>
                </Cards>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 2rem;
    background-color: var(--white);
    border-bottom: 1px solid rgb(215, 215, 215);
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

const About = styled.div`
    width: 100%;

    @media screen and (min-width: 1024px) {
        max-width: 350px;
        padding-right: 4rem;
    }
`;

const AboutTitle = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 1rem 0 1.5rem 0;
    color: var(--black);
`;

const AboutText = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--black);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: 258px;
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: 328px 328px;
        grid-template-rows: 287px 287px;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
`;

const first = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    @media screen and (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 3;
    }
`;
const second = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    @media screen and (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`;
const thrid = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    @media screen and (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }
`;

const Card = styled.div`
    background: var(--bgGradient);
    ${(props) => props.position && props.position === 'first' && first}
    ${(props) => props.position && props.position === 'second' && second}
    ${(props) => props.position && props.position === 'thrid' && thrid}
`;

const Category = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    letter-spacing: var(--letter);
    color: var(--grey);
    text-transform: uppercase;
    display: block;
    padding: 0 0 1rem 0;
    text-align: center;
`;

const Name = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    display: block;
    padding: 0 0 0.5rem 0;
    text-align: center;
`;

const Price = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`;

const OldPrice = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    color: var(--grey);
    display: block;
    padding: 0 0 1rem 0;
    text-align: center;
    text-decoration: line-through;
`;

const DiscountPrice = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    color: var(--white);
    display: block;
    padding: 0 0 1rem 1rem;
    text-align: center;
`;

const Img = styled.img`
    height: 150px;
    margin: 0 auto 1rem;
    display: block;
`;
