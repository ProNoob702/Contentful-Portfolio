import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';
import { FeaturedWorksSide } from '../containers/home/FeaturedWorksSide';
import { RecentPostsSide } from '../containers/home/RecentPostsSide';
import { IntroSide } from '../containers/home/IntroSide';

const IndexPage: React.FC<{ data: any }> = ({ data }) => {
  // eslint-disable-next-line no-console
  // console.log('coucou', data);
  return (
    <Layout>
      <IntroSide />
      <RecentPostsSide />
      <FeaturedWorksSide />
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
