import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

export const Footer = ({ socialList }) => {
    return (
        <footer>
            <Wrapper bg="var(--white)">
                <ContactList>
                    <ContactItem>
                        <Title>Phone</Title>
                        <Contact>09-8765-4321</Contact>
                    </ContactItem>
                    <ContactItem>
                        <Title>Email</Title>
                        <Contact>info@jeweller.com</Contact>
                    </ContactItem>
                    <ContactItem>
                        <Title>Location</Title>
                        <Contact>Iloilo City, PH 5704</Contact>
                    </ContactItem>
                </ContactList>
            </Wrapper>
            <Wrapper>
                <About>
                    <Logo src={logo} />
                    <Text>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </Text>
                </About>
            </Wrapper>
            <Wrapper border={true}>
                <Info>
                    <Policy>
                        Jeweller © 2017 All Rights Reserved Terms of Use and Privacy Policy
                    </Policy>
                    <SocialList>
                        {socialList.map((item) => (
                            <a href="">
                                <SocialItem>
                                    <Icon>{React.createElement(item.icon)}</Icon>
                                </SocialItem>
                            </a>
                        ))}
                    </SocialList>
                </Info>
            </Wrapper>
        </footer>
    );
};

const Wrapper = styled.div`
    width: 100%;

    border-bottom: ${(props) => (props.border ? props.border : '1px solid var(--grey)')};
    background-color: ${(props) => (props.bg ? props.bg : 'var(--black)')};
`;

const ContactList = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0 0 0;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
const ContactItem = styled.div``;
const Title = styled.span`
    color: var(--black);
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    letter-spacing: var(--letter);
    text-transform: uppercase;
    text-align: center;
    display: block;
    padding: 1rem 0;
`;
const Contact = styled.span`
    color: var(--black);
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-align: center;
    text-transform: capitalize;
    display: block;
    padding: 0 0 1.5rem 0;
`;
const About = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0;
`;
const Logo = styled.img``;
const Text = styled.p`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
    margin: 0 auto;
    width: 70%;
    text-align: center;
`;
const Info = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 3rem 1rem;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 1rem;
    }
`;
const Policy = styled.p`
    font-family: var(--familyLato);
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;
const SocialList = styled.ul`
    display: flex;
`;
const SocialItem = styled.li`
    color: #fff;
    padding: 6px;
    cursor: pointer;
`;
const Icon = styled.i`
    font-size: 16px;
`;
