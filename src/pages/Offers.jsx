import React from 'react';

import { Collections } from '../components/Collections';
import { Video } from '../components/Video';
import { Discount } from '../components/Discount';

export const Offers = () => {
    return (
        <>
            <Discount />
            <Video />
            <Collections />
        </>
    );
};
