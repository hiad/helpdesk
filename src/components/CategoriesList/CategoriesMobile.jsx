import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import {
    Ul,
    IconTitle,
    HeaderMobile as Header,
    TitleMobile as Title,
    Li,
} from './StyledComponents';


const CategoriesMobile = ({
    className,
    categories: initialCategories,
    setCategory,
    isProductFAQ,
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
        if (isProductFAQ) {
            const categoryProduct = initialCategories.filter(({ node }) => node.title === 'Product FAQ');
            setCategory(categoryProduct[0]);
            if (categoryProduct[0].title === 'Product FQA') {
                setCategory(categoryProduct[0]);
                navigate('/productFAQ');
            }
            setCategoryInfo([categoryProduct[0]]);
        } else {
            setCategoryInfo([cat[0]]);
            setCategory(cat[0]);
        }
    }, []);

    return (
        <Ul className={className}>
            {categoryInfo && categoryInfo.map(({ node }, idx) => (
                <Li>
                    <Header>
                        <IconTitle src={node.icon.file.url} />
                        <Title
                            onClick={() => {
                                setState(idx);
                                setCategory({ node });
                                navigate(
                                    '/question',
                                    { state: { title: node.title } },
                                );
                            }}
                        >
                            {node.title}
                        </Title>
                    </Header>
                </Li>
            ))}
        </Ul>
    );
};

CategoriesMobile.defaultProps = {
    setCategory: () => { },
    isProductFAQ: false,
};

export default CategoriesMobile;
