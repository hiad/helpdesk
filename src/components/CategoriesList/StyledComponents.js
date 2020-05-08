import styled from 'styled-components';
import { Link } from 'gatsby';


const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    padding: 0 16px 0 30px;
    display: flex;
    flex-flow: column;
    height: auto;
    background: white;
    @media (min-width: 767px) {
        max-width: 407px;
    }
`;

const Header = styled(Link)`
    max-width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    &:last-child {
        border-bottom: none;
    }
`;

const IconTitle = styled.img`
    width: 34px;
    height: 34px;
    margin-right: 16px;
`;

const Title = styled.h2`
    color: #000;
    font-size: 22px;
    font-weight: 600;
    flex: 1;
    font-family: 'sharp_sans';
`;

export {
    Container,
    Header,
    IconTitle,
    Title,
};
