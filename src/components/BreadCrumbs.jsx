import React from 'react';
import styled from 'styled-components';

import Main_bg from '../img/main_bg.png';

export const BreadCrumbs = ({ breadCrumbs }) => {
    return (
        <Wrapper>
            <WrapperInner>
                <Img src={Main_bg} />
                <PreTitle>{breadCrumbs.preTitle}</PreTitle>
                <Title>{breadCrumbs.title}</Title>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        height: 360px;
    }
`;

const WrapperInner = styled.div`
    width: 100%;
    max-width: 1110px;
    padding: 7rem 0 2rem;
    position: relative;

    @media screen and (min-width: 768px) {
        padding: 5rem 0 2rem;
    }
`;

const Img = styled.img`
    object-fit: cover;
    height: 211px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    @media screen and (min-width: 768px) {
        height: 360px;
        bottom: 0;
        object-fit: contain;
    }
`;

const PreTitle = styled.h3`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    color: var(--grey);
    text-transform: uppercase;
    text-align: center;
`;

const Title = styled.h1`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    padding: 1rem 0 0;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 1rem 0 1.5rem;
    }
`;
