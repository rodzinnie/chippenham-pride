import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../../common'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.root}>
        <nav className={styles.navbar}>
            <img src=""  alt="logo"/>
            <div className={styles.title}>Chippenham Pride 2023</div>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">About</NavLink>
            <NavLink to="home">Volunteer</NavLink>
            <NavLink to="home">Support</NavLink>
            <NavLink to="home">The Team</NavLink>
            <Button text="Contact us" variant="dark" />
        </nav>
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