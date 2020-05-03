import styled from 'styled-components';
import searchIcon from '../../images/searchIcon.svg';

const Input = styled.input`
    width: 285px;
    margin: 30px auto;
    height: 39px;
    border: 1px solid #707070;
    background-color: #ffffff;
    color: #a6a6a6;
    padding-left: 10px;
    background: url(${searchIcon}) no-repeat scroll 90% 50%;

    ::placeholder {
        color: #a6a6a6;
        font-family: 'SharpSansNo1-Medium';
        font-size: 10px;
        font-weight: 600;
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Input,
};
