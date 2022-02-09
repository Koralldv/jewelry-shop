import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import BestImg from '../img/best_gifts.png';
import Diamond from '../img/diamond.png';

export const Best = () => {
    return (
        <Wrapper>
            <WrapperInner>
                <Banner>
                    <BannerInner>
                        <PreTitle>Best Gifts</PreTitle>
                        <Title>Find the Perfect Match for Her</Title>
                        <Button bg="gradient">Learn More</Button>
                    </BannerInner>
                    <Img src={BestImg} />
                </Banner>
                <Info>
                    <InfoInner>
                        <InfroTitle>Testimonials</InfroTitle>
                        <Icon src={Diamond} />

                        <Decr>
                            “ Unde omnis iste natus error sit voluptatem accusantium, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam. ”
                        </Decr>
                        <Author>Jenn Pereira</Author>
                    </InfoInner>
                </Info>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 3rem 0 4rem;
    background-color: var(--white);
    border-bottom: 1px solid rgb(215, 215, 215);
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-diraction: column;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
        flex-diraction: row;
    }
`;

const Banner = styled.div`
    background-color: #f5f5f4;
    display: flex;
    flex-direction: column;
    color: var(--black);
    width: 100%;
    padding: 2rem 0 2rem 2rem;

    @media screen and (min-width: 768px) {
        width: calc(60% - 2rem);
        flex-direction: row;
        align-items: center;
        margin-right: 2rem;
    }
`;

const BannerInner = styled.div``;

const InfoInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
`;
const Img = styled.img`
    width: 50%;
    margin: 0 0 0 auto;
`;

const PreTitle = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    text-transform: uppercase;
`;

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const Info = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: radial-gradient(50% 50%, rgb(43, 43, 43) 0%, rgb(0, 0, 0) 100%);
    @media screen and (min-width: 768px) {
        width: 40%;
    }
`;

const InfroTitle = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 0 0 1.5rem;
`;

const Icon = styled.img`
    width: 28px;
    margin: 0 auto;
`;

const Decr = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const Author = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
`;
