import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';
import { NavBar } from './NavBar';
import {
    AiFillYoutube,
    AiFillFacebook,
    AiOutlineGooglePlus,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineDribbble,
} from 'react-icons/ai';
import { Footer } from './Footer';

const socialList = [
    {
        name: 'you tube',
        icon: AiFillYoutube,
        link: '#',
    },
    {
        name: 'faceBook',
        icon: AiFillFacebook,
        link: '#',
    },
    {
        name: 'google plus',
        icon: AiOutlineGooglePlus,
        link: '#',
    },
    {
        name: 'twitter',
        icon: AiOutlineTwitter,
        link: '#',
    },
    {
        name: 'instagram',
        icon: AiFillInstagram,
        link: '#',
    },
    {
        name: 'dribbble',
        icon: AiOutlineDribbble,
        link: '#',
    },
];

const pages = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'about us',
        path: '/about',
    },
    {
        name: 'jewerly',
        path: '/jewerly',
    },
    {
        name: 'offers',
        path: '/offers',
    },
    {
        name: 'contacts',
        path: '/contacts',
    },
    {
        name: 'buy',
        path: '/buy',
    },
];

export const Layout = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const [widthScreen, setWidthScreen] = useState(null);

    const [showMenu, setShowMenu] = useState(null);

    useEffect(() => {
        window.onscroll = function () {
            let location = window.pageYOffset;
            if (location < 176) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
    }, []);

    useEffect(() => {
        setWidthScreen(window.innerWidth);
        function handleResize(e) {
            setWidthScreen(e.currentTarget.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <TopWrapper bg={showMenu}>
                <Menu
                    socialList={socialList}
                    setIsActiveMenu={setIsActiveMenu}
                    isActiveMenu={isActiveMenu}
                    showMenu={showMenu}
                    widthScreen={widthScreen}
                />
                {(isActiveMenu === true || (widthScreen > 767 && !showMenu)) && (
                    <NavBar pages={pages} setIsActiveMenu={setIsActiveMenu} />
                )}
            </TopWrapper>
            <Outlet />
            <Footer socialList={socialList} />
        </>
    );
};

const TopWrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 999;

    background-color: ${(props) => props.bg && 'var(--black)'};
`;
