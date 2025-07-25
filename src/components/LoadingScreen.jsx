import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(() => {
    // Loading animation
    gsap.fromTo(".loading-logo", 
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    gsap.fromTo(".loading-text", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
    );

    // Progress bar animation
    gsap.fromTo(".progress-bar", 
      { scaleX: 0 },
      { scaleX: 1, duration: 3, ease: "power2.inOut" }
    );
  }, []);

  useGSAP(() => {
    if (isComplete) {
      // Exit animation
      const tl = gsap.timeline({
        onComplete: () => onLoadComplete()
      });
      
      tl.to(".loading-content", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      })
      .to(".loading-screen", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.2");
    }
  }, [isComplete, onLoadComplete]);

  useEffect(() => {
    const loadResources = async () => {
      // Simulate loading different resources
      const resources = [
        // Load images
        () => new Promise(resolve => {
          const images = [
            '/logo-new.png',
            '/bc-hero.mp4',
            '/nos-services/slide1.png',
            '/nos-services/slide2.jpeg',
            '/nos-services/slide3.png',
            '/nos-services/slide4.png',
            '/nos-services/slide5.jpg'
          ];
          
          let loaded = 0;
          images.forEach(src => {
            const element = src.endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
            element.onload = element.oncanplaythrough = () => {
              loaded++;
              if (loaded === images.length) resolve();
            };
            element.onerror = () => {
              loaded++;
              if (loaded === images.length) resolve();
            };
            element.src = src;
          });
        }),
        
        // Load fonts and CSS
        () => new Promise(resolve => setTimeout(resolve, 500)),
        
        // Initialize GSAP and other libraries
        () => new Promise(resolve => setTimeout(resolve, 300)),
        
        // Additional setup time
        () => new Promise(resolve => setTimeout(resolve, 200))
      ];

      let currentProgress = 0;
      const progressIncrement = 100 / resources.length;

      for (let i = 0; i < resources.length; i++) {
        try {
          await resources[i]();
        } catch (error) {
          console.warn('Resource loading failed:', error);
        }
        
        currentProgress += progressIncrement;
        setProgress(Math.min(currentProgress, 100));
        
        // Small delay between each step for visual feedback
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Ensure we reach 100% and wait a moment before completing
      setProgress(100);
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    };

    loadResources();
  }, []);

  return (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 z-[9999] flex items-center justify-center">
      <div className="loading-content text-center">
        {/* Logo */}
        <div className="loading-logo mb-8">
          <img 
            src="/logo-new.png" 
            alt="FitByM2A" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-white">FitByM2A</h1>
        </div>

        {/* Loading Text */}
        <div className="loading-text mb-12">
          <p className="text-xl text-blue-200 mb-2">Chargement en cours...</p>
          <p className="text-sm text-blue-300">Préparation de votre expérience aquatique</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-blue-800/30 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="progress-bar bg-gradient-to-r from-blue-400 to-blue-300 h-full rounded-full origin-left"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <p className="text-blue-200 text-sm font-medium">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="loading-dot w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="loading-dot w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="loading-dot w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;