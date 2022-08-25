import React from 'react'

import { Button, Navbar } from '../../common'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.root}>
        <Navbar />
        <section className={styles.section}>
            <h1>Join Proud Chippenham in celebrating its diversity!</h1>
            <p className={styles.date}>17 June 2023</p>
            <p className={styles.start}>Start: 1pm</p>
            <p className={styles.place}>Monkton Park, Chippenham</p>
            <Button text="Contact us" variant="light"/>
            <img src="" alt="arrow down" />
        </section>
    </header>
  )
}

export default Header