import React from 'react';
import styled from 'styled-components';
import user from '../../images/Header.png';

const Image = styled.div`
    background-image: url(${(props) => props.url});
    background-size: cover;
    height: 200px;
    width: 100%;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content: center;
    opacity: 1.36;
    background-color: #000;
`;

const Title = styled.h1`
    color: #ffffff;
    font-family: 'SharpSansNo2Bold-Regular';
    font-size: 30px;
    font-weight: 700;
`;

const Banner = ({
    className,
    title,
}) => (
    <Image url={user} className={className}>
        <Title>{title}</Title>
    </Image>
);

export default Banner;
