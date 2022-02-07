import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useMatch } from 'react-router-dom';
import { Menu } from './Menu';
import { NavBar } from './NavBar';
import { BreadCrumbs } from './BreadCrumbs';
import { Footer } from './Footer';
import {
    AiFillYoutube,
    AiFillFacebook,
    AiOutlineGooglePlus,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineDribbble,
} from 'react-icons/ai';

const breadCrumbsList = [
    {
        preTitle: 'who we are',
        title: 'about jewerler',
    },
    {
        preTitle: 'shop',
        title: 'our jewelries',
    },
    {
        preTitle: 'great deals',
        title: 'our offers',
    },

    {
        preTitle: 'need help?',
        title: 'contact us',
    },
    {
        preTitle: 'buy',
        title: 'buy',
    },
];

export const Layout = () => {
    const [breadCrumbs, setBreadCrumbs] = useState([]);
    const [isHome, setIsHome] = useState(null);
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

    const matches = {};
    matches.main = useMatch('');
    matches.about = useMatch('/about');
    matches.jewelry = useMatch('/jewelry');
    matches.offers = useMatch('/offers');
    matches.contact = useMatch('/contacts');
    matches.buy = useMatch('/buy');

    useEffect(() => {
        if (matches.main) {
            setIsHome(true);
        } else if (matches.about) {
            setIsHome(false);
            setBreadCrumbs(breadCrumbsList[0]);
        } else if (matches.jewelry) {
            setIsHome(false);
            setBreadCrumbs(breadCrumbsList[1]);
        } else if (matches.offers) {
            setIsHome(false);
            setBreadCrumbs(breadCrumbsList[2]);
        } else if (matches.contact) {
            setIsHome(false);
            setBreadCrumbs(breadCrumbsList[3]);
        } else if (matches.buy) {
            setIsHome(false);
            setBreadCrumbs(breadCrumbsList[4]);
        }
    }, [
        matches.main,
        matches.about,
        matches.jewelry,
        matches.offers,
        matches.contact,
        matches.buy,
    ]);

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
            {!isHome && <BreadCrumbs breadCrumbs={breadCrumbs} />}
            <Outlet />
            <Footer socialList={socialList} />
        </>
    );
};

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
        name: 'jewelry',
        path: '/jewelry',
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

const TopWrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: ${(props) => props.bg && 'var(--black)'};
`;
