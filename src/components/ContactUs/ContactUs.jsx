import React from 'react';
import facebookIcon from '../../images/contact-ico-fb.svg';
import instagramIcon from '../../images/contact-ico-instagram.svg';
import messengerIcon from '../../images/contact-ico-messenger.svg';
import contactIcon from '../../images/contact-ico-mail.svg';
import locationIcon from '../../images/location-ico.svg';
import {
    Container,
    InformationField,
    ImageIcon,
    P,
} from './StyledComponents';


const infoContact = [
    {
        icon: locationIcon,
        text: '1234 Street, City United States  Postal Box 45677',
    },
    {
        icon: contactIcon,
        text: 'support@something.com',
    },
    {
        icon: messengerIcon,
        text: 'Chat with us',
    },
    {
        icon: facebookIcon,
        text: 'facebook.com/test',
    },
    {
        icon: instagramIcon,
        text: 'instagram.com/test',
    },
];

const ContactUs = ({
    className,
}) => (
    <Container className={className}>
        <>
            {infoContact.map(
                ({ icon, text }) => (
                    <InformationField>
                        <ImageIcon src={icon} alt="arrow" />
                        <P>{text}</P>
                    </InformationField>
                ),
            )}
        </>
    </Container>
);

export default ContactUs;
