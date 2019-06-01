import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { MDXRenderer } from "gatsby-mdx";
import Layout from "./layout";
import Header from "./header";
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
        categories
      }
      code {
        body
      }
    }
  }
`;
export default function post({ data: { mdx: post } }) {
  const { banner, title } = post.frontmatter;
  return (
    <>
      <Header />
      <main>
        <div className="post-single-container">
          <article className="post-single">
            <header>
              <h1 className="post-single__title">{title}</h1>
              <div className="blog__details flex-start">
                <span>Airytails</span>
                <span className="separator">|</span>
                <span>Mar 15, 2019</span>
              </div>
              <Img
                fluid={post.frontmatter.banner.sharp.fluid}
                alt={post.frontmatter.title}
                className="img-responsive post-single__img"
              />
            </header>
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </article>
        </div>
      </main>
      {/* <Link
        to="/"
        css={css`
          font-size: 40px;
        `}
      >
        <span role="img" aria-label="back">
          👈
        </span>
      </Link>
      <Img
        fluid={post.frontmatter.banner.sharp.fluid}
        alt={post.frontmatter.title}
      />
      <MDXRenderer>{post.code.body}</MDXRenderer> */}
    </>
  );
}
