import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import tiktok from '../../assets/tiktok.png'


function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="volunteer">Contact us</NavLink>
          <NavLink to="support">Help us fund the PRIDE</NavLink>
          <NavLink to="tsandcs">T's and C's of the Chippenham Pride 2023</NavLink>
        </nav>
        <div className={styles.media}>
          <a href="https://fb.me/e/oXu4YKJNG"><img src={fb} alt="facebook" /></a>
          <a href="facebook.com"><img src={insta} alt="instagram" /></a>
          <a href="facebook.com"><img src={tiktok} alt="tiktok" /></a>
        </div>
          <div className={styles.registry}>
            CHIPPENHAM PRIDE CIC <br /> Company number: <br />14287807
          </div>
      </div>
        <p className={styles.rights}>Created &amp; maintained by The Chippenham Pride Team 2022 Ⓒ</p>
    </footer>
  )
}

export default Footer