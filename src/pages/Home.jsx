import React from 'react';
import { FirstScreen } from '../components/FirstScreen';
import { Featured } from '../components/Featured';

import Jewerly1 from '../img/jewerly_1.png';
import Jewerly2 from '../img/jewerly_2.png';
import Jewerly3 from '../img/jewerly_3.png';
import Jewerly4 from '../img/jewerly_4.png';
import { AboutUs } from '../components/AboutUs';

export const Home = () => {
    return (
        <>
            <FirstScreen />
            <Featured cards={cards} />
            <AboutUs />
        </>
    );
};

const cards = [
    {
        id: 0,
        category: 'gold ring',
        name: 'cassandra',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '399',
        img: Jewerly1,
    },
    {
        id: 1,
        category: 'ring',
        name: 'diamond rings',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '2,929',
        img: Jewerly2,
    },
    {
        id: 2,
        category: 'necklace',
        name: 'pearle necklace',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '1,299',
        img: Jewerly3,
    },
    {
        id: 3,
        category: 'bracelet',
        name: 'stones bracelet',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '1,329',
        img: Jewerly4,
    },
];
