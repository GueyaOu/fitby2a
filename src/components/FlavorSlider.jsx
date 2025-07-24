import { useGSAP } from "@gsap/react";
import { serviceLists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    // Only apply GSAP horizontal scroll on desktop
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });

      // Title animations only on desktop
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {serviceLists.map((service) => (
          <div
            key={service.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${service.rotation}`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-75"
            />
            
            {/* Strong dark overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 rounded-lg"></div>
            
            {/* Clean floating text design */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center max-w-full">
                {/* Main title with strong visibility */}
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase leading-tight tracking-wider drop-shadow-2xl">
                  {service.name}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
