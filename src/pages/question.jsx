import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Layout from '../components/Layout/Layout';
import BaseQuestionList from '../components/QuestionList/QuestionList';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import BaseCategoriesMobile from '../components/CategoriesList/CategoriesMobile';
import { SearchContainer as BaseSearchContainer } from '../components/SearchBox/SearchBox';
import BaseProducts from '../components/Products/Products';
import BaseChatBox from '../components/ChatBox/ChatBox';
import BaseProductList from '../components/ProductList/ProductList';

const ProductList = styled(BaseProductList)`
  flex: 1;
`;


const QuestionList = styled(BaseQuestionList)`
  margin-right: 0;
`;

const Products = styled(BaseProducts)`
    margin-bottom: 28px;
`;


const CategoriesMobile = styled(BaseCategoriesMobile)`
    margin-bottom: 28px;
`;


const SearchContainer = styled(BaseSearchContainer)`
    margin-top: 28px;
`;

const ChatBox = styled(BaseChatBox)`
    margin-top: 28px;
`;

const Container = styled.div`
    display: flex;
    margin: 0 auto;    
    padding: 0 20px;
    padding-top: 0;
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

const Question = ({ location }) => {
    const {
        title = '',
        isProduct = false,
    } = location.state || {};
    const isProductFAQ = (title === 'Product FAQ');
    const breakpoints = useBreakpoint();
    const [categoryShown, setCategoryShown] = useState(undefined);

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

    let filteredNode = {};
    if (data && data.allContentfulQuestionType.edges) {
        try {
            const [{ node: filteredNodeInfo }] = data.allContentfulQuestionType.edges.filter(
                ({ node }) => node.title === title,
            );
            filteredNode = filteredNodeInfo;
        } catch (err) {
            filteredNode = {};
        }
    }

    const newCategoriesData = data.allContentfulQuestionType.edges || {};
    return (
        <Layout>
            <Container>
                <Column>
                    {!isProductFAQ && data && (
                        <>
                            <H2>Choose other products</H2>
                            <Products
                                products={data.allContentfulProduct.nodes}
                            />
                        </>
                    )}
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
                            />
                        </>
                    )}
                    {isProductFAQ && data && (
                        <ProductList
                            setCategory={setCategoryShown}
                            categories={newCategoriesData}
                            products={data.allContentfulProduct.nodes}
                        />
                    )}
                    {!isProduct && categoryShown && (categoryShown.node.title !== 'Product FAQ') && breakpoints.md && (
                        <>
                            <QuestionList
                                banner={categoryShown && categoryShown.node
                                  && categoryShown.node.banner.file.url}
                                questions={categoryShown && categoryShown.node.questions}
                            />
                        </>
                    )}
                    {filteredNode && (categoryShown.node.title === 'Product FAQ' || isProduct) && (
                        <QuestionList
                            banner={filteredNode.banner && filteredNode.banner.file.url}
                            questions={filteredNode && filteredNode.questions}
                        />
                    )}
                </Column>
            </Container>
        </Layout>
    );
};
export default Question;
