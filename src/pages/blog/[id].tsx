import Layout from '../../components/layout';
import React from 'react';
import { BlogPost } from '../../containers/blog/blogPost';

// {params.id}
interface Props {
  params: { id: string };
}

const BlogPostDetail: React.FC<Props> = ({ params }) => {
  return (
    <Layout>
      <BlogPost />
    </Layout>
  );
};

export default BlogPostDetail;
