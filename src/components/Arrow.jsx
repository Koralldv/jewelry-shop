import styled from 'styled-components';

export const Arrow = styled.span`
    width: 36px;
    height: 36px;
    position: absolute;
    background-color: var(--rgba);
    box-shadow: var(--shadow);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    border: 2px solid var(--grey);
    &:hover {
        background-color: var(--grey);
    }

    top: ${(props) => (props.top ? props.top : 'auto')};
    bottom: ${(props) => (props.bottom ? props.bottom : 'auto')};
    left: ${(props) => (props.left ? props.left : 'auto')};
    right: ${(props) => (props.right ? props.right : 'auto')};
`;
