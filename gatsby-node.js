exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectPageTemplate = require.resolve(
    `./src/templates/projectPageTemplate.jsx`,
  );

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/projects/" } } }
        sort: { fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectPageTemplate,
      context: {
        title: node.frontmatter.title,
      },
    });
  });
};
