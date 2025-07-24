import HeroSection from "../sections/HeroSection";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import MessageSection2 from "../sections/MessageSection2";
import VideoPinSection from "../components/VideoPinSection";
import FooterSection from "../sections/FooterSection";

const HomePage = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <MessageSection />
        <FlavorSection />
        <MessageSection2 />
        <VideoPinSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;