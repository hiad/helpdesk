import React from 'react';
import {
    Container,
    Header,
    IconTitle,
    Title,
} from './StyledComponents';


const CategoriesList = ({
    className,
    categories,
}) => (
    <Container className={className}>
        {categories.map(({ node }) => (
            <Header to="/question" state={{ title: node.title }}>
                <IconTitle src={node.icon.file.url} />
                <Title>
                    {node.title}
                </Title>
            </Header>
        ))}
    </Container>
);

export default CategoriesList;
