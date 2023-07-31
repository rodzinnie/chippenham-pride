import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../../common";
import styles from "./index.module.css";

function Hero() {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/volunteer");
  };
  function dhm(t) {
    const now = new Date().getTime();
    const diff = t - now;

    console.log(diff);
    let cd = 24 * 60 * 60 * 1000;
    const d = Math.floor(diff / cd);
    console.log(d);
    return d;
  }
  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.section}>
        <div className={styles.shoutout}>
          <h1 className={styles.h1}>
            Join Proud Chippenham in celebrating its diversity!
          </h1>
          <p className={styles.date}>15th June 2024</p>
          <p className={styles.place}>Monkton Park, Chippenham</p>
        </div>
        <div className={styles.button}>
          <Button
            text={"Volunteer with us!"}
            variant="dark"
            handleClick={handleClick}
          />
        </div>
        {/* <RollingBar /> */}
      </section>
      <div className={styles.countdown}>
        Next Pride in:
        <div className={styles.countdownDays}>
          {dhm(new Date("2024-06-15").getTime())} days
        </div>
      </div>
    </div>
  );
}

export default Hero;
