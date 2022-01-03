import React from 'react';
import styled from 'styled-components';
import Main_bg from '../img/main_bg.png';
import { Button } from './Button';

export const FirstScreen = () => {
    return (
        <Screen>
            <About>
                <PreTitle>Style & Elegance</PreTitle>
                <Title>Fashion Collection</Title>
                <PostTitle>
                    Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam
                </PostTitle>
                <Button>View Collection</Button>
            </About>
            <Img src={Main_bg} />
        </Screen>
    );
};

const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 173px);
    width: 50%;
`;
const About = styled.div`
    color: #fff;
    width: 380px;
    text-align: center;
`;
const PreTitle = styled.h3`
    font-family: var(--familyLato);
    text-transform: uppercase;
    font-size: 0.8rem;
    color: var(--grey);
    margin-bottom: 0.2rem;
`;
const Title = styled.h1`
    font-family: var(--familyDomine);
    font-size: 2rem;
    color: var(--white);
    font-weight: regular;
    margin-bottom: 2rem;
`;
const PostTitle = styled.h2`
    font-family: var(--familyLato);
    text-transform: uppercase;
    font-size: 0.7rem;
    color: var(--grey);
    margin-bottom: 4rem;
    line-height: 2;
`;
const Img = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    right: -150px;
    max-width: 100%;
`;
