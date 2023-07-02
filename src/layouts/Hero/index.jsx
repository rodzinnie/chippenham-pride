import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../common";
import styles from "./index.module.css";

function Hero() {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/volunteer");
  };

  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.section}>
        <div className={styles.shoutout}>
          <h1 className={styles.h1}>
            Join Proud Chippenham in celebrating its diversity!
          </h1>
          <p className={styles.date}>TBC - June 2024</p>
          <p className={styles.place}>Monkton Park, Chippenham</p>
        </div>
        <div className={styles.button}>
          <Button
            text={"Volunteer with us!"}
            variant="light"
            handleClick={handleClick}
          />
        </div>
        {/* <RollingBar /> */}
      </section>
    </div>
  );
}

export default Hero;
