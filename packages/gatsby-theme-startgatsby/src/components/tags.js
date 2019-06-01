import React from "react";
import Layout from "./layout";
import { Link, graphql } from "gatsby";
import PostGrid from "./postGrid";

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

export const query = graphql`
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
