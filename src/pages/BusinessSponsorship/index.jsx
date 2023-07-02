import React from "react";

import { Button, ArticleSection } from "../../common";
import styles from "./index.module.css";
import sponsorship from "../../assets/Sponsorship1.jpeg";
import sponsorshiptnc from "../../assets/Sponsorshiptnc.jpeg";
import headline from "../../assets/headlinesponsorship.jpeg";
import other from "../../assets/othersponsorship.jpeg";

function BusinessSponsorship() {
  return (
    <div className={styles.root}>
      <article className={styles.sponsorPacks}>
        <ArticleSection header="Learn about our Sponsorship Packages" />
        <a href={sponsorship} className={styles.button} download>
          <h3 className={styles.h3}>Sponsorship Agreement</h3>
          <Button variant="dark" text="Download"></Button>
        </a>
        <a href={sponsorshiptnc} className={styles.button} download>
          <h3 className={styles.h3}>T's and C's</h3>
          <Button variant="dark" text="Download"></Button>
        </a>
        <a href={headline} className={styles.button} download>
          <h3 className={styles.h3}>Headline sponsors packages</h3>
          <Button variant="dark" text="Download"></Button>
        </a>
        <a href={other} className={styles.button} download>
          <h3 className={styles.h3}>Other sponsor packages</h3>
          <Button variant="dark" text="Download"></Button>
        </a>
      </article>
    </div>
  );
}

export default BusinessSponsorship;
