import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';
import { WorkDetail } from '../containers/works/workDetail';
import { WorkPostType } from '../models/WorkPostType';

interface Props {
  params: { id: string };
  data: { contentfulBlogs: WorkPostType };
}

export const query = graphql`
  query ($id: String) {
    contentfulWorks(id: { eq: $id }) {
      id
      name
      postedOn
      category
      workImage
      description {
        description
      }
      markdownText {
        markdownText
      }
    }
  }
`;

const WorkPostDetailTemplate: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <Layout>
      <WorkDetail work={data.contentfulBlogs} />
    </Layout>
  );
};

export default WorkPostDetailTemplate;
