import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Clip from '../img/video.mp4';
import Poster from '../img/poster.png';
import { GiPlayButton } from 'react-icons/gi';

export const Video = () => {
    const [isPlay, setIsPlay] = useState(null);
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        if (isPlay === null) {
            setIsPlay(true);
            vidRef.current.play();
        } else if (isPlay === true) {
            setIsPlay(false);
            vidRef.current.pause();
        } else if (isPlay === false) {
            setIsPlay(true);
            vidRef.current.play();
        }
    };

    return (
        <Wrapper onClick={handlePlayVideo}>
            <video ref={vidRef} width="100%" height="auto" poster={Poster}>
                <source src={Clip} type="video/mp4" />
            </video>
            {!isPlay && (
                <Button>
                    <Text>watch</Text>
                    <Play>
                        {React.createElement(GiPlayButton, { size: '30px', color: 'white' })}
                    </Play>
                    <Text>video</Text>
                </Button>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    height: 320px;
    overflow: hidden;
    video {
        object-fit: cover;
        height: 400px;
        margin-top: -40px;
    }
`;

const Button = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -62px;
    margin-left: -72px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-left: -180px;
        margin-top: -27px;
    }
`;

const Text = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-xl);
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

const Play = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 1rem;
    background-color: transparent;
    border: 2px solid var(--white);
    border-radius: 100%;
    cursor: pointer;
`;
