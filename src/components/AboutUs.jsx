import React from 'react';
import styled from 'styled-components';

import AbutUs from '../img/about_us.png';
import { Button } from './Button';

export const AboutUs = () => {
    return (
        <Wrapper>
            <Img src={AbutUs} />
            <Info>
                <PreTitle>who we are</PreTitle>
                <Title>about us</Title>
                <Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </Text>
                <Button>Learn More</Button>
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    // background-color: var(--white);
    display: flex;
    max-width: 1110px;
    margin: 0 auto;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
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
