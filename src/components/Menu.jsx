import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Logo from '../img/logo.png';

export const Menu = ({ socialList, setIsActiveMenu, isActiveMenu, showMenu, widthScreen }) => {
    return (
        <Header flex={widthScreen < 768 && showMenu}>
            <SocialList>
                {socialList.map((item) => (
                    <LinkSoc href={item.link} title={item.name} key={item.name}>
                        <SocialItem key={item.name}>
                            <Icon>{React.createElement(item.icon)}</Icon>
                        </SocialItem>
                    </LinkSoc>
                ))}
            </SocialList>

            {widthScreen && !showMenu && (
                <LinkHome to="/">
                    <LogoImg src={Logo} />
                </LinkHome>
            )}

            <Buttons>
                <Icon>
                    <AiOutlineShopping />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    <AiOutlineMenu />
                </Icon>
            </Buttons>
        </Header>
    );
};

const Header = styled.header`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    padding: 26px 0;
    display: flex;
    align-items: center;

    justify-content: ${(props) => (props.flex && props.flex === true ? 'end' : 'space-between')};

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const SocialList = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

const SocialItem = styled.li``;

const Icon = styled.i`
    font-size: 16px;
    cursor: pointer;
    color: #fff;
`;

const LinkSoc = styled.a`
    color: #fff;
    margin: 0 8px;
`;

const LogoImg = styled.img`
    @media screen and (max-width: 767px) {
        margin-left: 1rem;
    }
`;

const LinkHome = styled(Link)`
    margin: 0;
`;

const Buttons = styled.span`
    margin-right: 1rem;
    & > i {
        margin-left: 2rem;
    }
`;
