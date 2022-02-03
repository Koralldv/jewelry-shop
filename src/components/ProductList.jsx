import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCart } from 'react-icons/io';

export const ProductList = ({ products }) => {
    const { cartListId } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleCart = (id) => {
        if (cartListId.includes(id)) dispatch({ type: 'DELETE_PRODUCT', payload: id });
        else dispatch({ type: 'ADD_PRODUCT', payload: id });
    };

    return (
        <Wrapper>
            {products &&
                products.map((item) => (
                    <Product key={item.id}>
                        <Buttons>
                            <Cart
                                active={cartListId.includes(item.id)}
                                onClick={() => handleCart(item.id)}>
                                <IoIosCart />
                            </Cart>
                        </Buttons>
                        <Img src={item.imageUrl} />
                        <ProductLink to={`/jewelry/${item.id}`} key={`${item.id}`}>
                            <Title>{item.title}</Title>
                        </ProductLink>
                        <Price>${item.price}</Price>
                    </Product>
                ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

const ProductLink = styled(Link)``;

const Product = styled.div`
    margin: 0 0 2rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 250px;
    border: 2px solid var(--grey);
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    z-index: 9;
`;

const Cart = styled.i`
    font-size: 25px;
    color: var(--black);
    margin-left: 0.5rem;
    cursor: pointer;

    color: ${(props) => (props.active && props.active === true ? 'var(--gold)' : 'var(--black)')};
`;

const Img = styled.img`
    width: 50%;
    margin: 2rem auto;
`;

const Title = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    text-transform: capitalize;
    display: block;
    color: var(--black);
    padding: 1rem 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Price = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
`;
