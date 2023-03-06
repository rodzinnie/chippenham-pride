import { Link } from 'react-router-dom'

import {Navbar} from "../";
import logo from "../../assets/logo.png";
import styles from './index.module.css'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;