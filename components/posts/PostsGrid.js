import React from "react";

import classes from "./PostGrid.module.css";

import PostItem from "./PostItem";

function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
