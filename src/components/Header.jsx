import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaHeadset } from "react-icons/fa";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <p>World's Largest Medical Equipment Market Place</p>
        <div className={styles.topLinks}>
          <a href="#">My account</a> | <a href="#">Contact Us</a>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img src={logo} alt="1MDM Logo" />
        </div>
        <nav className={styles.navLinks}>
          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Sell on 1MDM</a>
          <a href="#">Pricing</a>
        </nav>
      </div>

      <div className={styles.floatingButtons}>
        <button className={styles.redButton}>
          <FaShoppingCart /> <span>Start Selling</span>
        </button>
        <button className={styles.redButton}>
          <FaHeadset /> <span>Customer Service</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
