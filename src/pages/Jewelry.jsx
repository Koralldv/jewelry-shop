import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

import { Panel } from '../components/Panel';
import { ProductList } from '../components/ProductList';
import { PRODUCTS, COUNTS } from '../api';
import { SidePanel } from '../components/SidePanel';
import { CategoryFilter } from '../components/CategoryFilter';
import { Loader } from '../components/Loader';

const category = [
    {
        title: 'type',
        list: ['earrings', 'rings', 'bracelets', 'pendants', 'brooch'],
    },
    {
        title: 'material',
        list: ['gold', 'silver', 'pink gold'],
    },
];

export const Jewelry = () => {
    const [sortIndex, setSortIndex] = useState(0);
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeCatalogy, setActiveCatalogy] = useState({ type: '', material: '' });
    const [minMaxPrice, setMinMaxPrice] = useState('');
    const [defaulMinMaxPrice, setDefaulMinMaxPrice] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const sortOptions = [
        { key: 'price', type: 'price' },
        { key: 'title', type: 'alphabet' },
    ];

    const sortFunctions = {
        price: (a, b) => a - b,
        alphabet: (a, b) => a.localeCompare(b),
    };

    useEffect(() => {
        const fetchTotalCount = async () => {
            let response = await fetch(COUNTS, {
                method: 'GET',
            });
            response = await response.json();
            setTotalCount(response[0]);
        };
        fetchTotalCount();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const fetchProductList = async () => {
            try {
                let response = await fetch(PRODUCTS(10, currentPage), {
                    method: 'GET',
                });
                response = await response.json();
                setProductList([...productList, ...response]);
                getMinMaxPrice([...productList, ...response]);
                setCurrentPage((prevState) => prevState + 1);
                setFetching(false);
                setIsLoading(false);
                if (!response.ok) {
                    throw new Error('Server Error!');
                }
            } catch (error) {
                return console.log(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        if (fetching) fetchProductList();
    }, [fetching]);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
                1500 &&
            productList.length < totalCount
        ) {
            setFetching(true);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [totalCount, productList, scrollHandler]);

    const sortedItems = useMemo(() => {
        let { key, type } = sortOptions[sortIndex];
        let f = sortFunctions[type];
        return [...productList]
            .sort((a, b) => f(a[key], b[key]))
            .filter((prod) => prod.price >= minMaxPrice.min && prod.price <= minMaxPrice.max)
            .filter(
                (prod) => prod.productType === activeCatalogy.type || activeCatalogy.type === '',
            )
            .filter((prod) => {
                if (activeCatalogy.type) {
                    return prod.productType === activeCatalogy.type;
                }
                return prod;
            })
            .filter((prod) => {
                if (activeCatalogy.material) {
                    return prod.productMaterial === activeCatalogy.material;
                }
                return prod;
            });
    }, [productList, sortIndex, sortFunctions, minMaxPrice, activeCatalogy, fetching]);

    const getMinMaxPrice = (response) => {
        let sort = response.sort((a, b) => a.price - b.price);
        let min = sort[0].price;
        let max = sort[sort.length - 1].price;
        setMinMaxPrice({ min: min, max: max });
        setDefaulMinMaxPrice({ min: String(min), max: String(max) });
    };

    return (
        <Wrapper>
            <WrapperInner>
                <Main>
                    <Panel
                        sortIndex={sortIndex}
                        setSortIndex={setSortIndex}
                        sortOptions={sortOptions}
                        productsLenght={sortedItems.length}
                    />
                    {productList.length > 0 && <ProductList products={sortedItems} />}
                    {isLoading && (
                        <Loader>
                            <div className="loader"></div>
                        </Loader>
                    )}
                </Main>
                <Side>
                    {minMaxPrice && (
                        <SidePanel
                            defaulMinMaxPrice={defaulMinMaxPrice}
                            minMaxPrice={minMaxPrice}
                            setMinMaxPrice={setMinMaxPrice}
                            fetching={fetching}
                        />
                    )}
                    <CategoryFilter
                        category={category}
                        activeCatalogy={activeCatalogy}
                        setActiveCatalogy={setActiveCatalogy}
                    />
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
    flex-direction: column-reverse;
    align-items: start;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;

const Main = styled.div`
    width: 100%;
    @media screen and (min-width: 1024px) {
        width: 75%;
        padding-right: 1rem;
    }
`;

const Side = styled.div`
    width: 100%;
    @media screen and (min-width: 1024px) {
        width: 25%;
    }
`;
