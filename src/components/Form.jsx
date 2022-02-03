import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { IoWarning } from 'react-icons/io5';
import Girl from '../img/girl_5.png';

export const Form = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <Wrapper>
            <WrapperInner>
                <Img src={Girl} />
                <Info>
                    <Title>Call now</Title>
                    <Telephone>+23 345 454 565</Telephone>
                    <Adress>Igbalangao, Bugasong, Antique, Philippines 5704 </Adress>
                    <Text>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt.
                    </Text>
                </Info>
                <ContactForm>
                    <PreFormTitle>get in touch</PreFormTitle>
                    <FormTitle>fill in the form</FormTitle>
                    <Forma onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="Name"
                            {...register('name', { required: 'Required field' })}
                        />
                        {errors?.name && (
                            <Error>
                                <IoWarning />
                                <ErrorMess>{errors?.name.message || 'Error!'}</ErrorMess>
                            </Error>
                        )}
                        <Input
                            placeholder="Email"
                            {...register('email', {
                                required: 'Required field',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Invalid e-mail',
                                },
                            })}
                        />
                        {errors?.email && (
                            <Error>
                                <IoWarning />
                                <ErrorMess>{errors?.email.message || 'Error!'}</ErrorMess>
                            </Error>
                        )}
                        <Input placeholder="Subject" {...register('subject')} />
                        {errors?.subject && (
                            <Error>
                                <IoWarning />
                                <ErrorMess>{errors?.subject.message || 'Error!'}</ErrorMess>
                            </Error>
                        )}
                        <Textarea
                            placeholder="Message"
                            {...register('text', {
                                minLength: {
                                    value: 15,
                                    message: 'Minimum 15 characters',
                                },
                            })}
                            rows="5"
                        />
                        {errors?.text && (
                            <Error>
                                <IoWarning />
                                <ErrorMess>{errors?.text.message || 'Error!'}</ErrorMess>
                            </Error>
                        )}
                        <Button type="submit" disabled={!isValid} value="SUBMITE" />
                    </Forma>
                </ContactForm>
            </WrapperInner>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: var(--white);
    position: relative;
    overflow: hidden;
`;

const WrapperInner = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 5rem 0;
    }
`;

const Img = styled.img`
    display: none;
    position: absolute;
    right: 50%;
    z-index: 0;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

const Forma = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
`;

const Input = styled.input`
    background-color: #f6f6f6;
    padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    border: none;
    font-size: 1rem;
`;

const Textarea = styled.textarea`
    background-color: #f6f6f6;
    padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    border: none;
    resize: none;
    font-size: 1rem;
`;

const Button = styled.input`
    background: linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgb(117, 117, 117) 100%);
    padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    max-width: 320px;
    border: none;
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    color: var(--white);
    border-radius: 50px;
    cursor: pointer;
`;

const Info = styled.div`
    background-color: transparent;
    z-index: 1;

    @media screen and (min-width: 768px) {
        width: 50%;
        padding: 0 2rem;
    }

    @media screen and (min-width: 1200px) {
        padding: 0 80px 0 0;
    }
`;

const ContactForm = styled.form`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 50%;
        padding: 0 2rem;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 80px;
    }
`;

const Title = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    color: var(--black);
`;

const Telephone = styled.h5`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0 0;
    color: var(--black);
`;

const Adress = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--grey);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const Text = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    line-height: 1.5rem;
    color: var(--black);
    display: block;
    padding: 1rem 0 1.5rem 0;
`;

const PreFormTitle = styled.span`
    font-family: var(--familyDomine);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    text-transform: uppercase;
    display: block;
    text-align: center;
    color: var(--grey);
`;

const FormTitle = styled.h4`
    font-family: var(--familyDomine);
    font-weight: var(--fw-normal);
    font-size: var(--fz-xl);
    text-transform: capitalize;
    display: block;
    text-align: center;
    color: var(--black);
`;

const Error = styled.span`
    color: var(--active-color);
    margin: 0.5rem auto 0 0;
    display: flex;
`;

const ErrorMess = styled.span`
    font-family: var(--familyLato);
    font-weight: var(--fw-normal);
    font-size: var(--fz-sm);
    margin: 0 0 0 0.2rem;
    display: block;
`;
