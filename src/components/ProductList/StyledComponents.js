import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18px;
`;

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    font-family: 'sharp_sans';
    color:#000000;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    text-align: center;
    line-height: 28px;
`;

const ProductName = styled(Link)`
    font-family: 'sharp_sans';
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
`;

const Icon = styled.img`
    max-width: 65px;
`;

const BannerImage = styled.img`
    max-width: 100%;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 155px;
    height: 147px;
    border: 1px solid #dadada;
    background-color: #ffffff;
    margin-bottom: 28px;
`;

export {
    BannerImage,
    Product,
    ProductName,
    ProductsWrapper,
    Header,
    Container,
    Title,
    Icon,
};
