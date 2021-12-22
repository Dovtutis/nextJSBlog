import React from "react";

import { getAllPosts } from "../../lib/posts-util";

import AllPosts from "../../components/posts/AllPosts";

function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
