import React from 'react';
import {
    Button,
    H2,
    Container,
} from './StyledComponents';
import chat from '../../images/chat.png';

const Chat = ({
    className,
}) => (
    <Container className={className}>
        <H2>Chat with us</H2>
        <Button src={chat} />
    </Container>
);

export default Chat;
