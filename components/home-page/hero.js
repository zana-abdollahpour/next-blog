import React from "react";
import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/zana.png"
          alt="An image showing Zana"
          height={400}
          width={400}
        />
      </div>
      <h1>Hi, I'm Zana</h1>
      <p>I blog about Frontend Development, especially React and Next.js</p>
    </section>
  );
}
