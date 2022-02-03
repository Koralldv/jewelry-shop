import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

export const CategoryFilter = ({ category, activeCatalogy, setActiveCatalogy }) => {
    const [isActive, setIsActive] = useState({ type: false, brooch: false });

    const handleActive = (type) => {
        setIsActive({ ...isActive, [type]: !isActive[type] });
    };

    const handleCatalogy = (title, category) => {
        setActiveCatalogy({ ...activeCatalogy, [title]: category });
    };

    return (
        <>
            {category.map((item) => (
                <Wrapper key={item.title}>
                    <Title onClick={() => handleActive(item.title)}>
                        Choose {item.title}
                        <Icon active={isActive[item.title]}>
                            <BsChevronRight />
                        </Icon>
                    </Title>
                    <List>
                        {isActive[item.title] &&
                            item.list.map((list, index) => (
                                <ListItems
                                    onClick={() => handleCatalogy(item.title, list)}
                                    active={activeCatalogy[item.title] === list}
                                    key={`${item.name}_${index}`}>
                                    {list}
                                </ListItems>
                            ))}
                    </List>
                    {activeCatalogy[item.title] && (
                        <Reset
                            onClick={() =>
                                setActiveCatalogy({ ...activeCatalogy, [item.title]: '' })
                            }>
                            Reset
                        </Reset>
                    )}
                </Wrapper>
            ))}
        </>
    );
};

const Wrapper = styled.section`
    padding: 1rem;
`;

const Title = styled.span`
    color: var(--grey);
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    cursor: pointer;
    text-transform: capitalize;
    display: flex;
    align-items: center;
`;

const Reset = styled.button`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-sm);
    cursor: pointer;
    text-transform: capitalize;
    background-color: red;
    border: none;
    padding: 0.5rem;
    margin: 0.5rem 0;
    color: var(--white);
`;

const Icon = styled.i`
    padding: ${(props) => (props.active ? '0 0 1rem 0' : '0 0 0 1rem')};
    transform: ${(props) => props.active && 'rotate(90deg)'};
`;

const List = styled.ul``;

const ListItems = styled.li`
    color: var(--grey);
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.5rem 0;

    &:hover {
        color: var(--gold);
    }

    color: ${(props) => props.active && 'var(--gold)'};
`;
