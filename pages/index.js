import React from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Zana's Blog</title>
        <meta
          name="description"
          content="I post about Frontend development with React and NextJS"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps(props) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
