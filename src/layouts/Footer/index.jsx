import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import tiktok from '../../assets/tiktok.png'
import { Button, GoFundMe, Sponsors } from '../../common';
import { data } from './data';


function Footer() {
  return (
    <footer className={styles.root}>
      <h2>Main Sponsors</h2>
      <Sponsors data={data} />
      <div className={styles.buttonWrapper}>
        <Button text='see all of the sponsors' variant={'lightOnLight'} />
      </div>
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