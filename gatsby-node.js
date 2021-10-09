const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulBlogs {
        edges {
          node {
            id
          }
        }
      }
      allContentfulWorks(sort: { order: DESC, fields: postedOn }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  data.allContentfulBlogs.edges.forEach((x) => {
    actions.createPage({
      path: '/blog/' + x.node.id,
      component: path.resolve('./src/templates/blogPostDetail.tsx'),
      context: { id: x.node.id },
    });
  });
  data.allContentfulWorks.edges.forEach((x) => {
    actions.createPage({
      path: '/works/' + x.node.id,
      component: path.resolve('./src/templates/workPostDetail.tsx'),
      context: { id: x.node.id },
    });
  });
};
