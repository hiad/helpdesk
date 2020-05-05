import React, { useState, useEffect } from 'react';
import BannerURL from '../../images/productFAQ.png';
import {
    ProductsWrapper,
    Container,
    Header,
    Title,
    Icon,
    Product,
    ProductName,
    BannerImage,
} from './StyledComponents';

function compare(a, b) {
    if (a.type[0] < b.type[0]) {
        return -1;
    }
    if (a.type[0] > b.type[0]) {
        return 1;
    }
    return 0;
}


const ProductList = ({
    className,
    products,
}) => {
    const [shownProducts, setShownProducts] = useState([]);
    const [productTypes, setProductTypes] = useState([]);

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

        const organizedProducts = products.sort(compare);
        setShownProducts(organizedProducts);
    }, []);

    return (
        <Container className={className}>
            <BannerImage src={BannerURL} alt="BannerURL" />
            <Header>
                {productTypes.map((type) => (
                    <ProductsWrapper>
                        <Title>
                            {type}
                        </Title>
                        {shownProducts
                            .filter(
                                ({ type: typeProduct }) => (type === typeProduct[0]),
                            ).map(({
                                name,
                                banner,
                                questiontype,
                            }) => {
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
                ))}
            </Header>
        </Container>
    );
};


export default ProductList;
