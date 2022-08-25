import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

import { Button } from '..'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Navbar.module.css'


function Navbar() {
    const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.root}>
            <img src={logo}  alt="logo" className={styles.logo}/>
            <div className={styles.title}>Chippenham Pride 2023</div>
            <nav>
                <NavLink to="home">Home</NavLink>
                <NavLink to="home">About</NavLink>
                <NavLink to="home">Volunteer</NavLink>
                <NavLink to="home">Support</NavLink>
                <NavLink to="home">The Team</NavLink>
                <Button text="Contact us" variant="dark" />
            </nav>
            <Hamburger className={styles.hamburger} color="#000000"/>
    </div>
  )
}

export default Navbar