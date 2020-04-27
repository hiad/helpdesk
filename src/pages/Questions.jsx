import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import RectangleMenu from '../components/RectangleMenu/RectangleMenu';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
`;

const Item = styled.div`
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
    padding: 17px;
    box-sizing: border-box;

    @media (min-width: 769px) {
      flex-grow: 1;
      width: 50%;
      max-width: 50%;
      padding: 28px 14px 28px 28px;
      box-sizing: border-box;

      &:nth-child(2n){
        padding: 28px 28px 28px 14px;
      }
    }

    @media (min-width: 1280px) {
      flex-grow: 1;
      width: 33%;
      max-width: 33%;
      padding: 38px 32px 60px 32px;
      box-sizing: border-box;

      &:nth-child(2n){
        padding: 38px 32px 60px 32px;
      }

      &:nth-child(3n){
        padding: 38px 0 60px 32px;
      }
    }
`;

const QuestionsPage = () => {
    const data = useStaticQuery(graphql`
         {
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
      }
    }
  }
          }                  
      `);

    return (
        <Layout>
            <Container>
                {data.allContentfulQuestionType.edges.map(({
                    node,
                }) => {
                    const { title, id, questions } = node;
                    return (
                        <Item>
                            <RectangleMenu
                                title={title}
                                key={id}
                                questions={questions || []}
                            />
                        </Item>
                    );
                })}
            </Container>
        </Layout>
    );
};

export default QuestionsPage;
