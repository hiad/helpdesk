import React, { useState, useEffect } from 'react';
import {
    ProductsWrapper,
    Container,
    Header,
    Title,
    Icon,
    Product,
    ProductName,
} from './StyledComponents';


const Products = ({
    className,
    products,
}) => {
    const [isActive, setIsActive] = useState(0);
    const [shownProducts, setShownProducts] = useState([]);
    const [productTypes, setProductTypes] = useState([]);

    const handleOnClick = ({ index, type }) => {
        setIsActive(index);

        const newShown = products.filter(
            ({ type: arrayType }) => (type === arrayType[0]),
        );

        setShownProducts(newShown);
    };

    useEffect(() => {
        const newTypes = products.reduce(
            (acc, product) => (
                Array.isArray(product.type)
                    ? acc.concat(product.type)
                    : acc
            ),
            [],
        );

        const setTypes = new Set(newTypes);
        setProductTypes([...setTypes]);

        const newShown = products.filter(
            ({ type: arrayType }) => (newTypes[0] === arrayType[0]),
        );
        setShownProducts(newShown);
    }, []);

    return (
        <Container className={className}>
            <Header>
                {productTypes.map((type, index) => (
                    <Title
                        isActive={isActive === index}
                        onClick={() => handleOnClick({ index, type })}
                    >
                        {type}
                    </Title>
                ))}
            </Header>
            <ProductsWrapper>
                {shownProducts.map(({ name, banner, questiontype }) => {
                    const questionType = questiontype ? questiontype[0].title : '';
                    return (
                        <Product>
                            {banner && banner.file && (
                                <Icon alt={name} src={banner.file.url} />)}
                            <ProductName to="/question/" state={{ title: questionType }}>
                                {name}
                            </ProductName>
                        </Product>
                    );
                })}
            </ProductsWrapper>
        </Container>
    );
};


export default Products;