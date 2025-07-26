import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    // Set initial clip-path for both mobile and desktop
    gsap.set(".video-box", {
      clipPath: "circle(6% at 50% 50%)"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.2,
        pin: false,
      },
    });

    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power2.inOut",
      duration: 1,
    });

  }, []);

  return (
    <section className="vd-pin-section" style={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden' }}>
      <div 
        className="video-box"
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative'
        }}
      >
        {isMobile ? (
          <video 
            src="/istockphoto-2158341185-640_adpp_is.mp4" 
            playsInline 
            muted 
            loop 
            autoPlay
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        ) : (
          <iframe
            src="https://www.youtube.com/embed/WAiQ1JJ2qb4?autoplay=1&mute=1&loop=1&playlist=WAiQ1JJ2qb4&controls=0&showinfo=0&rel=0"
            title="FitByM2A Video"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              border: 'none'
            }}
            allow="autoplay; encrypted-media"
          />
        )}

        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
