import { graphql, useStaticQuery } from "gatsby";

export default function usePostsData() {
  const data = useStaticQuery(graphql`
    query AllBlogPosts {
      allMdx {
        nodes {
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
            categories
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes;
}
