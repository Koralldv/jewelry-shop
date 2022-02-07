import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SINGLE_PRODUCT, ORDER } from '../api';
import { IoMdTrash } from 'react-icons/io';
import { Loader } from '../components/Loader';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Buy = () => {
    const { cartListId } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [cartList, setCartList] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState('');
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);

    const postOrder = async () => {
        console.log(2);
        try {
            const response = await fetch(ORDER, {
                method: 'POST',
                body: JSON.stringify([...order, ...cartList]),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            dispatch({ type: 'ZEROING_PRODUCT' });
            setIsOrderSuccess(!isOrderSuccess);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    useEffect(() => {
        let cartMass = [];
        setIsLoading(true);
        cartListId.length !== 0
            ? cartListId.map(async (id) => {
                  let response = await fetch(SINGLE_PRODUCT(id), {
                      method: 'GET',
                      headers: {
                          'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                          'Content-Type': 'application/json',
                      },
                  });

                  response = await response.json();
                  cartMass.push(response);
                  setCartList([...cartMass]);
                  setIsLoading(false);
              })
            : setCartList([]);
    }, [cartListId]);

    useEffect(() => {
        setIsLoading(true);
        const fetchOrder = async () => {
            let response = await fetch(ORDER, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setOrder([...response]);
            console.log(response);
            setIsLoading(false);
        };
        fetchOrder();
    }, [isOrderSuccess]);

    const deleteLikes = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: id });
    };

    return (
        <Wrapper>
            <WrapperInner>
                {isLoading && cartListId.length && (
                    <Loader>
                        <div className="loader"></div>
                    </Loader>
                )}
                {cartList.length !== 0 ? (
                    cartList.map((product) => (
                        <Product key={product.id}>
                            <Img src={product.imageUrl} />
                            <Link to={`jewelry/${product.id}`}>
                                <Title>{product.title}</Title>
                            </Link>
                            <Price>${product.price}</Price>
                            <IconTrash onClick={() => deleteLikes(product.id)}>
                                <IoMdTrash />
                            </IconTrash>
                        </Product>
                    ))
                ) : (
                    <Empty>cart is empty</Empty>
                )}
                {cartList.length && (
                    <>
                        <FullPriceWrap>
                            Full price:
                            <FullPrice>
                                ${cartList.reduce((sum, { price }) => sum + +price, 0)}
                            </FullPrice>
                        </FullPriceWrap>
                        <Button bg="gradient" position="2rem 0 2rem auto" onClick={postOrder}>
                            Buy now
                        </Button>
                    </>
                )}

                {order.length && <TitleOrder>Your orders:</TitleOrder>}
                {order.length &&
                    order.map((item) => (
                        <Product key={item.id}>
                            <Img src={item.imageUrl} />
                            <Link to={`jewelry/${item.id}`}>
                                <Title>{item.title}</Title>
                            </Link>
                            <Price>${item.price}</Price>
                        </Product>
                    ))}
            </WrapperInner>
        </Wrapper>
    );
};

const TitleOrder = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    padding: 2rem 0 0;
    color: var(--black);
    display: block;
`;

const Wrapper = styled.section`
    padding: 2rem 0;
    background: var(--white);

    @media screen and (min-width: 768px) {
        padding: 3rem 0;
    }
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const Product = styled.div`
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Img = styled.img`
    width: 70px;
    margin-right: 0.5rem;

    @media screen and (min-width: 768px) {
        width: 100px;
    }
`;

const Title = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    padding: 0 0.5rem 0 0;
    color: var(--black);
`;
const Price = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    color: var(--grey);
    text-transform: uppercase;
    color: var(--black);
    margin-left: 1rem;
`;

const Empty = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    padding: 0 0.5rem 0 0;
    margin: 0 auto 0 0;
    color: var(--black);
`;

const IconTrash = styled.i`
    color: var(--black);
    font-size: 1.5rem;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:hover {
        transition: color 0.3s linear;
        color: red;
    }
`;

const FullPriceWrap = styled.div`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    color: var(--black);
    display: flex;
    justify-content: end;
    padding: 1rem 0 0 0;
`;

const FullPrice = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    text-transform: capitalize;
    margin: 0 0 0 1rem;
    color: var(--black);
`;
