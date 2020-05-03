import React from 'react';
import {
    Container,
    QuestionWrapper,
    QuestionTitle,
    LinkMenu,
    ImageIcon,
} from './StyledComponents';
import IconArrow from '../../images/arrowIcon.svg';


const QuestionList = ({
    className,
    questions,
}) => (
    <Container className={className}>
        <QuestionWrapper>
            {questions.map(
                ({ question }) => (
                    <QuestionTitle key={question.id}>
                        <LinkMenu>{question.question}</LinkMenu>
                        <ImageIcon src={IconArrow} alt="arrow" />
                    </QuestionTitle>
                ),
            )}
        </QuestionWrapper>
    </Container>
);

export default QuestionList;
