import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Navbar entrance animation
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(".navbar", 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(".nav-logo",
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo(".nav-links li",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

    // Scroll-triggered navbar background change
    gsap.to(".navbar", {
      backgroundColor: "rgba(0, 61, 122, 0.95)",
      backdropFilter: "blur(15px)",
      boxShadow: "0 8px 32px rgba(0, 61, 122, 0.3)",
      scrollTrigger: {
        trigger: "body",
        start: "100px top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Mobile menu animation
    if (isMenuOpen) {
      gsap.fromTo(".mobile-menu",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(".mobile-menu li",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      gsap.to(".mobile-menu", {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsMenuOpen(false)
      });
    } else {
      setIsMenuOpen(true);
    }
  };

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À Propos", href: "/qui-sommes-nous" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-3 transition-all duration-300">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="nav-logo">
            <Link to="/">
              <img 
                src="/logo-new.png" 
                alt="FIT BY M2A" 
                className="md:w-12 w-10 cursor-pointer hover:scale-110 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href}
                  className="text-white font-medium text-sm tracking-wide hover:text-blue-300 transition-colors duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 ml-2">
                Réserver
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-60 relative"
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-gray-900 to-black z-40 md:hidden">
          <div className="pt-20 px-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    onClick={toggleMenu}
                    className="block text-white text-xl font-semibold hover:text-blue-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <button 
                  onClick={toggleMenu}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Réserver
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
