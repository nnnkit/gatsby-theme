import React from "react";
import allPosts from "../hooks/allPosts";
import PostGrid from "../components/postGrid";
import Layout from "../components/layout";

export default function posts() {
  const posts = allPosts();
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
