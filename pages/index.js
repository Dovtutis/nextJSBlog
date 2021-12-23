import React from "react";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";

import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to my blog!</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
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
