import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as BaseLink } from 'gatsby';
import arrow from '../../images/arrow.png';

const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    border: 3px solid #000000;
    background-color: #ffffff;
    padding: 0  30px 20px;
    display: flex;
    flex-flow: column;
    height: auto;
    @media (min-width: 769px) {
        height: 254px;
    }
`;


const QuestionWrapper = styled.div`
    flex: 1;
`;

const Wrapper = styled.div`
    display: ${({ isSelectable }) => (isSelectable ? 'flex' : 'none')};
    max-width: 100%;
    flex-direction: column;
    height: 120px;
    @media (min-width: 769px) {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

const Header = styled.div`
    max-width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Icon = styled.img`
    height: 11px;
    padding: 20px;
    transform: ${({ isSelectable }) => (!isSelectable ? 'rotate(180deg)' : 'rotate(0deg)')};
    align-self: center;
`;

const Title = styled.h2`
    color: #000;
    font-size: 22px;
    font-weight: 600;
    flex: 1;
`;

const LinkMenu = styled(BaseLink)`
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
    color: #000;
    display: block;
    text-decoration: none;
`;


const LinkAll = styled(BaseLink)`
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: #808080;
    text-decoration: none;
    align-items: flex-end;
    justify-content: flex-end;
`;

const RectangleMenu = ({ className, title, questions }) => {
    const [isSelectable, setSelectable] = useState(false);
    return (
        <Container className={className}>
            <Header>
                <Icon />
                <Title onClick={() => {
                    setSelectable(!isSelectable);
                }}
                >
                    {title}

                </Title>
                <Icon display="mobile" isSelectable={isSelectable} src={arrow} />
            </Header>
            <Wrapper isSelectable={isSelectable}>
                <QuestionWrapper>
                    {questions.map(
                        ({ question }) => (<LinkMenu>{question.question}</LinkMenu>),
                    )}
                </QuestionWrapper>
                <LinkAll>View All</LinkAll>
            </Wrapper>
        </Container>
    );
};

export default RectangleMenu;
