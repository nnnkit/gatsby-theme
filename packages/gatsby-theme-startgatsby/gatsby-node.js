exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
            categories
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("Failed to create pages for the posts", result.errors);
  }
  let posts = result.data.allMdx.nodes;
  let tags = [
    ...new Set(
      posts.reduce((acc, post) => {
        return acc.concat(post.frontmatter.categories);
      }, [])
    )
  ];
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/components/post.js"),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: require.resolve("./src/components/tags.js"),
      context: {
        tag
      }
    });
  });
};
