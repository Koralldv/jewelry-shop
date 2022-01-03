import React from 'react';
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
    return (
        <>
            <Menu socialList={socialList} />
            <NavBar pages={pages} />
            <Outlet />
            <Footer socialList={socialList} />
        </>
    );
};
