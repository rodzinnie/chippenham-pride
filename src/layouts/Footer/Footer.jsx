import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import tiktok from '../../assets/tiktok.png'
import pppride from '../../assets/prideqr.png'
import titc from '../../assets/titc.png'
import winemo from '../../assets/winemonkey.png'
import frankie from '../../assets/frankielane.png'


function Footer() {
  return (
    <footer className={styles.root}>
      <h2>Sponsors</h2>
      <section className={styles.sponsors}>
      <img src={titc} alt="trans in the city" className={styles.sponsorImg} />
      <img src={winemo} alt="trans in the city" className={styles.sponsorImg} /> 
      <img src={frankie} alt="trans in the city" className={styles.sponsorImg} /> 
      </section>

      <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="volunteer">Contact us</NavLink>
          <NavLink to="tsandcs">T's and C's of the Chippenham Pride 2023</NavLink>
          <NavLink to="support">Help us fund the PRIDE</NavLink>
        </nav>
        <div className={styles.media}>
          <a href="https://fb.me/e/oXu4YKJNG"><img src={fb} alt="facebook" /></a>
          <a href="facebook.com"><img src={insta} alt="instagram" /></a>
          <a href="facebook.com"><img src={tiktok} alt="tiktok" /></a>
        </div>
          <div className={styles.registry}>
            CHIPPENHAM PRIDE CIC <br /> Company number: <br />14287807
            <div><strong>Donate</strong></div>
          <div className={styles.qr}><img src={pppride} /></div>
          </div>
      </div>
        <p className={styles.rights}>Created &amp; maintained by The Chippenham Pride Team 2022 Ⓒ</p>
    </footer>
  )
}

export default Footer