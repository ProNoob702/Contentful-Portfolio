import { graphql, useStaticQuery } from 'gatsby';
import { WorkPostType } from '../models/WorkPostType';

export const useWorksList = (): WorkPostType[] => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulWorks(sort: { order: DESC, fields: postedOn }) {
          edges {
            node {
              id
              name
              postedOn
              category
              description {
                description
              }
              workImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `,
  );
  return data?.allContentfulWorks?.edges?.map((x: { node: WorkPostType }) => x.node) as WorkPostType[];
};
