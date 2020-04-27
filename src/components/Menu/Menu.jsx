import React from 'react';
import styled from 'styled-components';
import logo from '../../images/Logo.png';
import search from '../../images/search.png';
import shop from '../../images/shop.png';
import user from '../../images/user.png';


const Container = styled.nav`
    max-width: 100%;
    margin: 0 auto;
`;


const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    height: 82px;
    padding: 0 25px;
    @media (min-width: 769px) {
        max-height: 75px;
    }
`;

const Ul = styled.ul`
    display: none;
    @media (min-width: 1024px) {
        flex: 1;
        display: flex;
        flex-direction: row;
        list-style-type:none;
        padding:0px;
        margin:0px;
    }
`;

const IconsWrapper = styled.div`
    display: none;
    @media (min-width: 769px) {
        margin-left: 1rem;
    }
`;

const Icon = styled.img`
    display: ${({ display }) => (display === 'mobile' ? 'flex' : 'none')};
    margin-right: 13px;
    @media (min-width: 769px) {
        margin-left: 20px;
    }
`;

const Li = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type:none;
    padding: 40px 15px;
    
`;

const Image = styled.img`
    margin: 0 auto;
    max-width: 130px;
    @media (min-width: 375px) {
        max-width: auto;
    }
     @media (min-width: 769px) {
        max-width: 100%;
    }
    @media (min-width: 1024px) {
        max-width: 100%;
        margin-right: 50px;
    }
`;

const A = styled.a`
    color: #000000;
    font-family: "Open Sans";
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
`;

const Menu = ({ className }) => (
    <Container>
        <Nav className={className}>
            <Icon display="mobile" src={user} />
            <Image src={logo} />
            <Ul>
                <Li>
                    <A href="#">WINE</A>
                </Li>
                <Li>
                    <A href="#">BEER</A>
                </Li>
                <Li>
                    <A href="#">SPIRITS</A>
                </Li>
                <Li>
                    <A href="#">ACCESORIES</A>
                </Li>
                <Li>
                    <A href="#">CREATE A GIFT SET</A>
                </Li>
                <Li>
                    <A href="#">SHOP BY COLOR</A>
                </Li>
            </Ul>
            <Icon display="mobile" src={search} />
            <Icon display="mobile" src={shop} />
            <IconsWrapper>
                <Icon display="desktop" src={search} />
                <Icon display="desktop" src={shop} />
                <Icon display="desktop" src={user} />
            </IconsWrapper>
        </Nav>
    </Container>
);

export default Menu;
