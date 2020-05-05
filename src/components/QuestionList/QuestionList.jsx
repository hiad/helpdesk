import React, { useState } from 'react';
import {
    Container,
    QuestionWrapper,
    QuestionTitle,
    LinkMenu,
    ImageIcon,
    Banner,
    AnswerContainer,
} from './StyledComponents';
import IconArrow from '../../images/arrowIcon.svg';


const QuestionList = ({
    className,
    questions = [],
    banner,
}) => {
    const [open, setOpen] = useState([]);

    const handleClick = (id) => {
        if (open.includes(id)) {
            const newArray = open.filter((item) => item !== id);
            setOpen(newArray);
        } else {
            setOpen([...open, id]);
        }
    };
    return (
        <Container className={className}>
            <QuestionWrapper>
                {banner && <Banner src={banner} alt="banner" />}
                {questions && questions.map(
                    ({ question, answer }) => (
                        <>
                            <QuestionTitle
                                onClick={() => handleClick(question.id)}
                                key={question.id}
                            >
                                <LinkMenu>{question.question}</LinkMenu>
                                <ImageIcon src={IconArrow} alt="arrow" />
                            </QuestionTitle>
                            {
                                open.includes(question.id) && (
                                    <AnswerContainer>
                                        { answer && answer.answer}
                                    </AnswerContainer>
                                )
                            }
                        </>
                    ),
                )}
            </QuestionWrapper>
        </Container>
    );
};

export default QuestionList;
