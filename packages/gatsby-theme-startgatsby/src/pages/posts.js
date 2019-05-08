import React from "react";
import allPosts from "../hooks/allPosts";
import Layout from "../components/layout";

export default function posts() {
  const posts = allPosts();
  return <Layout>{JSON.stringify(posts, null, 2)}</Layout>;
}
