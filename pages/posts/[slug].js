import React from "react";
import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

export default function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 10 * 60,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths,
    fallback: false,
  };
}
