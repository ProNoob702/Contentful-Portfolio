import { graphql, useStaticQuery } from 'gatsby';
import { BlogPostType } from '../models/BlogPost';

export const useBlogPostDetail = (postId: string): BlogPostType => {
  const data = useStaticQuery(
    graphql`
      {
        contentfulBlogs(id: { eq: "71549a0e-e4c1-5c86-9100-3df4ef4fb3c7" }) {
          id
          name
          theme
        }
      }
    `,
  );
  return data;
  //   return data?.allContentfulBlogs?.edges?.map((x: { node: BlogPost }) => x.node) as BlogPost[];
};
