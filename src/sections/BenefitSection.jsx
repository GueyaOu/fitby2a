import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const BenefitSection = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-expertise", {
      type: "words",
    });
    const secondTextSplit = SplitText.create(".second-expertise", {
      type: "words",
    });
    const thirdTextSplit = SplitText.create(".third-expertise", {
      type: "words",
    });

    gsap.to(firstTextSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".first-expertise",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secondTextSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".second-expertise",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(thirdTextSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".third-expertise",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-expertise">En tant que spécialiste dans le recrutement pour votre établissement aquatique, notre engagement se manifeste par la création de partenariats durables. Forts d'un réseau spécialisé, nous mettons un point d'honneur à vous offrir des professionnels hautement qualifiés</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="md:pb-5 pb-3 px-5" style={{background: 'linear-gradient(135deg, #003d7a, #002a5c, #001f47)'}}>
                <h2 style={{color: '#ffffff'}}>soigneusement</h2>
              </div>
            </div>

            <h1 className="second-expertise">
              sélectionnés pour répondre aux besoins spécifiques de chacun de nos client. Notre approche stratégique vise à garantir non seulement la compétence technique de nos recrues, mais aussi une adéquation parfaite avec la culture
            </h1>

            <h1 className="third-expertise">
              et les valeurs de votre établissement, assurant ainsi une contribution positive et une expérience exceptionnelle que vous offrez à vos membres.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
