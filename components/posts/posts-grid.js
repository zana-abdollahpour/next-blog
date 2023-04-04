import React from "react";

import styles from "./posts-grid.module.css";
import PostItem from "./post-item";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
