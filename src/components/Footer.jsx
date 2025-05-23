import styles from "../styles/Footer.module.css";
import { FaShoppingCart, FaHeadset } from "react-icons/fa";
import whiteLogo from "../assets/whiteLogo.png"; // Adjust path as needed

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <img src={whiteLogo} alt="1MDM Logo" className={styles.logo} />
            <p>
              One Medical Devices
              <br />
              Market Place
            </p>
          </div>

          <div className={styles.column}>
            <h4>Platform</h4>
            <ul>
              <li>Sell on 1MDM</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Brands</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Press Room</h4>
            <ul>
              <li>Images & B-roll</li>
            </ul>
            <h4>Policies</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Delivery Information</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Reach Us</h4>
            <ul>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.copyRight}>
        <p>© 2025 1MDM ⚡ by SuperLabs</p>
      </div>
    </>
  );
};

export default Footer;
