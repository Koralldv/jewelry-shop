import React from 'react';
import styled from 'styled-components';

export const Panel = ({ sortIndex, setSortIndex, sortOptions, productsLenght }) => {
    const handleChange = (e) => {
        setSortIndex(+e.target.value);
    };
    return (
        <Wrapper>
            <PageCounter>Showing {productsLenght} results</PageCounter>

            <Select value={sortIndex} onChange={(e) => handleChange(e)}>
                <Option disabled>Sort by</Option>
                {sortOptions &&
                    sortOptions.map((item, i) => (
                        <Option key={`${item.type}`} value={i}>
                            {item.key}
                        </Option>
                    ))}
            </Select>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`;

const PageCounter = styled.div`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    display: block;
    color: var(--grey);
`;

const Select = styled.select`
    background-color: #fafafa;
    border: none;
    color: var(--grey);
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    cursor: pointer;
`;

const Option = styled.option`
    background-color: #fafafa;
`;
