import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.root}>
        <nav>
            <img src=""  alt="logo"/>
            <div className={styles.title}>Chippenham Pride 2023</div>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">Home</NavLink>
            <Button text="Contact us" variant="dark" />
        </nav>
        <section>
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