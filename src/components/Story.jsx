import React from 'react';
import styled, { css } from 'styled-components';
import girlBig from '../img/girl_1.png';
import girlSmall from '../img/girl_2.png';

export const Story = () => {
    return (
        <Wrapper>
            <WrapperInner>
                <TextBlock>
                    <Title>The Story Behind Our Success.</Title>
                    <Text>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt.
                    </Text>
                </TextBlock>
                <AboutBlock>
                    <AboutText position="first">
                        <AboutTitle>We Have Values1</AboutTitle>
                        <AboutParagraph>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga.
                        </AboutParagraph>
                    </AboutText>
                    <AboutText position="second">
                        <AboutTitle>Our Mission.2</AboutTitle>
                        <AboutParagraph>
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                            minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                            est, omnis dolor repellendus.
                        </AboutParagraph>
                    </AboutText>
                    <Img src={girlBig} size="big" />
                    <Img src={girlSmall} size="small" />
                    <AboutText position="thrid">
                        <AboutTitle>Our Vision.3</AboutTitle>
                        <AboutParagraph>
                            Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                        </AboutParagraph>
                    </AboutText>
                </AboutBlock>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 3rem 2rem 4rem;
    background-color: var(--white);
    border-bottom: 1px solid rgb(215, 215, 215);
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-diraction: column;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (min-width: 1024px) {
        flex-diraction: row;
        flex-wrap: nowrap;
    }
`;

const TextBlock = styled.div`
    @media screen and (min-width: 1024px) {
        padding-right: 2rem;
    }
`;

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 1rem 0 1.5rem 0;
    color: var(--black);
`;

const Text = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--black);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const AboutBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 320px);
        grid-template-rows: repeat(3, 230px);
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
    }

    @media screen and (min-width: 1024px) {
        padding-left: 2rem;
    }
`;

const first = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
`;

const second = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;

    @media screen and (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
    }
`;

const thrid = css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;

    @media screen and (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 3;
    }
`;

const AboutText = styled.div`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--black);
    display: block;
    padding: 1rem 0 1.5rem 0;

    ${(props) => props.position && props.position === 'first' && first}
    ${(props) => props.position && props.position === 'second' && second}
    ${(props) => props.position && props.position === 'thrid' && thrid}
`;

const AboutTitle = styled.h6`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    text-transform: capitalize;
    display: block;
    padding: 0;
    color: var(--black);
`;

const AboutParagraph = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-bold);
    font-size: var(--fz-sm);
    line-height: 1.5rem;
    color: var(--black);
    display: block;
    padding: 0;
`;

const Img = styled.img`
    width: 100%;
    object-fit: cover;
    align-items: start;

    @media screen and (min-width: 768px) {
        max-height: ${(props) => (props.size && props.size === 'big' ? '452px' : '210px')};
        grid-column-start: ${(props) => (props.size && props.size === 'big' ? '2' : '1')};
        grid-column-end: ${(props) => (props.size && props.size === 'big' ? '2' : '1')};
        grid-row-start: ${(props) => (props.size && props.size === 'big' ? '1' : '3')};
        grid-row-end: ${(props) => (props.size && props.size === 'big' ? '2' : '3')};
    }
`;
