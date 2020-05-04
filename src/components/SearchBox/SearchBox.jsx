import React from 'react';
import {
    Input,
    Container,
    H2,
} from './StyledComponents';


const Search = ({
    className,
}) => (
    <Input placeholder="Search a Question" className={className} />
);


const SearchContainer = ({
    className,
}) => (
    <Container className={className}>
        <H2>Search</H2>
        <Input placeholder="Search a Question" className={className} />
    </Container>
);

export {
    SearchContainer,
};
export default Search;
