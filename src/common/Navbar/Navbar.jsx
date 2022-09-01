import React, { useState, useRef, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Button } from '..'
import logo from '../../assets/logo.png'
import styles from './Navbar.module.css'


function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const inputRef = useRef();
    const rootRef = useRef();
    const navigateTo = useNavigate();

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
            if(innerWidth >= 1200) {
                setOpen(true);
            } 
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
    const {innerWidth, innerHeight} = window;

    return {innerWidth, innerHeight};
    }


    const handleHamburger = (toggled) => {
        if(toggled) {
            inputRef.current.style.right = 0
            rootRef.current.style.overflow = 'visible'
        } else {
            inputRef.current.style.right = '-120%'
            setTimeout(() => rootRef.current.style.overflow = 'hidden', 400)
        }
    }

    const handleIsActive = ({isActive}) => {
        return {borderBottom: isActive ? "1px black solid" : 'none',   textShadow: isActive ? '2px 4px #33323280' : 'none'}
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        navigateTo('/form')
    }

  return (
    <div className={styles.root} ref={rootRef}>
            <div className={styles.logos}>
                <img src={logo}  alt="logo" className={styles.logo}/>
                <div className={styles.title}>
                    <span className={styles.span}>Chippenham</span>
                    <span className={styles.span}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pride 2023</span>
                </div>
            </div>
            <nav ref={inputRef} className={styles.nav}>
                <NavLink style={handleIsActive} className={styles.navlink} to="/">Home</NavLink>
                <NavLink style={handleIsActive} className={styles.navlink} to="about">About</NavLink>
                <NavLink style={handleIsActive} className={styles.navlink} to="volunteer">Volunteer</NavLink>
                <NavLink style={handleIsActive} className={styles.navlink} to="support">Support</NavLink>
                <NavLink style={handleIsActive} className={styles.navlink} to="team">The Team</NavLink>
                <Button text="Contact us" variant="dark" onClick={handleOnClick}/>
            </nav>
            <div className={styles.hamburger}>
                <Hamburger onToggle={handleHamburger} toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
            </div>
    </div>
  )
}

export default Navbar