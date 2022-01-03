import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import Logo from '../img/logo.png';

export const Menu = ({ socialList }) => {
    return (
        <Header>
            <SocialList>
                {socialList.map((item) => (
                    <Link href={item.link} title={item.name} key={item.name}>
                        <SocialItem key={item.name}>
                            <Icon>{React.createElement(item.icon)}</Icon>
                        </SocialItem>
                    </Link>
                ))}
            </SocialList>

            <LinkHome href="/">
                <LogoImg src={Logo} />
            </LinkHome>

            <Buttons>
                <Icon>
                    <AiOutlineShopping />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon>
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
`;

const SocialList = styled.ul`
    display: flex;
`;

const SocialItem = styled.li``;

const Icon = styled.i`
    font-size: 16px;
    cursor: pointer;
    color: #fff;
`;

const Link = styled.a`
    color: #fff;
    margin: 0 8px;
`;

const LogoImg = styled.img``;

const LinkHome = styled.a`
    margin: 0 auto;
`;

const Buttons = styled.span`
    & > i {
        margin-left: 2rem;
    }
`;
