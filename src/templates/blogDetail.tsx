import Layout from '../components/layout';
import React from 'react';
import { BlogPost } from '../containers/blog/blogPost';
import { graphql } from 'gatsby';
import { BlogPostType } from '../models/BlogPost';

// {params.id}
interface Props {
  params: { id: string };
  data: { contentfulBlogs: BlogPostType };
}

export const query = graphql`
  query ($id: String) {
    contentfulBlogs(id: { eq: $id }) {
      id
      name
      postedOn
      theme
      description {
        description
      }
    }
  }
`;

const BlogPostDetail: React.FC<Props> = (props) => {
  const { params, data } = props;
  console.log('🌝', params.id);
  return (
    <Layout>
      <BlogPost post={data.contentfulBlogs} />
    </Layout>
  );
};

export default BlogPostDetail;
