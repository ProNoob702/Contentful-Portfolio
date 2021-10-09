import { graphql, useStaticQuery } from 'gatsby';
import { BlogPostType } from '../models/BlogPostType';

export const usePostsList = (): BlogPostType[] => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulBlogs(sort: { order: DESC, fields: postedOn }) {
          edges {
            node {
              id
              name
              postedOn
              theme
              description {
                description
              }
            }
          }
        }
      }
    `,
  );
  return data?.allContentfulBlogs?.edges?.map((x: { node: BlogPostType }) => x.node) as BlogPostType[];
};
