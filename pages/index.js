import React from "react";

import { getFeaturedPosts } from "../lib/posts-util";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
