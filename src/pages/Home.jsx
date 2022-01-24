import React from 'react';
import { FirstScreen } from '../components/FirstScreen';
import { Featured } from '../components/Featured';
import { Collections } from '../components/Collections';

import Jewelry1 from '../img/jewelry_1.png';
import Jewelry2 from '../img/jewelry_2.png';
import Jewelry3 from '../img/jewelry_3.png';
import Jewelry4 from '../img/jewelry_4.png';
import Girl from '../img/about_us.png';
import { AboutUs } from '../components/AboutUs';

export const Home = () => {
    return (
        <>
            <FirstScreen />
            <Featured cards={cards} />
            <AboutUs about={aboutUs} />
            <Collections />
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
        img: Jewelry1,
    },
    {
        id: 1,
        category: 'ring',
        name: 'diamond rings',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '2,929',
        img: Jewelry2,
    },
    {
        id: 2,
        category: 'necklace',
        name: 'pearle necklace',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '1,299',
        img: Jewelry3,
    },
    {
        id: 3,
        category: 'bracelet',
        name: 'stones bracelet',
        about: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
        price: '1,329',
        img: Jewelry4,
    },
];

const aboutUs = {
    img: Girl,
    reverse: false,
    preTitle: 'who we are',
    title: 'about us',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamvoluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    buttonText: 'Learn More',
};
