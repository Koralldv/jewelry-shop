import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const SidePanel = ({ defaulMinMaxPrice, minMaxPrice, setMinMaxPrice, fetching }) => {
    const [minValue, setMinValue] = useState(minMaxPrice.min);
    const [maxValue, setMaxValue] = useState(minMaxPrice.max);
    const [isActiveReset, setIsActiveReset] = useState(false);

    useEffect(() => {
        setMinMaxPrice({ min: +minValue, max: +maxValue });
        if (
            JSON.stringify({ min: +minMaxPrice.min, max: +minMaxPrice.max }) !==
            JSON.stringify({ min: +minValue, max: +maxValue })
        ) {
            setIsActiveReset(true);
        }
    }, [minValue, maxValue, minMaxPrice.min, minMaxPrice.max, fetching]);

    const handleReset = () => {
        setMinMaxPrice(defaulMinMaxPrice);
        setMinValue(defaulMinMaxPrice.min);
        setMaxValue(defaulMinMaxPrice.max);
        setIsActiveReset(false);
    };

    return (
        <Wrapper>
            <Title>Price filter</Title>
            <Inputs>
                <Input type="text" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                <Input type="text" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
            </Inputs>
            {isActiveReset === true && <Reset onClick={() => handleReset()}>Reset</Reset>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: block;
    padding: 1rem 0 1rem;
`;

const Title = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    color: var(--grey);
    padding: 1rem;
`;

const Inputs = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

const Input = styled.input`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    color: var(--black);
    padding: 0.5rem;
    margin: 0.5rem 0;
    width: 100%;
    border: 2px solid var(--grey);

    @media screen and (min-width: 768px) {
        width: 50%;
        margin: 0 1rem;
    }
`;

const Reset = styled.button`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-sm);
    cursor: pointer;
    text-transform: capitalize;
    background-color: red;
    border: none;
    padding: 0.5rem;
    margin: 0.5rem 1rem;
    color: var(--white);
`;
