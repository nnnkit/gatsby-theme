import React from "react";
import allPosts from "../hooks/allPosts";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default function posts() {
  const posts = allPosts();
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          grid-gap: 15px;
        `}
      >
        {posts.map(post => (
          <div>
            <Img
              fluid={post.frontmatter.banner.sharp.fluid}
              css={css`
                width: 300px;
                height: 200px;
              `}
              alt={post.frontmatter.title}
            />
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
