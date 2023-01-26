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
import gewefa from '../../assets/GEWEFA.png'
import tds from '../../assets/tds.png'
import md from '../../assets/md.png'
import flyingmonk from '../../assets/flyingmonk.jpg'
import bostonburger from '../../assets/bostonburger.jpg'
import { GoFundMe } from '../../common';


function Footer() {
  return (
    <footer className={styles.root}>
      <h2>Sponsors</h2>
      <section className={styles.sponsors}>
      <a target="_blank" href='https://www.transinthecity.co.uk/'><img src={titc} alt="trans in the city" className={styles.sponsorImg} /></a>
      <a target="_blank" href='https://instagram.com/darkobsessiontattoo?igshid=YmMyMTA2M2Y='><img src={darkObs} alt="dark" className={styles.sponsorImg} /> </a>
      <a target="_blank" href=' https://www.winemonkey.co.uk'><img src={winemo} alt="wine monkey logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://frankielane.co.uk/'><img src={frankie} alt="frankie lane logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://www.gewefa.co.uk/'><img src={gewefa} alt="GEWEFA logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://www.facebook.com/theflyingmonkpub/'><img src={flyingmonk} alt="The Flying Monk logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://www.thedancespot.co.uk/'><img src={tds} alt="The dance spot logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://www.manderduffill.com/'><img src={md} alt="mander duffill logo" className={styles.sponsorImg} /> </a>
      <a target="_blank" href='https://www.bostonburger.co.uk/'><img src={bostonburger} alt="boston burger logo" className={styles.sponsorImg} /> </a>
      </section>

      <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="volunteer">Contact us</NavLink>
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
          
        <GoFundMe noImage={true}/>
        </div>
      </div>
        <p className={styles.rights}><a href='https://aggieskorska.co.uk' className={styles.credits}>Created &amp; maintained by The Chippenham Pride Team 2022 Ⓒ</a></p>
    </footer>
  )
}

export default Footer