import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ pages }) => {
    return (
        <Nav>
            <LinkList>
                {pages.map((item) => (
                    <Link to={item.path} key={item.name}>
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
`;

const LinkList = styled.ul`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
