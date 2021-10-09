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
    }
  `);

  data.allContentfulBlogs.edges.forEach((x) => {
    actions.createPage({
      path: '/blog/' + x.node.id,
      component: path.resolve('./src/templates/blogDetail.tsx'),
      context: { id: x.node.id },
    });
  });
};
