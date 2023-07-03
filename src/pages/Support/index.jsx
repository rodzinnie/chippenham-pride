import React, { useRef } from "react";
import {
  ArticleSection,
  Button,
  GoFundMe,
  Spendings,
  Sponsors,
  Writeup,
} from "../../common";
import { sponsors, supporters, writeup } from "./data";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Support() {
  const handleClickPP = () => {
    window.location.assign("https://www.gofundme.com/f/chippenham-pride-2023");
  };

  return (
    <>
      <ArticleSection
        className={styles.root}
        header="Help us support the pride!"
        background
      >
        <div className={styles.left}>
          <div className={styles.shoutout}></div>
          <p className={styles.p}>
            Our cause is simple: promote equality in our beautiful town. Without
            YOUR support, we wouldn't be able to make it!
          </p>
          <Spendings />
        </div>
        <GoFundMe text="Donate" />
      </ArticleSection>
      <ArticleSection header="Join us!">
        <p>
          You can join the proud sponsors of the event! Check out our
          sponsorship packages - don't miss out. They're going to go out pretty
          quick!
          <Link to="/for-business">See the packages</Link>
        </p>
      </ArticleSection>
      <Sponsors data={sponsors} header="Give it up to our sponsors for 2023!" />
      <Sponsors data={supporters} header="We are supported by" />
    </>
  );
}

export default Support;
