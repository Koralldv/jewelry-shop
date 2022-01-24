import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

import { Panel } from '../components/Panel';
import { ProductList } from '../components/ProductList';
import { PRODUCTS } from '../products';
import { SidePanel } from '../components/SidePanel';

export const Jewelry = () => {
    const [sortIndex, setSortIndex] = useState(0);
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [minMaxPrice, setMinMaxPrice] = useState({min:'', max:''});

    const sortOptions = [
        { key: 'price', type: 'price' },
        { key: 'title', type: 'alphabet' },
    ];

    const sortFunctions = {
        price: (a, b) => a - b,
        alphabet: (a, b) => a.localeCompare(b),
    };

    const sortedItems = useMemo(() => {
        let { key, type } = sortOptions[sortIndex];
        let f = sortFunctions[type];
        return [...productList].sort((a, b) => f(a[key], b[key]));
    }, [productList, sortIndex, sortFunctions]);

    useEffect(() => {
        setIsLoading(true);

        const fetchProductList = async () => {
            let response = await fetch(PRODUCTS, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setProductList(response);
            setIsLoading(false);
            setMinMaxPrice(response.);
        };
        fetchProductList();
    }, []);

    return (
        <Wrapper>
            <WrapperInner>
                <Main>
                    <Panel
                        sortIndex={sortIndex}
                        setSortIndex={setSortIndex}
                        sortOptions={sortOptions}
                        productsLenght={productList.length}
                    />
                    {isLoading && <Loading>wefwefew</Loading>}
                    {productList.length > 0 && <ProductList products={sortedItems} />}
                </Main>
                <Side>
                    <SidePanel />
                </Side>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 2rem 0;
    background-color: var(--white);
`;

const WrapperInner = styled.div`
    max-width: calc(1110px + 4rem);
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

const Main = styled.div`
    width: 75%;
`;

const Side = styled.div`
    width: 25%;
`;

const Loading = styled.span``;

// const products = [
//     {
//         id: 0,
//         img: jewelry_2,
//         title: 'Ring 1',
//         price: 258,
//     },
//     {
//         id: 1,
//         img: jewelry_2,
//         title: 'Ring 2',
//         price: 254,
//     },
//     {
//         id: 2,
//         img: jewelry_2,
//         title: 'Ring 3',
//         price: 25455,
//     },
//     {
//         id: 4,
//         img: jewelry_2,
//         title: 'Ring 5',
//         price: 2533,
//     },
//     {
//         id: 5,
//         img: jewelry_2,
//         title: 'Ring 6',
//         price: 300,
//     },
//     {
//         id: 7,
//         img: jewelry_2,
//         title: 'Ring 8',
//         price: 25,
//     },
//     {
//         id: 9,
//         img: jewelry_2,
//         title: 'Ring 10',
//         price: 2,
//     },
// ];
