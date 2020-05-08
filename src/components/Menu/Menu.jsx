import React from 'react';
import styled from 'styled-components';
import logo from '../../images/menulogo.svg';
import search from '../../images/search.png';
import shop from '../../images/shop.png';
import user from '../../images/user.svg';
import menu from '../../images/menu.svg';


const Container = styled.nav`
    max-width: 100%;
    margin: 0 auto;
`;


const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 0.5rem;
    height: 57.19px;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    @media (min-width: 769px) {
        height: 75px;
        max-width: 768px;
    }
    @media (min-width: 1024px){
        max-width: 1024px;
    }
    @media (min-width: 1140px){
        max-width: 100%;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1450px){
        max-width: 1400px;
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
        padding-left: 45px;
    }
`;

const IconsWrapper = styled.div`
    display: none;
    @media (min-width: 1024px) {
        margin-left: 1rem;
        display: flex;
    }
`;

const Icon = styled.img`
    max-width: 25px;
    height: 25px;
    display: ${({ displayInfo }) => (displayInfo === 'mobile' ? 'flex' : 'none')};
    margin-right: 1.5rem;
    @media (min-width: 1024px) {
        display: ${({ displayInfo }) => (displayInfo !== 'mobile' ? 'flex' : 'none')};
    }
`;

const Li = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type:none;
    padding-right: 3rem;
    
    @media (min-width: 1024px){
        padding-right: 0.5rem;
    }

     @media (min-width: 1200px){
        padding-right: 3rem;
    }
`;

const Image = styled.img`
    margin: 0 auto;
    max-width: 130px;
    @media (min-width: 375px) {
        max-width: auto;
    }
     @media (min-width: 1024px) {
        max-width: 160px;
    }
`;

const A = styled.a`
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 75px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    font-family: 'sharp_sans';
`;

const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 34px !important;
    padding: 0 15px;
    width: 120px;
    background-image: url(//cdn.shopify.com/s/files/1/1114/2308/t/118/assets/icon-arrow-down.svg?v=1768537…);
    background-repeat: no-repeat;
    background-position: 96% 50%;
    background-size: 2rem;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e1e1e1;
    border-radius: 30px;
    font-size: 12px;
`;

const Currency = styled.div`
    margin-right: 2rem;
`;


const Menu = ({ className }) => (
    <Container>
        <Nav className={className}>
            <Icon displayInfo="mobile" src={menu} />
            <Icon displayInfo="mobile" src={user} />
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
            <Icon displayInfo="mobile" src={search} />
            <Icon displayInfo="mobile" src={shop} />
            <IconsWrapper>
                <Currency className="currency-picker mb-8 lg:mb-0 text-center lg:text-left">
                    <Select className="w-full lg:w-auto" name="currency">
                        <option>AUD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>NZD</option>
                        <option selected="true">USD</option>
                    </Select>
                </Currency>
                <Icon displayInfo="desktop" src={search} />
                <Icon displayInfo="desktop" src={shop} />
                <Icon displayInfo="desktop" src={user} />
            </IconsWrapper>
        </Nav>
    </Container>
);

export default Menu;
