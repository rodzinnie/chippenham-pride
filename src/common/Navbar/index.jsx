import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { Sling as Hamburger } from '../Hamburger/Sling' 
import clsx from 'clsx'

import styles from "./index.module.css";
import { MenuItems } from '../'
import { useSelector } from "react-redux";

const Navbar = () => {
  const navbar = useSelector(state => state.data.navbar)
  const [isOpen, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [smallScreen, setSmallScreen] = useState(getSmallScreen())
  
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  function getSmallScreen() {
    return windowSize.innerWidth < 900 ? true : false
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (innerWidth >= 1200) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [])


  useEffect(() => {
    setSmallScreen(getSmallScreen())
  }, [windowSize])

  return (
    <nav className={styles.wrapper}>
      {!smallScreen ?
      <ul className={styles.menus}>
        {navbar.map((menu, index) => { 
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul> :
      smallScreen && isOpen ? 
      (<>
      <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      color="#FFFFFF"
    /> 
      <ul className={clsx(styles.menus, styles.expandDown)}>
        {navbar.map((menu, index) => { 
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} handleClick={setOpen} />;
        })}
      </ul>
        </>
        ) :
      <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#FFFFFF"
        /> 
      }
    </nav>
  );
};

export default Navbar;
