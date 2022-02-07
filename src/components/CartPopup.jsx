import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SINGLE_PRODUCT } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosClose, IoMdTrash } from 'react-icons/io';
import { Button } from './Button';

export const CartPopup = ({ setShowCart }) => {
    const { cartListId } = useSelector((state) => state.cart);
    const [cartList, setCartList] = useState([]);

    const dispatch = useDispatch();
    const deleteLikes = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: id });
    };

    useEffect(() => {
        let cartMass = [];

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
              })
            : setCartList([]);
    }, [cartListId]);

    return (
        <Wrapper>
            <WrapperInner>
                {cartList.length !== 0 ? (
                    cartList.map((product) => (
                        <Product key={product.id}>
                            <Img src={product.imageUrl} />
                            <Link to={`jewelry/${product.id}`} onClick={() => setShowCart(false)}>
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
            </WrapperInner>
            {cartList.length && (
                <LinkToBuy to="/buy">
                    <Button onClick={() => setShowCart(false)} bg="gradient">
                        Buy now
                    </Button>
                </LinkToBuy>
            )}
            <OffCart onClick={() => setShowCart(false)}>
                <IoIosClose />
            </OffCart>
        </Wrapper>
    );
};

const WrapperInner = styled.div`
    height: auto;
    min-height: 0;
    max-height: 60vh;
    overflow-y: auto;
    padding-right: 1rem;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #f9f9fd;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--grey);
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background-color: #f9f9fd;
    }
`;

const Wrapper = styled.div`
    background-color: var(--white);
    width: 100%;
    padding: 2rem 0.5rem 1rem;
    position: absolute;
    top: 100%;
    right: 0;

    @media screen and (min-width: 768px) {
        right: 1rem;
        width: 320px;
        max-height: calc(100vh - 174px);
    }
`;

const Product = styled.div`
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Img = styled.img`
    width: 50px;
    margin-right: 0.5rem;
`;

const Title = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    text-transform: capitalize;
    padding: 0 0.5rem 0 0;
    margin: 0 auto 0 0;
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

const OffCart = styled.i`
    position: absolute;
    right: 0;
    top: 0;
    color: var(--black);
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
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

const LinkToBuy = styled(Link)`
    display: block;
    width: max-content;
    margin: 1rem 0 0 auto;
`;
