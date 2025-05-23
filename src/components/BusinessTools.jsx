import { useState } from "react";
import styles from "../styles/BusinessTools.module.css";
import storefrontImg from "../assets/storefront.png"; // replace with your image path
import advertisingImg from "../assets/advertising.png";
import analyticsImg from "../assets/analytics.png";
import supportImg from "../assets/support.png";

const data = {
  "Custom storefront": {
    title: "Set up a store that showcases your brand",
    description:
      "Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!",
    image: storefrontImg,
  },
  "Advertising tools": {
    title:
      "Increase exposure by up to 120% with a suite of smart advertising tools.",
    description:
      "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
    image: advertisingImg,
  },
  "Data and analytics": {
    title: "Optimize your every move with in-depth data and customer insights",
    description:
      "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
    image: analyticsImg,
  },
  "Customers support": {
    title: "Know you’re supported throughout your journey",
    description:
      "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
    image: supportImg,
  },
};

const BusinessTools = () => {
  const [selected, setSelected] = useState("Custom storefront");

  const content = data[selected];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftMenu}>
        {Object.keys(data).map((key) => {
          const [first, ...rest] = key.split(" ");
          return (
            <div
              key={key}
              className={`${styles.menuItem} ${
                selected === key ? styles.active : ""
              }`}
              onClick={() => setSelected(key)}
            >
              {first}
              <br />
              {rest.join(" ")}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.heading}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={content.image} alt={selected} />
        </div>
      </div>
    </div>
  );
};

export default BusinessTools;
