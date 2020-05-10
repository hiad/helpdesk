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
            <>
                {!node.product && (
                    <Header to={(node.title === 'Product FAQ') ? '/productFAQ' : '/question'} state={{ title: node.title }}>
                        {node.icon && <IconTitle src={node.icon.file.url} />}
                        <Title>
                            {node.title}
                        </Title>
                    </Header>
                )}
            </>
        ))}
    </Container>
);

export default CategoriesList;
