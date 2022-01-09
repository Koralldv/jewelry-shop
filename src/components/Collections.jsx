import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Silver from '../img/silver.png';
import Gold from '../img/gold.png';
import Stones from '../img/stones.png';

const collectionList = [
    { img: Silver, path: '/silver', name: 'silver' },
    { img: Gold, path: '/gold', name: 'gold' },
    { img: Stones, path: '/stones', name: 'stones' },
];

export const Collections = () => {
    return (
        <Wrapper>
            <WrapperInner>
                <Info>
                    <PreTitle>Style & Elegance</PreTitle>
                    <Title>Fashion Collection</Title>
                    <Decr>
                        Unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam
                    </Decr>
                </Info>
                {collectionList.map((item) => (
                    <CollectionItem key={item.name}>
                        <Links to={item.path}>
                            <Img src={item.img} />
                            <Name>{item.name}</Name>
                        </Links>
                    </CollectionItem>
                ))}
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 3rem 0;
    background: linear-gradient(90deg, rgb(4, 4, 13) 2%, rgb(38, 38, 40) 100%);
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-diraction: column;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        flex-diraction: row;
        div {
            width: 25%;
        }
    }
`;

const Info = styled.div`
    text-align: center;
    padding: 0 2rem;
`;

const PreTitle = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    letter-spacing: var(--letter);
    text-transform: uppercase;
`;

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const Decr = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const CollectionItem = styled.div`
    padding: 0 1rem;
    margin: 2rem auto;
`;

const Links = styled(Link)``;

const Img = styled.img`
    max-width: 100%;
`;

const Name = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    letter-spacing: var(--letter);
    text-transform: uppercase;
    text-align: center;
    display: block;
    padding: 1rem 0;
    color: var(--white);
`;
