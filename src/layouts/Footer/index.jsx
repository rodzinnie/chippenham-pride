import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.css";
import fb from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import { Button, GoFundMe, Sponsors } from "../../common";
import { data } from "./data";

function Footer() {
  const handleClick = () => {
    navigateTo("/volunteer");
  };
  return (
    <footer className={styles.root}>
      <h2 className={styles.sponsorsH2}>Main Sponsors</h2>
      <div className={styles.sponsors}>
        <h1>We are open for sponsorship for 2024</h1>
        <p>
          Last year's event was a major success. If you would like to partake in
          making our town even more LGBTQ+ friendly, ask now how you can support
          us!
        </p>
        <Button
          text={"Contact us!"}
          variant="light"
          handleClick={handleClick}
        />
        {/* <Sponsors data={data} /> */}
      </div>
      <div className={styles.buttonWrapper}>
        <Link to="/sponsor">
          <Button text="see all of the sponsors" variant={"lightOnLight"} />
        </Link>
      </div>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact us</NavLink>
          <NavLink to="sponsor">Help us fund the PRIDE</NavLink>
        </nav>
        <div className={styles.socialMed}>
          <p>See us on Social Media</p>
          <div className={styles.media}>
            <a href="https://fb.me/e/oXu4YKJNG">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/chippenham_pride/?igshid=YmMyMTA2M2Y%3D">
              <img src={insta} alt="instagram" />
            </a>
          </div>
        </div>
        <div className={styles.registry}>
          CHIPPENHAM PRIDE CIC <br /> Company number: <br />
          14287807
          <GoFundMe noImage={true} text={"Donate"} />
        </div>
      </div>
      <p className={styles.rights}>
        <a href="https://aggieskorska.co.uk" className={styles.credits}>
          Created &amp; maintained by The Chippenham Pride Team 2022 Ⓒ
        </a>
      </p>
    </footer>
  );
}

export default Footer;
