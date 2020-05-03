import React from 'react';
import styled from 'styled-components';


const Container = styled.nav`
    max-width: 100%;
    margin: 0 auto;
    background-color: #000;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
`;

const Rectangle = styled.div`
    display: none;
    width: 192px;
    text-align: center;
    color: #ffffff;
    background-color: #303030;
    padding: 20px 0;
    font-size: 11.25px;
    letter-spacing: 1.125px;
    font-family: 'SharpSansNo1-Medium';
    @media (min-width: 769px) {
        display: block;
    }
`;

const P = styled.p`
    flex: 1;
    text-align: center;
    color: #ffffff;
    font-size: 11px;
    font-family: 'SharpSansNo1-Medium';
    letter-spacing: 0.8px;
    text-transform: uppercase;
`;


const TopMenu = ({ className }) => (
    <Container>
        <Wrapper className={className}>
            <P>
                FREE SHIPPING
                & RETURNS ON ALL U.S. ORDERS OVER $60. ORDERS SHIP WITHIN 24-48 HOURS.
            </P>
            <Rectangle>BUY A GIFT CARD</Rectangle>
        </Wrapper>
    </Container>
);

export default TopMenu;
