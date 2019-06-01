import { graphql, useStaticQuery } from "gatsby";

export default function usePostsData() {
  const data = useStaticQuery(graphql`
    query AllBlogPosts {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          id
          frontmatter {
            title
            slug
            keywords
            banner {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
            categories
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes;
}
