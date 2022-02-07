import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick, children, bg, position }) => {
    return (
        <Btn bg={bg} position={position} onClick={onClick}>
            {children}
        </Btn>
    );
};

const Btn = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    font-family: var(--familyLato);
    letter-spacing: 0.1em;
    background-color: transparent;
    text-align: center;
    margin: 0 auto;
    padding: 1rem 2rem;
    border-radius: 100px;
    cursor: pointer;
    display: block;

    margin: ${(props) => props.position && props.position};
    background-color: ${(props) =>
        props.bg && props.bg === 'grey' ? 'var(--grey)' : 'transparent'};
    border: ${(props) =>
        props.bg && props.bg === 'grey' ? '1px solid var(--grey)' : '1px solid var(--white)'};

    background: ${(props) =>
        props.bg &&
        props.bg === 'gradient' &&
        'linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgb(117, 117, 117) 100%)'};
    border: ${(props) => props.bg && props.bg === 'gradient' && 'transparent'};
`;
