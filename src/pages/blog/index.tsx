import Layout from '../../components/layout';
import React from 'react';
import { BlogContent } from '../../containers/blog/blogContent';

const BlogPage: React.FC<{}> = () => {
  return (
    <Layout>
      <BlogContent />
    </Layout>
  );
};

export default BlogPage;
