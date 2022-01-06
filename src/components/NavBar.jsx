import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ pages, setIsActiveMenu }) => {
    return (
        <Nav>
            <LinkList>
                {pages.map((item) => (
                    <Link to={item.path} key={item.name} onClick={() => setIsActiveMenu(false)}>
                        <LinkItem key={item.name}>{item.name}</LinkItem>
                    </Link>
                ))}
            </LinkList>
        </Nav>
    );
};

const Nav = styled.nav`
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: 100vh;
    background-color: var(--black);

    @media screen and (min-width: 768px) {
        height: auto;
        background-color: transparent;
    }
`;

const LinkList = styled.ul`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
const LinkItem = styled.li`
    padding: 1rem 2.5rem;
`;
const Link = styled(NavLink)`
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;

    &.active {
        border-bottom: ${() => '1px solid #fff'};
    }
`;
