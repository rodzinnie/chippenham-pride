import React from "react";

import styles from "./index.module.css";
import {
  ArticleSection,
  Button,
  GoFundMe,
  Highlights,
  MerchLink,
} from "../../common";

import { data } from "../../data";

function Home() {
  return (
    <section className={styles.root}>
      <ArticleSection header="Donate!" background>
        <p
          dangerouslySetInnerHTML={{ __html: data.donate }}
          className={styles.donateText}
        ></p>
        <GoFundMe text="donate" />
      </ArticleSection>
      <MerchLink />
      {/* <Programme /> */}
    </section>
  );
}

export default Home;
