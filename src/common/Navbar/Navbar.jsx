import React, { useState, useRef } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

import { Button } from '..'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Navbar.module.css'


function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const inputRef = useRef();

    const handleHamburger = (toggled) => {
        if(toggled) {
            inputRef.current.style.right = 0
        } else {
            inputRef.current.style.right = '-200%'
        }
    }
  return (
    <div className={styles.root}>
            <img src={logo}  alt="logo" className={styles.logo}/>
            <div className={styles.title}>Chippenham Pride 2023</div>
            <nav ref={inputRef} className={styles.nav}>
                <NavLink className={styles.navlink} to="/">Home</NavLink>
                <NavLink className={styles.navlink} to="/">About</NavLink>
                <NavLink className={styles.navlink} to="/">Volunteer</NavLink>
                <NavLink className={styles.navlink} to="/">Support</NavLink>
                <NavLink className={styles.navlink} to="/">The Team</NavLink>
                <Button text="Contact us" variant="dark" />
            </nav>
            <div className={styles.hamburger}>
                <Hamburger onToggle={handleHamburger} toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
            </div>
    </div>
  )
}

export default Navbar