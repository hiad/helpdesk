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
    width: 192px;
    text-align: center;
    color: #ffffff;
    background-color: #303030;
    padding: 20px 0;
`;

const P = styled.p`
    flex: 1;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
`;


const TopMenu = ({ className }) => (
    <Container>
        <Wrapper className={className}>
            <P>FREE SHIPPING ON ALL U.S. ORDERS OVER $60</P>
            <Rectangle>BUY A GIFT CARD</Rectangle>
        </Wrapper>
    </Container>
);

export default TopMenu;
