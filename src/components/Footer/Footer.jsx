
import React, { useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Container = styled.div`
    background: black;
    padding-bottom: 50px;
    padding-top: 50px;
`;

const Image = styled.img`
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
`;


const InnerContainer = styled.div`
    background: black;
    margin: 0 auto;
    width: 100%;
     @media (min-width: 640px){
        max-width: 640px;
    }
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 1024px){
        max-width: 1024px;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1450px){
        max-width: 1400px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: start;
        margin-bottom: 3rem;
    }
`;

const UL = styled.ul`
    color: white;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const LI = styled.li`
    color: white;
    text-decoration: none;
    display: block;
    /* display: none; */
    @media (min-width: 1024px) {
        /* display: block; */
    }
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.48px;
    line-height: 29px;
    text-transform: uppercase;
    font-family: 'sharp_sans';
`;

const CopyRight = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0 auto;
    letter-spacing: 0.1em;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.25rem;
`;

const FollowText = styled.p`
    font-family: 'sharp_sans';
    font-size: 15px;
    color: white;
    text-align:center;
    margin: 0;
`;

const LogoContainer = styled.div`
    text-align: center;
    width: 100%;
    @media (min-width: 1024px) {
        width: 33%;
    }
`;

const H4 = styled.h4`
    margin: 2rem 0;
    
    text-decoration: underline;
    color: white;
    text-transform: uppercase;
    @media (min-width: 1024px) {
        margin-bottom: 0.5rem;
    }
`;

const ContainerMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 1024px) {
        text-align: left;
        flex-direction: row;
        align-items: flex-start;
        width: 66.7%;
    }
`;

const InnerMenu = styled.div`
    width: 100%;

    @media (min-width: 1024px) {
        width: calc( 100% / 4);
    }
`;

const Footer = () => {
    const breakpoints = useBreakpoint();
    const [isActiveShop, setisActiveShop] = useState(false);
    const [isActiveHelp, setisActiveHelp] = useState(false);
    const [isActiveBrand, setisActiveBrand] = useState(false);

    const handleClick = (term) => {
        switch (term) {
        case 'shop':
            setisActiveShop(!isActiveShop);
            break;
        case 'help':
            setisActiveHelp(!isActiveHelp);
            break;
        case 'brand':
            setisActiveBrand(!isActiveBrand);
            break;
        default: break;
        }
    };

    return (
        <Container>
            <InnerContainer>
                <Wrapper>
                    <ContainerMenu>
                        <InnerMenu>
                            <H4 onClick={() => handleClick('shop')}>Shop</H4>
                            {(!breakpoints.md || isActiveShop) && (
                                <UL className="uppercase ">
                                    <LI>
                                        <A href="/collections">
                                            Collections
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/wine">
                                            Wine
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/beer">
                                            Beer
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/spirits">
                                            Spirits
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pAges/custom-gift-set">
                                            Gift Sets
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/products/brumate-e-gift-card">
                                            GIFT CARDS
                                        </A>
                                    </LI>
                                </UL>
                            )}
                        </InnerMenu>

                        <InnerMenu>
                            <H4 onClick={() => handleClick('help')}>HELP</H4>
                            {(!breakpoints.md || isActiveHelp) && (
                                <UL>
                                    <LI>
                                        <A href="/pages/faq">
                                            FAQ
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/apps/store-locator/">
                                            STORE LOCATOR
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/media-inquiries">
                                            MEDIA INQUIRIES
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/contact">
                                            Contact Us
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="https://returns.brumate.com/">
                                            RETURNS
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/miLItary-discount">
                                            MILITARY DISCOUNT
                                        </A>
                                    </LI>

                                </UL>
                            )}
                        </InnerMenu>
                        <InnerMenu>
                            <H4 onClick={() => handleClick('brand')}>BRAND</H4>
                            {(!breakpoints.md || isActiveBrand) && (
                                <UL>
                                    <LI>
                                        <A href="/pages/our-story">
                                            About Us
                                        </A>
                                    </LI>
                                    <LI>
                                        <A href="/pages/brumate-vip">
                                            VIP
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/become-a-dealer">
                                            become a dealer
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/blogs/articles">
                                            Blog
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/warranty">
                                            Warranty
                                        </A>
                                    </LI>

                                </UL>
                            )}
                        </InnerMenu>
                    </ContainerMenu>
                    <LogoContainer>
                        <Image
                            src="https://cdn.shopify.com/s/files/1/1114/2308/files/footer_logo_13aa35e3-8cfb-4449-8410-efef14fd967a_500x.png?v=1570360817"
                            alt="info"
                        />
                        <FollowText>
                            Keep the buzz going with our newsletter to get the
                            inside scoop on new products, discounts, drink recipes and more.
                        </FollowText>
                    </LogoContainer>
                </Wrapper>

                <CopyRight>
                    Copyright © 2020 BRUMATE LLC
                </CopyRight>
            </InnerContainer>
        </Container>
    );
};

export default Footer;
