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
            console.log(inputRef.current)
            inputRef.current.style.right = 0
        } else {
            console.log(inputRef.current)
            inputRef.current.style.right = '-200%'
        }
    }
  return (
    <div className={styles.root}>
            <img src={logo}  alt="logo" className={styles.logo}/>
            <div className={styles.title}>Chippenham Pride 2023</div>
            <nav ref={inputRef} className={styles.nav}>
                <NavLink className={styles.navlink} to="home">Home</NavLink>
                <NavLink className={styles.navlink} to="about">About</NavLink>
                <NavLink className={styles.navlink} to="home">Volunteer</NavLink>
                <NavLink className={styles.navlink} to="home">Support</NavLink>
                <NavLink className={styles.navlink} to="home">The Team</NavLink>
                <Button text="Contact us" variant="dark" />
            </nav>
            <Hamburger onToggle={handleHamburger} toggled={isOpen} toggle={setOpen} className={styles.hamburger} color="#FFFFFF"/>
    </div>
  )
}

export default Navbar