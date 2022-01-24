import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from './Button';

export const AboutUs = ({ about }) => {
    return (
        <Wrapper reverse={about.reverse}>
            <Img src={about.img} />
            <Info>
                <PreTitle>{about.preTitle}</PreTitle>
                <Title>{about.title}</Title>
                <Text>{about.text}</Text>
                <Button>{about.buttonText}</Button>
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    max-width: 1110px;
    margin: 0 auto;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    ${(props) => props.reverse && props.reverse === true && reverse}
`;

const reverse = css`
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;

const Img = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
`;

const Info = styled.div`
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    margin: auto 0;
`;

const PreTitle = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    color: var(--grey);
    text-transform: uppercase;
    text-align: center;
`;

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    padding: 1rem 0 1.5rem;
    text-align: center;
`;

const Text = styled.p`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    padding: 1rem 1.5rem 1.5rem;
    text-align: center;
`;
