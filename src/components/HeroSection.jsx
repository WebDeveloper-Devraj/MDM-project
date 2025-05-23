import styles from "../styles/HeroSection.module.css";
import globeImg from "../assets/globe.png";
const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${globeImg})`,
      }}
    >
      <div className={styles.left}>
        <p className={styles.subHeading}>Sell on 1mdm.com</p>
        <h1 className={styles.heading}>
          Reach millions of B2B buyers globally
        </h1>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Start selling</button>
          <button className={styles.secondaryBtn}>Chat with consultant</button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stats}>
          <div>
            <h2>26,000,000</h2>
            <p>active buyers globally</p>
          </div>
          <div>
            <h2>400,000</h2>
            <p>product inquiries daily</p>
          </div>
          <div>
            <h2>200</h2>
            <p>countries and regions represented</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
