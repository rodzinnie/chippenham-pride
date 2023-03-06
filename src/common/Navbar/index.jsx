import React, { useState, useRef, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import clsx from 'clsx'

import { GoFundMe } from "..";
import logo from "../../assets/logo.png";
import styles from "./index.module.css";
import { menuItems } from "./data"; 
import { MenuItems } from '../'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
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
  }, []);

  return (
    <nav>
      <ul className={clsx(styles.menuTop, isOpen ? '' : 'hidden')}>
        {menuItems.map((menu, index) => { 
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
        <Hamburger
           toggled={isOpen}
           toggle={setOpen}
           color="#FFFFFF"
         />
      </ul>
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   const [isOpen, setOpen] = useState(false);
//   const [windowSize, setWindowSize] = useState(getWindowSize());
//   const inputRef = useRef();
//   const rootRef = useRef();
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     function handleWindowResize() {
//       setWindowSize(getWindowSize());
//       if (innerWidth >= 1200) {
//         setOpen(true);
//       } else {
//         setOpen(false);
//       }
//     }
//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   function getWindowSize() {
//     const { innerWidth, innerHeight } = window;
//     return { innerWidth, innerHeight };
//   }

//   const handleHamburger = (toggled) => {
//     if (toggled) {
//       inputRef.current.style.right = 0;
//       rootRef.current.style.overflow = "visible";
//     } else {
//       inputRef.current.style.right = "-120%";
//       setTimeout(() => (rootRef.current.style.overflow = "hidden"), 400);
//     }
//   };

//   const handleIsActive = ({ isActive }) => {
//     return {
//       borderBottom: isActive ? "1px black solid" : "none",
//       textShadow: isActive ? "2px 3px #33323280" : "none",
//     };
//   };

//   const handleOnClick = (e) => {
//     e.preventDefault();
//     navigateTo("/volunteer");
//   };

//   return (
//     <div className={styles.root} ref={rootRef}>
//       <div className={styles.logos}>
//         <img src={logo} alt="logo" className={styles.logo} />
//         <div className={styles.title}>
//           <span className={styles.span}>Chippenham</span>
//           <span className={styles.span}>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pride 2023
//           </span>
//         </div>
//       </div>
//       <nav ref={inputRef} className={styles.nav}>
//         {menuItems.map((menu, index) => {
//           return <MenuItems items={menu} key={index} />
//         })}
//         {/* <NavLink style={handleIsActive} className={styles.navlink} to="/">
//           The Event
//         </NavLink>
//         <NavLink style={handleIsActive} className={styles.navlink} to="about">
//           About
//         </NavLink>
//         <NavLink
//           style={handleIsActive}
//           className={styles.navlink}
//           to="volunteer"
//         >
//           Contact us!
//         </NavLink>
//         <NavLink style={handleIsActive} className={styles.navlink} to="support">
//           Sponsor Pride
//         </NavLink>
//         <NavLink
//           style={handleIsActive}
//           className={styles.navlink}
//           to="business"
//         >
//           For Businesses
//         </NavLink>
//         <NavLink style={handleIsActive} className={styles.navlink} to="team">
//           The Team
//         </NavLink> */}
//       </nav>
//       <div className={styles.hamburger}>
//         <Hamburger
//           onToggle={handleHamburger}
//           toggled={isOpen}
//           toggle={setOpen}
//           color="#FFFFFF"
//         />
//       </div>
//     </div>
//   );
// }

// export default Navbar;
