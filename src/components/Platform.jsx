import styles from "../styles/PlatForm.module.css";

const Platform = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?si=R7P2hERBg9hKbDqO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.heroText}>
          <p>Connect with millions of business buyers from around the world.</p>
          <p>
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p>
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platform;
