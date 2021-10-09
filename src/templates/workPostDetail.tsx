import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';
import { WorkDetail } from '../containers/works/workDetail';
import { WorkPostType } from '../models/WorkPostType';

interface Props {
  params: { id: string };
  data: { contentfulWorks: WorkPostType };
}

export const query = graphql`
  query ($id: String) {
    contentfulWorks(id: { eq: $id }) {
      id
      name
      postedOn
      category
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
  console.log('work', data);
  return (
    <Layout>
      <WorkDetail work={data.contentfulWorks} />
    </Layout>
  );
};

export default WorkPostDetailTemplate;
