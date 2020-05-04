import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import BaseQuestionList from '../components/QuestionList/QuestionList';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import { SearchContainer as BaseSearchContainer } from '../components/SearchBox/SearchBox';
import BaseChatBox from '../components/ChatBox/ChatBox';

const QuestionList = styled(BaseQuestionList)`
  margin-right: 0;
`;

const SearchContainer = styled(BaseSearchContainer)`
    margin-top: 28px;
`;

const ChatBox = styled(BaseChatBox)`
    margin-top: 28px;
`;

const Container = styled.div`
    padding-top: 73px;
    padding-bottom: 100px;
    display: flex;
    margin: 0 auto;    
    padding: 0 20px;
    flex-direction: column-reverse;

    @media (min-width: 767px) {
      padding-top: 73px;
      padding-bottom: 100px;
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
  font-family: "SharpSansNo2Bold-Regular";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;  
  margin-top: 0;
`;

const Question = ({ location }) => {
    const { title = '' } = location.state || {};

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
                }
              }
            }
          }                  
      `);

    let filteredNode = {};
    if (data && data.allContentfulQuestionType) {
        [{ node: filteredNode }] = data.allContentfulQuestionType.edges.filter(
            ({ node }) => node.title === title,
        );
    }


    const newCategoriesData = data.allContentfulQuestionType.edges || {};
    return (
        <Layout>
            <Container>
                <Column>
                    <H2>Categories</H2>
                    <CategoriesList categories={newCategoriesData} />
                    <SearchContainer />
                    <ChatBox />
                </Column>
                <Column>
                    <QuestionList
                        banner={filteredNode.banner && filteredNode.banner.file.url}
                        questions={filteredNode && filteredNode.questions}
                    />
                </Column>
            </Container>
        </Layout>
    );
};
export default Question;
