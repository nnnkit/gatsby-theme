import React from "react";
import allPosts from "../hooks/allPosts";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default function posts() {
  const posts = allPosts();
  return (
    <>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Marketing
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="uppercase mt-2 text-gray-600">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
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
    </>
  );
}
