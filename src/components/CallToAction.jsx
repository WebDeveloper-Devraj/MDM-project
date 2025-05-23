import styles from "../styles/CallToAction.module.css";
import bg from "../assets/footerBanner.png";

const CallToAction = () => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <h2 className={styles.title}>Ready to Grow Your Business?</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.primary}>Start selling</button>
        <button className={styles.secondary}>Chat with consultant</button>
      </div>
    </div>
  );
};

export default CallToAction;
