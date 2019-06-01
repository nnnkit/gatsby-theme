import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import Layout from "./layout";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
      code {
        body
      }
    }
  }
`;
export default function Post({ data: { mdx: post } }) {
  const { banner, title, date } = post.frontmatter;
  return (
    <Layout>
      <div className="post-single-container">
        <article className="post-single">
          <header>
            <h1 className="post-single__title">{title}</h1>
            <div className="blog__details flex-start">
              <span>{date}</span>
            </div>
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              className="img-responsive post-single__img"
            />
          </header>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
}
