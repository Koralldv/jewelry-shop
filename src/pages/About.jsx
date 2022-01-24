import React from 'react';
import { AboutUs } from '../components/AboutUs';
import { Story } from '../components/Story';
import Girl from '../img/girl_4.png';

export const About = () => {
    return (
        <>
            <Story />
            <AboutUs about={whyChooseUs} />
        </>
    );
};

const whyChooseUs = {
    img: Girl,
    reverse: true,
    preTitle: 'who we are',
    title: 'why choose us',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    buttonText: 'Learn More',
};
