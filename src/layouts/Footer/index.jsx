import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import tiktok from '../../assets/tiktok.png'
import pppride from '../../assets/prideqr.png'
import titc from '../../assets/titc.png'
import winemo from '../../assets/winemonkey.png'
import frankie from '../../assets/frankielane.png'
import darkObs from '../../assets/darkobsession.jpg'


function Footer() {
  return (
    <footer className={styles.root}>
      <h2>Sponsors</h2>
      <section className={styles.sponsors}>
      <a href='https://www.transinthecity.co.uk/'><img src={titc} alt="trans in the city" className={styles.sponsorImg} /></a>
      <a href='https://instagram.com/darkobsessiontattoo?igshid=YmMyMTA2M2Y='><img src={darkObs} alt="dark" className={styles.sponsorImg} /> </a>
      <a href=' https://www.winemonkey.co.uk'><img src={winemo} alt="wine monkey logo" className={styles.sponsorImg} /> </a>
      <a href='https://frankielane.co.uk/'><img src={frankie} alt="frankie lane logo" className={styles.sponsorImg} /> </a>
      </section>

      <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="volunteer">Contact us</NavLink>
          <NavLink to="tsandcs">T's and C's of the Chippenham Pride 2023</NavLink>
          <NavLink to="support">Help us fund the PRIDE</NavLink>
        </nav>
       <div className={styles.socialMed}>
        <p>See us on Social Media</p>
        <div className={styles.media}>
          <a href="https://fb.me/e/oXu4YKJNG"><img src={fb} alt="facebook" /></a>
          <a href="https://www.instagram.com/chippenham_pride/?igshid=YmMyMTA2M2Y%3D"><img src={insta} alt="instagram" /></a>
        </div>
       </div>
        <div className={styles.registry}>
          CHIPPENHAM PRIDE CIC <br /> Company number: <br />14287807
          
        <div className={styles.qr}><div className={styles.donate}><strong>Donate</strong></div><img src={pppride} /></div>
        </div>
      </div>
        <p className={styles.rights}>Created &amp; maintained by The Chippenham Pride Team 2022 Ⓒ</p>
    </footer>
  )
}

export default Footer