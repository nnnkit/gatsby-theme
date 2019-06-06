import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostGrid from "../components/PostGrid";

export default function tags({
  data: {
    allMdx: { nodes: posts }
  }
}) {
  console.log(posts);
  return (
    <Layout>
      <section className="padding">
        <div className="container">
          <div className="blog-section__wrapper sm-col1">
            {posts.map(post => (
              <PostGrid key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const tagQuery = graphql`
  query($tag: String) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          title
          keywords
          slug
          banner {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          categories
          date(formatString: "MMMM Do, YYYY")
        }
        code {
          body
        }
      }
    }
  }
`;
