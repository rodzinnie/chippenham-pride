import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, GoFundMe, Navbar } from '../../common'
import styles from './index.module.css'
import arrow from '../../assets/arr.png'

function Header() {
  const navigateTo = useNavigate()
  const handleClick = () => {
    navigateTo('/volunteer')
  }
  
  return (
    <header className={styles.root}>
        <Navbar />
        <section className={styles.section}>
          <div className={styles.shoutout}>
            <h1 className={styles.h1}>Join Proud Chippenham in celebrating its diversity!</h1>
            <p className={styles.date}>17 June 2023</p>
            <p className={styles.start}>Start: 1pm</p>
            <p className={styles.place}>Monkton Park, Chippenham</p>
          </div>
          <div className={styles.button}>
            <GoFundMe noImage={false} light={true} />
            <div className={styles.arrParent} onClick={() => console.log('jelo')}>
              <img className={styles.arr} src={arrow} alt="arrow down" />
            </div>
          </div>
        </section>
    </header>
  )
}

export default Header