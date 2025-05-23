import { useState } from "react";
import styles from "../styles/Carousel.module.css";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

const testimonials = [
  {
    text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
    image: slider1,
    name: "Mr David",
  },
  {
    text: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    image: slider2,
    name: "Team Member",
  },
  {
    text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    image: slider3,
    name: "Rupesh Kanna",
  },
  {
    text: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
    image: slider4,
    name: "Team Member",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.title}>Success stories from 1mdm.com sellers</h2>
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>{testimonials[current].text}</p>
          </div>
          <div className={styles.imageSection}>
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className={styles.image}
            />
          </div>
        </div>

        <button className={styles.arrowRight} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
