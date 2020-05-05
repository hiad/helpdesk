
import React from 'react';
import styled from 'styled-components';

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
    max-width: 1024px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
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
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.48px;
    line-height: 29px;
    text-transform: uppercase;
    font-family: 'SharpSansDispNo2Book';
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
`;

const FollowText = styled.p`
    font-family: 'SharpSansNo1-Medium';
    font-size: 15px;
    color: white;
    text-align:center;
    margin: 0;
`;

const LogoContainer = styled.div`
    text-align: center;
`;

const H4 = styled.h4`
    margin: 0px;
    margin-bottom: 0.5rem;
    text-decoration: underline;
    color: white;
    text-transform: uppercase;
`;

const Footer = () => (
    <Container>
        <InnerContainer>
            <Wrapper>
                <div>
                    <H4>Shop</H4>
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
                </div>

                <div>
                    <H4>HELP</H4>
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
                </div>
                <div>
                    <H4>Brand</H4>
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
                </div>
                <LogoContainer>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/1114/2308/files/footer_logo_13aa35e3-8cfb-4449-8410-efef14fd967a_500x.png?v=1570360817"
                        alt="info"
                    />
                    <FollowText>
                        Keep the buzz going with our newsletter to get the inside scoop on
                    </FollowText>
                    <FollowText>
                        new products, discounts, drink recipes and more.
                    </FollowText>
                </LogoContainer>
            </Wrapper>

            <CopyRight>
                Copyright © 2020 BRUMATE LLC
            </CopyRight>
        </InnerContainer>
    </Container>
);

export default Footer;
