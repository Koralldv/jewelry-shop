import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';
import Logo from '../img/logo.png';
import { CartPopup } from './CartPopup';
import { useSelector } from 'react-redux';

export const Menu = ({ socialList, setIsActiveMenu, isActiveMenu, showMenu, widthScreen }) => {
    const [showCart, setShowCart] = useState(false);
    const { cartListId } = useSelector((state) => state.cart);

    return (
        <Header flex={widthScreen < 768 && showMenu} bgColor={widthScreen < 768 && isActiveMenu}>
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
            {showCart && <CartPopup setShowCart={setShowCart} />}
            <Buttons>
                <Icon onClick={() => setShowCart(true)}>
                    {cartListId.length !== 0 && <Amount>{cartListId.length}</Amount>}
                    <AiOutlineShopping />
                </Icon>
                <Icon onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    <AiOutlineMenu />
                </Icon>
            </Buttons>
        </Header>
    );
};

const Header = styled.header`
    position: relative;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    padding: 26px 0;
    display: flex;
    align-items: center;
    background-color: ${(props) =>
        props.bgColor && props.bgColor === true ? 'var(--black)' : 'transparent'};
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
    position: relative;
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

const Amount = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-sm);
    text-transform: capitalize;
    color: var(--gold);
    position: absolute;
    top: -0.5rem;
    right: -0.35rem;
    z-index: 1;
`;
