exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("Failed to create pages for the posts", result.errors);
  }
  let posts = result.data.allMdx.nodes;
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/components/post.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};
