import React from "react";
import allPosts from "../hooks/allPosts";
import Header from "../components/header";
import PostGrid from "../components/postGrid";

export default function posts() {
  const posts = allPosts();
  return (
    <>
      <Header />
      <main>
        <section className="padding">
          <div className="container">
            <div className="blog-section__wrapper sm-col1">
              {posts.map(post => (
                <PostGrid {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
