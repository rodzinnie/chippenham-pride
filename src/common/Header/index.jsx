import { Link } from 'react-router-dom'

import {Navbar} from "../";
import logo from "../../assets/logo.png";
import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navArea}>
        <Link to="/" className={styles.sample}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;