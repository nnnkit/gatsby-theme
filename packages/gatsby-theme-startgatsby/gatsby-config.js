module.exports = themeOption => {
  const { title, description, name, social } = themeOption;
  return {
    siteMetadata: {
      title: title,
      description: description,
      name: name,
      social: social
    },
    plugins: [
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      "gatsby-plugin-sass",
      {
        resolve: "gatsby-mdx",
        options: {
          defaultLayouts: {
            default: require.resolve("./src/components/layout.js")
          },
          gatsbyRemarkPlugins: [
            { resolve: "gatsby-remark-images" },
            {
              resolve: "gatsby-remark-prismjs"
            }
          ]
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts", // name of the folder
          path: `./posts/` // path of url
        }
      },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/src/pages`
        }
      }
    ]
  };
};
