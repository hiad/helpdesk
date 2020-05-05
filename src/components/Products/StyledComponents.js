import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 16px 25px;
    min-height: 341px;
    background-color: #ffffff;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 18px;
`;

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    font-family: "SharpSansNo2Bold-Regular";
    color: ${({ isActive }) => (isActive ? '#000000' : '#bcbcbc')};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;

const ProductName = styled(Link)`
    font-family: "SharpSansNo2Bold-Regular";
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
`;

const Icon = styled.img`
    max-width: 65px;
    margin-right: 25px;
`;

const Product = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

export {
    Product,
    ProductName,
    ProductsWrapper,
    Header,
    Container,
    Title,
    Icon,
};
