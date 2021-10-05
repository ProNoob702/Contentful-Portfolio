import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';
import { Button } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndexPage = ({ data }: any) => {
  // eslint-disable-next-line no-console
  console.log('coucou', data);
  return (
    <Layout pageTitle="welcome">
      <div>Hello tr!</div>
      <Button variant="contained" color="primary">
        HelloTrash
      </Button>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allContentfulBlogs {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
