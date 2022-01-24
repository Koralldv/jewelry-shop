import React from 'react';
import styled from 'styled-components';

import Diamond from '../img/diamond.png';
import GoogleMapReact from 'google-map-react';

export const Map = () => {
    const defaultProps = {
        bootstrapURLKeys: { key: 'AIzaSyC36LKK5OBxDfd3WTkr1ZQEj6LTI_4v1CY' },
        center: {
            lat: 40.74829,
            lng: -73.985559,
        },
        zoom: 18,
    };
    return (
        <Wrapper>
            <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <ContactCard lat={40.7487} lng={-73.985759}>
                    <Icon src={Diamond} />
                    <Title>We are Jewellers</Title>
                    <Adress>Igbalangao, Bugasong, Antique, Philippines 5704</Adress>
                </ContactCard>
            </GoogleMapReact>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 400px;
    width: 100%:
`;

const ContactCard = styled.div`
    height: 500;
    width: 400px;
    background: var(--white);
    padding: 1rem;
`;

const Title = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    display: block;
    padding: 0 0 1.5rem 0;
    text-align: center;
    color: var(--black);
`;

const Adress = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    color: var(--grey);
    text-transform: uppercase;
    display: block;
    padding: 0 0 1rem 0;
    text-align: center;
`;

const Icon = styled.img`
    width: 28px;
    margin: 0 auto 1rem;
    display: block;
`;
