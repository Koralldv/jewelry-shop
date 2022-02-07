import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { SINGLE_PRODUCT } from '../api';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';

export const JewelrySingle = () => {
    const { cartListId } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchProductList = async () => {
            let response = await fetch(SINGLE_PRODUCT(id), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setProduct(response);
            setIsLoading(false);
        };
        fetchProductList();
    }, [id]);

    const handleCart = (id, buy) => {
        if (cartListId.includes(id) && buy !== true)
            dispatch({ type: 'DELETE_PRODUCT', payload: id });
        else if (cartListId.includes(id) && buy === true) return;
        else dispatch({ type: 'ADD_PRODUCT', payload: id });
    };

    return (
        <Wrapper>
            <WrapperInner>
                {isLoading && (
                    <Loader>
                        <div className="loader"></div>
                    </Loader>
                )}
                {product && (
                    <Product>
                        <Img src={product.imageUrl} />
                        <Info>
                            <Title>{product.title}</Title>
                            <Description>{product.description}</Description>
                            <Price>${product.price}</Price>
                            <Tags>
                                <Type>Type: {product.productType}</Type>
                                <Material>Material: {product.productMaterial}</Material>
                            </Tags>
                            <Buttons>
                                <Link to="/buy">
                                    <Button
                                        onClick={() => handleCart(product.id, true)}
                                        bg="gradient"
                                        position="1rem 1rem 1rem 0">
                                        Buy now
                                    </Button>
                                </Link>
                                <Button
                                    onClick={() => handleCart(product.id)}
                                    bg={cartListId.includes(product.id) ? 'grey' : 'gradient'}
                                    position="1rem 0 1rem 0">
                                    {cartListId.includes(product.id)
                                        ? 'Remove from cart'
                                        : 'Add to cart'}
                                </Button>
                            </Buttons>
                        </Info>
                    </Product>
                )}
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 2rem 1rem;
    background: var(--white);

    @media screen and (min-width: 768px) {
        padding: 3rem 0;
    }
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
const Img = styled.img`
    object-fit: cover;
    width: 100%;
    max-width: 400px;
    height: auto;
`;
const Info = styled.div`
    padding: 1rem 0;

    @media screen and (min-width: 768px) {
        padding: 0 1rem;
    }
`;
const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    color: var(--black);
    padding: 0 0 1rem 0;
`;
const Description = styled.p`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
`;
const Price = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-xl);
    color: var(--grey);
    text-transform: uppercase;
    padding: 1rem 0 0 0;
    display: block;
`;
const Tags = styled.span`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;
const Type = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    color: var(--grey);
    padding: 0 0 1rem 0;
`;
const Material = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    color: var(--grey);
`;

const Buttons = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;
