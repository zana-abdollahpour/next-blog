import React from "react";
import ReactMarkdown from "react-markdown";

import styles from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is the first post",
  date: "2022-04-14",
  slug: "getting-started-with-nextjs",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
