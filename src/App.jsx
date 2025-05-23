import "./App.css";
import BusinessTools from "./components/BusinessTools";
import CallToAction from "./components/CallToAction";
import Carousel from "./components/Carousel";
import ColoredHeadLine from "./components/ColoredHeadLine";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import HeroSection from "./components/HeroSection";
import Platform from "./components/Platform";
import RedSection from "./components/RedSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeadLine />
      <Platform />
      <RedSection />
      <ColoredHeadLine />
      <BusinessTools />
      <Carousel />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
