import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection2 = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message2", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message2", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content2 p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content2",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message2",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll2",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll2", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content2 p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content message-content2" style={{backgroundColor: '#0a0a0a', color: '#ffffff'}}>
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message2">En tant que spécialiste dans le </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll2"
            >
              <div className="md:pb-5 pb-3 px-5" style={{background: 'linear-gradient(135deg, #003d7a, #002a5c, #001f47)'}}>
                <h2 style={{color: '#ffffff'}}>Le recrutement</h2>
              </div>
            </div>

            <h1 className="second-message2">
            pour votre établissement aquatique, notre engagement se manifeste par la création de partenariats durables. Forts d'un réseau spécialisé, nous mettons un point d'honneur à vous offrir des professionnels hautement qualifiés.
            soigneusement sélectionnés pour répondre aux besoins spécifiques de chacun de nos client. Notre approche stratégique vise à garantir non seulement la compétence technique de nos recrues, mais aussi une adéquation parfaite avec la culture
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
              et les valeurs de votre établissement,
               assurant ainsi une contribution positive et une expérience exceptionnelle que vous offrez à vos membres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection2;