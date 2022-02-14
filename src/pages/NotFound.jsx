import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Title>page not found</Title>
            <Button onClick={() => navigate(-1)} position="1rem auto 2rem">
                Back
            </Button>
        </>
    );
};

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    color: var(--white);
    padding: 2rem;
    text-align: center;
`;
