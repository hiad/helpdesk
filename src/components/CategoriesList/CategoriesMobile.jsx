import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import {
    Container,
    IconTitle,
    HeaderMobile as Header,
    TitleMobile as Title,
    Inner,
} from './StyledComponents';


const CategoriesMobile = ({
    className,
    categories: initialCategories,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [categoryInfo, setCategoryInfo] = useState([]);


    const setState = (idx) => {
        if (isOpen) {
            const info = initialCategories.filter(({ node }) => !node.product)[idx];
            setCategoryInfo([info]);
        } else {
            const all = initialCategories.filter(({ node }) => !node.product);
            setCategoryInfo(all);
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const cat = initialCategories.filter(({ node }) => !node.product);
        setCategoryInfo([cat[0]]);
    }, []);

    return (
        <Container className={className}>
            {categoryInfo && categoryInfo.map(({ node }, idx) => (
                <Inner onClick={
                    () => {
                        setState(idx);
                    }
                }
                >
                    <Header>
                        <IconTitle src={node.icon.file.url} />
                        <Title
                            onClick={(event) => {
                                navigate(
                                    '/question',
                                    { state: { title: node.title } },
                                );
                                event.stopPropagation();
                            }}
                        >
                            {node.title}
                        </Title>
                    </Header>
                </Inner>
            ))}
        </Container>
    );
};

export default CategoriesMobile;
