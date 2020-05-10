import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Layout from '../components/Layout/Layout';
import { SearchContainer as BaseSearchContainer } from '../components/SearchBox/SearchBox';
import BaseChatBox from '../components/ChatBox/ChatBox';
import BaseProductList from '../components/ProductList/ProductList';
import BaseCategoriesMobile from '../components/CategoriesList/CategoriesMobile';
import BaseQuestionList from '../components/QuestionList/QuestionList';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const ProductList = styled(BaseProductList)`
  flex: 1;
`;

const QuestionList = styled(BaseQuestionList)`
  margin-right: 0;
`;

const SearchContainer = styled(BaseSearchContainer)`
    margin-top: 28px;
`;

const CategoriesMobile = styled(BaseCategoriesMobile)`
    margin-bottom: 28px;
`;


const ChatBox = styled(BaseChatBox)`
    margin-top: 28px;
`;

const Container = styled.div`
    display: flex;
    margin: 0 auto;    
    padding: 0 20px;
    flex-direction: column-reverse;

    @media (min-width: 767px) {
      display: flex;
      max-width: 1440px;
      margin: 0 auto;    
      flex-direction: row;
      justify-content: space-between;
    }
`;

const Column = styled.div`
  @media (min-width: 768px) {
    :first-of-type{
      flex-shrink: 0;
      margin-right: 50px;
      width:  407px;
    }
  }
`;

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;  
  margin-top: 0;
`;

const ProductFAQ = () => {
    const breakpoints = useBreakpoint();
    const [categoryShown, setCategoryShown] = useState({});

    const data = useStaticQuery(graphql`{
            allContentfulQuestionType {
              edges {
                node {
                  id
                  questions {
                    question {
                      question
                      id
                    }
                    answer {
                      answer
                    }
                  }
                  title
                  icon {
                    file {
                      url
                    }
                  }
                  banner {
                    file {
                      url
                    }
                  }
                  product {
                    id
                  }
                }
              }
            }
            allContentfulProduct {
              nodes {
                name
                banner {
                  file {
                    url
                  }
                }
                type
                questiontype {
                  title
                }
              }
            }
          }                  
      `);

    const newCategoriesData = data.allContentfulQuestionType.edges || {};

    return (
        <Layout>
            <Container>
                <Column>
                    {!breakpoints.md && (
                        <>
                            <H2>Categories</H2>
                            <CategoriesList categories={newCategoriesData} />
                        </>
                    )}
                    <SearchContainer />
                    <ChatBox />
                </Column>
                <Column>
                    {breakpoints.md && (
                        <>
                            <H2>Categories</H2>
                            <CategoriesMobile
                                setCategory={setCategoryShown}
                                categories={newCategoriesData}
                                isProductFAQ
                            />
                        </>
                    )}
                    {breakpoints.md && categoryShown && categoryShown.title !== 'Product FAQ' && (
                        <QuestionList
                            banner={categoryShown.banner && categoryShown.banner.file.url}
                            questions={categoryShown && categoryShown.questions}
                        />
                    )}
                    {data && (
                        <ProductList
                            setCategory={setCategoryShown}
                            categories={newCategoriesData}
                            products={data.allContentfulProduct.nodes}
                        />
                    )}
                </Column>
            </Container>
        </Layout>
    );
};
export default ProductFAQ;
