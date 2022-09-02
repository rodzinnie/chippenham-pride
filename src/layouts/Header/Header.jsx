import React from 'react'

import { Button, Navbar } from '../../common'
import styles from './Header.module.css'
import arrow from '../../assets/arr.png'

function Header() {
  
  const handleOnClick = (e) => {
    console.log('first')
    e.preventDefault()
    navigateTo('/volunteer#contact')
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
            <Button text="Contact us" variant="light" handleClick={handleOnClick}/>
            <div className={styles.arrParent}>
              <img className={styles.arr} src={arrow} alt="arrow down" />
            </div>
          </div>
        </section>
    </header>
  )
}

export default Header