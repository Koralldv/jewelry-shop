import React from 'react';
import styled from 'styled-components';

export const Card = ({ item }) => {
    return (
        <Block key={item.id}>
            <Text>
                <Category>{item.category}</Category>
                <Name>{item.name}</Name>
                <Price>${item.price}.00</Price>
            </Text>
            <Img src={item.img} />
        </Block>
    );
};

const Block = styled.div`
    padding: 2rem;

    :nth-child(2) {
        background-color: var(--black);
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;

        @media screen and (max-width: 768px) {
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
        }
    }
    :nth-child(3) {
        background-color: var(--black);
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;

        @media screen and (max-width: 768px) {
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
        }
    }
    :nth-child(4) {
        background-color: var(--black);
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;
        img {
            margin: 0;

            @media screen and (max-width: 768px) {
                margin: 0 auto;
            }
        }

        @media screen and (max-width: 768px) {
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
            display: block;
            padding: 2rem 3rem;
        }
    }
`;

const Text = styled.div``;

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
    padding: 0 0 1.5rem 0;
    text-align: center;
`;
const Price = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    color: var(--grey);
    text-transform: uppercase;
    display: block;
    padding: 0 0 1rem 0;
    text-align: center;
`;
const Img = styled.img`
    max-width: 50%;
    object-fit: contain;
    margin: 0 auto;
    display: block;
`;
