import styled from 'styled-components';


const Container = styled.nav`
    width: 100%;
    background-color: white;
    padding-bottom: 20px;
    @media (min-width: 768px) {
        min-width: 407px;
        flex: 1;
    }
    @media (min-width: 1440px) {
        flex: 1;
        margin-right: 65px;
    }
`;

const QuestionWrapper = styled.div`
    width: 100%;
    color: #ffffff;
    padding: 10px 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
`;

const QuestionTitle = styled.div`
    align-items: center;
    margin: 0 30px;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.15);

    &:last-child {
        border-bottom: none;
    }
`;


const LinkMenu = styled.p`
    flex: 1;
    text-align: left;
    color: #000;
    font-size: 15px;
    font-family: 'SharpSansNo1-Medium';
    line-height: 64px;
    margin: 0px;
`;

const ImageIcon = styled.img`
    
`;

export {
    Container,
    QuestionWrapper,
    QuestionTitle,
    LinkMenu,
    ImageIcon,
};
