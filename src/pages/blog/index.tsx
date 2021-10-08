import Layout from '../../components/layout';
import React from 'react';
import { BlogConent } from '../../containers/blog/blogContent';

const BlogPage: React.FC<{}> = () => {
  return (
    <Layout>
      <BlogConent />
    </Layout>
  );
};

export default BlogPage;
