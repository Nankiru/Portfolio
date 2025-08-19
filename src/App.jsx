"use client";
import React, { useState, useEffect } from "react";
import Marquee from "./pages/Skill.jsx";
import Footer from "./pages/Footer.jsx";
import About from "./pages/About.jsx";

// Self-contained SVG icon for the "Welcome" badge
const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

// --- SVG ICONS FOR HEADER--- //
const LogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 6H10V10H6V6Z" fill="#F97316" />
    <path d="M14 6H18V10H14V6Z" fill="#F97316" />
    <path d="M6 14H10V18H6V14Z" fill="#F97316" />
    <path d="M14 14H18V18H14V14Z" fill="#F97316" fillOpacity="0.5" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6 cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6 cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const coderData = {
  name: "Khem Sopheanan",
  role: "Full Stack Developer",
  seniority: "3+ Years",
  location: "Phnom Penh, Cambodia ",
  skills: [
    "React",
    "JavaScript",
    "PHP",
    "Laravel Rest API",
    "TailwindCSS",
    "Bootstrap",
    "CSS",
    "Figma",
    "GitHub",
    "C++",
    "C#",
    "Java",
    "Oracle",
    "MySQL",
    "SQL Server",
    "Git",
  ],
};

// The styled code window component
const CoderProfileCard = () => {
  return (
    // Main container with gradient, border, and shadow - dark theme
    <div className="w-full mx-auto bg-gradient-to-r from-gray-800 to-gray-900 border-gray-600 relative rounded-lg border shadow-lg overflow-hidden">
      {/* Top gradient border element */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="px-2 sm:px-4 lg:px-8 py-3 sm:py-5 flex justify-between items-center bg-gray-900">
        <div className="flex flex-row space-x-1 sm:space-x-2">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-red-400 animate-pulse"></div>
          <div
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-orange-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-orange-300 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-green-300 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">Portfolio.js</div>
      </div>

      {/* Code Content Area */}
      <div className="overflow-hidden border-t-[2px] border-gray-600 px-2 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-8 relative">
        {/* Background blur effects */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {/* Line Numbers */}
          <div className="hidden sm:flex flex-col items-end pr-2 sm:pr-4 text-gray-500 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Snippet with dark theme colors */}
          <code className="font-mono text-xs sm:text-sm lg:text-base w-full overflow-x-auto">
            <div>
              <span className="mr-1 sm:mr-2 text-pink-400">const</span>
              <span className="mr-1 sm:mr-2 text-violet-400">coder</span>
              <span className="mr-1 sm:mr-2 text-pink-400">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div className="pl-3 sm:pl-6">
              <span className="text-white">name:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">{coderData.name}</span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-3 sm:pl-6">
              <span className="text-white">role:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">{coderData.role}</span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-3 sm:pl-6">
              <span className="text-white">year:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">{coderData.seniority}</span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-3 sm:pl-6">
              <span className="text-white">location:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-green-400">{coderData.location}</span>
              <span className="text-gray-400">&#39;,</span>
            </div>
            <div className="pl-3 sm:pl-6">
              <span className="text-white">skills:</span>
              <span className="text-gray-400">{"["}</span>
              <div className="pl-3 sm:pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-gray-400">&#39;</span>
                    <span className="text-cyan-400">{skill}</span>
                    <span className="text-gray-400">&#39;</span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="text-gray-400">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Window Footer */}
      <div className="px-2 sm:px-4 lg:px-8 pb-2 sm:pb-4 mt-2 sm:mt-4 border-t border-gray-600 pt-2 sm:pt-3 text-xs text-gray-400 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

// --- UI COMPONENTS --- //
const NavLink = ({ href, children, isActive = false }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
    }`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-gray-300",
    secondary:
      "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 shadow-sm border border-gray-600",
    outline:
      "bg-transparent text-white border border-gray-600 hover:bg-gray-800 focus:ring-gray-600",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- MOBILE NAVIGATION --- //
const MobileMenu = ({
  isOpen,
  navItems,
  handleNavClick,
  activeLink,
  isScrolled,
}) => (
  <div
    className={`
        md:hidden absolute top-full left-0 w-full backdrop-blur-sm border-t shadow-lg
        transition-all duration-300 ease-in-out z-50
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
        ${
          isScrolled
            ? "bg-gray-900/98 border-blue-400/30 shadow-blue-900/20"
            : "bg-gray-900/95 border-gray-700 shadow-black/20"
        }
    `}
  >
    <div className="px-3 pt-3 pb-3 space-y-2">
      {navItems.map((item, index) => (
        <button
          key={item}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("🎯 Mobile button clicked:", item);
            handleNavClick(item);
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            console.log("👆 Touch started on:", item);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            console.log("👆 Touch ended on:", item);
            handleNavClick(item);
          }}
          className={`mobile-nav-item w-full text-left block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform active:scale-95 ${
            activeLink === item
              ? isScrolled
                ? "text-blue-400 bg-blue-500/20 shadow-md border border-blue-400/30"
                : "text-orange-400 bg-gray-800 shadow-md"
              : isScrolled
              ? "text-gray-200 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-400/20 active:bg-blue-500/20"
              : "text-gray-300 hover:text-orange-400 hover:bg-gray-800 border border-transparent active:bg-gray-700"
          }`}
          style={{
            animationDelay: `${index * 50}ms`,
            minHeight: "48px", // Ensure touch-friendly size
            touchAction: "manipulation", // Prevent zoom on double-tap
            WebkitTapHighlightColor: "transparent", // Remove default tap highlight
            cursor: "pointer",
          }}
          aria-label={`Navigate to ${item} section`}
          type="button"
        >
          <div className="flex items-center justify-between pointer-events-none">
            <span>{item}</span>
            {activeLink === item && (
              <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse"></div>
            )}
          </div>
        </button>
      ))}
    </div>
    <div className="pt-3 pb-4 border-t border-gray-700/50 mx-3">
      <Button variant="outline" className="w-full h-12 text-base font-medium">
        <a
          href="https://t.me/nan_fullstack"
          className="w-full h-full flex items-center justify-center"
        >
          Contact Me
        </a>
      </Button>
    </div>
  </div>
);

// --- HEADER SECTION (IMPROVED) --- //
const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "Features", "About Me", "Contact"];

  useEffect(() => {
    setIsLoaded(true);

    // Add smooth scrolling CSS
    const styles = `
      html {
        scroll-behavior: smooth;
      }
    `;

    if (typeof document !== "undefined") {
      const styleSheet = document.createElement("style");
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    // Handle scroll to update active navigation and scroll state
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update scroll state for enhanced navbar visibility
      setIsScrolled(scrollY > 50);

      // Active navigation tracking
      const sections = navItems.map((item) => {
        const sectionId = item.toLowerCase().replace(/\s+/g, "");
        return document.getElementById(sectionId);
      });
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    // Convert navigation item to section ID format
    const sectionId = item.toLowerCase().replace(/\s+/g, "");
    const section = document.getElementById(sectionId);

    console.log("🔍 Navigation Debug:", {
      clicked: item,
      sectionId: sectionId,
      elementFound: !!section,
      isMobile: window.innerWidth < 768,
    });

    if (section) {
      // Calculate offset for sticky header (mobile-responsive)
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 60 : 80; // Smaller offset for mobile
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      console.log("📍 Scrolling to:", {
        sectionName: item,
        elementPosition,
        headerHeight,
        finalPosition: Math.max(0, offsetPosition),
      });

      // Smooth scroll to section with offset
      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
        behavior: "smooth",
      });

      setActiveLink(item);
      setIsMenuOpen(false); // Close mobile menu

      // Add a small delay to ensure smooth menu closing on mobile
      if (isMobile) {
        setTimeout(() => {
          console.log("✅ Mobile navigation completed for:", item);
        }, 300);
      }
    } else {
      console.error(
        "❌ Section not found for:",
        sectionId,
        "Available sections:",
        ["home", "features", "aboutme", "contact"].map((id) => ({
          id,
          exists: !!document.getElementById(id),
        }))
      );
    }
  };

  return (
    <header
      className="sticky top-[15px] left-0 right-0 z-50 w-full shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out"
      style={{
        backgroundColor: "rgba(17, 24, 39, 0.98)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
        position: "sticky",
        top: "0",
        zIndex: 9999,
      }}
    >
      {/* Enhanced Header Background with scroll-responsive styling */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-800/98 to-gray-900/98 shadow-2xl shadow-blue-900/20 backdrop-blur-lg border-b border-gray-700/50 transition-all duration-300"
      ></div>

      <div className=" w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div
            className={`flex-shrink-0 flex items-center gap-2 transform transition-all duration-700 delay-200 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <LogoIcon />
            <span className="text-base sm:text-lg md:text-xl font-bold text-white">
              Portfolio
            </span>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-1 p-1 rounded-full backdrop-blur-sm border shadow-lg transform transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } ${
              isScrolled
                ? "bg-gray-800/80 border-blue-400/50 shadow-blue-900/30"
                : "bg-gray-800/60 border-gray-600/80 shadow-gray-900/50"
            }`}
          >
            {navItems.map((item, index) => (
              <div
                key={item}
                className={`transform transition-all duration-500 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeLink === item
                      ? isScrolled
                        ? "text-blue-400 bg-blue-500/20 shadow-lg"
                        : "text-orange-400"
                      : isScrolled
                      ? "text-gray-200 hover:text-blue-400 hover:bg-blue-500/10"
                      : "text-gray-300 hover:text-orange-400"
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </nav>
          <div
            className={`hidden md:block transform transition-all duration-700 delay-500 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <Button variant="outline">
              <a href="https://t.me/nan_fullstack">Contact Me</a>
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset transform hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "text-gray-200 hover:text-blue-400 hover:bg-blue-500/10 focus:ring-blue-500 border border-blue-400/30"
                  : "text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-orange-500 border border-gray-600/50"
              }`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              style={{ minWidth: "44px", minHeight: "44px" }} // Touch-friendly size
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <div className="relative w-6 h-6">
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                >
                  <MenuIcon />
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                >
                  <CloseIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        navItems={navItems}
        handleNavClick={handleNavClick}
        activeLink={activeLink}
        isScrolled={isScrolled}
      />
    </header>
  );
};

// --- PORTFOLIO HERO SECTION --- //
const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-2 sm:p-4 md:p-6 lg:p-8 bg-black pt-20">
      {/* Dark background for all modes */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #0a0a23 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column: Text Content */}
          <div
            className={`flex flex-col gap-3 sm:gap-4 md:gap-6 items-start text-left order-2 lg:order-1 transform transition-all duration-1000 delay-800 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-white/10 border border-gray-600 rounded-full text-xs sm:text-sm text-gray-300 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform ${
                isLoaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <DotIcon />
              Welcome to my portfolio
            </div>

            <div className="relative w-full">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white transform transition-all duration-1000 delay-1000 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                Hello <br />
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Khem Sopheanan
                </span>
              </h1>
            </div>

            <div
              className={`flex flex-wrap gap-1 sm:gap-2 md:gap-3 my-2 sm:my-4 transform transition-all duration-800 delay-1200 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/10 border border-gray-600 rounded-full text-gray-300 text-xs sm:text-sm md:text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-default">
                Learning MARN Stack
              </span>
              <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/10 border border-gray-600 rounded-full text-gray-300 text-xs sm:text-sm md:text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-default">
                Clean Code
              </span>
              <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/10 border border-gray-600 rounded-full text-gray-300 text-xs sm:text-sm md:text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-default">
                Innovation
              </span>
            </div>

            <p
              className={`text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed transform transition-all duration-800 delay-1400 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              JavaScript lover 🖋️ | Oracle creator ⚡ | Creating frameworks and
              coding the future ✨
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6 w-full sm:w-auto transform transition-all duration-800 delay-1600 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Learn More
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent hover:bg-gray-800 border border-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95">
                <a href="https://t.me/nan_fullstack" target="_blank">
                  Contact Me
                </a>
              </button>
            </div>
          </div>

          {/* Right Column: Code Editor */}
          <div
            className={`order-1 lg:order-2 w-full max-w-full transform transition-all duration-1000 delay-600 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <CoderProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT (REFACTORED) --- //
export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [scrollTriggeredSections, setScrollTriggeredSections] = useState(
    new Set()
  );

  useEffect(() => {
    // Show loading screen for a bit longer to see animations
    const loadingTimer = setTimeout(() => {
      setShowLoadingScreen(false);
      // Then trigger page animations
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 200);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  // Separate useEffect for Intersection Observer
  useEffect(() => {
    if (!isPageLoaded) return;

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "-50px 0px -50px 0px", // Trigger slightly before element comes into view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Section visible:", entry.target.id); // Debug log
          setScrollTriggeredSections(
            (prev) => new Set([...prev, entry.target.id])
          );
        }
      });
    }, observerOptions);

    // Observe all sections after a delay to ensure DOM is ready
    const observeTimer = setTimeout(() => {
      const sectionsToObserve = ["home", "features", "aboutme", "contact"];
      sectionsToObserve.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(observeTimer);
    };
  }, [isPageLoaded]);

  useEffect(() => {
    // Add viewport meta tag for proper mobile rendering
    if (typeof document !== "undefined") {
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement("meta");
        viewportMeta.name = "viewport";
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";

      // Force dark background on body
      document.body.style.backgroundColor = "#000000";
      document.documentElement.style.backgroundColor = "#000000";
    }

    // Add custom CSS for animations and mobile fixes
    const styles = `
      html, body {
        background-color: #000000 !important;
        color: white;
      }
      
      /* Ensure sticky header works properly */
      body {
        padding-top: 0;
      }
      
      /* Enhanced sticky header styles */
      header[class*="sticky"] {
        position: -webkit-sticky !important;
        position: sticky !important;
        top: 0 !important;
        z-index: 9999 !important;
        will-change: transform;
        transform: translateZ(0);
      }
      
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes loading-pulse {
        0%, 100% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
      }

      @keyframes loading-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes scale-in {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slide-in-up {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slide-in-down {
        from {
          opacity: 0;
          transform: translateY(-50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes zoom-in {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes bounce-in {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(0.95);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes rotate-in {
        from {
          opacity: 0;
          transform: rotate(-180deg) scale(0.5);
        }
        to {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slide-in-left 0.8s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slide-in-right 0.8s ease-out forwards;
      }

      .animate-slide-in-up {
        animation: slide-in-up 0.8s ease-out forwards;
      }

      .animate-slide-in-down {
        animation: slide-in-down 0.8s ease-out forwards;
      }

      .animate-zoom-in {
        animation: zoom-in 0.6s ease-out forwards;
      }

      .animate-bounce-in {
        animation: bounce-in 0.8s ease-out forwards;
      }

      .animate-rotate-in {
        animation: rotate-in 1s ease-out forwards;
      }

      .animate-loading-pulse {
        animation: loading-pulse 2s ease-in-out infinite;
      }

      .animate-loading-spin {
        animation: loading-spin 1s linear infinite;
      }

      .animate-scale-in {
        animation: scale-in 0.8s ease-out forwards;
      }

      .hover\\:shadow-3xl:hover {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }

      /* Mobile specific fixes and enhancements */
      @media (max-width: 640px) {
        html, body {
          overflow-x: hidden;
          -webkit-text-size-adjust: 100%;
          background-color: #000000 !important;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Enhanced mobile header */
        header {
          background-color: rgba(17, 24, 39, 0.95) !important;
          position: -webkit-sticky !important;
          position: sticky !important;
          top: 0 !important;
          z-index: 9999 !important;
          backdrop-filter: blur(20px);
        }
        
        /* Mobile menu improvements */
        button[aria-controls="mobile-menu"] {
          min-width: 44px !important;
          min-height: 44px !important;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Mobile navigation items - Enhanced for better touch interaction */
        .mobile-nav-item {
          min-height: 48px !important;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent !important;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
        }
        
        .mobile-nav-item:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        /* Prevent zoom on input focus */
        input, select, textarea {
          font-size: 16px !important;
        }
        
        /* Ensure mobile menu is always clickable */
        .mobile-nav-item span {
          pointer-events: none; /* Ensure clicks go to the button */
        }
      }

      /* Fix for iOS Safari and sticky positioning */
      @supports (-webkit-touch-callout: none) {
        .min-h-screen {
          min-height: -webkit-fill-available;
        }
        
        html, body {
          background-color: #000000 !important;
        }
        
        /* Enhanced sticky support for iOS */
        header[class*="sticky"] {
          position: -webkit-sticky !important;
          position: sticky !important;
          top: 0 !important;
          z-index: 9999 !important;
        }
      }
      
      /* Additional mobile Safari fixes */
      @media screen and (max-device-width: 480px) {
        html, body {
          background-color: #000000 !important;
        }
      }
    `;

    // Inject styles
    if (typeof document !== "undefined") {
      const styleSheet = document.createElement("style");
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-all duration-1000 ${
        showLoadingScreen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <div className="animate-scale-in">
          <LogoIcon />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-white animate-loading-pulse">
            Loading Portfolio
          </h2>

          {/* Loading Dots */}
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-loading-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-loading-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-pink-500 rounded-full animate-loading-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-loading-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Main Content */}
      <div
        className={`relative w-full min-h-screen overflow-hidden bg-black transform transition-all duration-1000 ease-out ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: "#000000" }}
      >
        {/* The Header and Hero components have their own z-index which places them above the gradients. */}
        <HeaderSection />
        <main className="w-full">
          <section
            id="home"
            className={`transform transition-all duration-1000 ease-out ${
              scrollTriggeredSections.has("home")
                ? "animate-slide-in-up opacity-100"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Portfolio />
          </section>

          {/* Full-width Skills Marquee Section */}
          <section
            id="features"
            className={`w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 sm:py-16 md:py-20 border-t border-gray-700/50 transform transition-all duration-1000 ease-out ${
              scrollTriggeredSections.has("features")
                ? "animate-slide-in-left opacity-100"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center mb-8 sm:mb-12 transform transition-all duration-800 delay-200 ease-out ${
                  scrollTriggeredSections.has("features")
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Technical Expertise
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Technologies and frameworks I work with to build amazing
                  digital interfact with frameworks
                </p>
              </div>

              {/* Main Marquee */}
              <div
                className={`transform transition-all duration-1000 delay-400 ease-out ${
                  scrollTriggeredSections.has("features")
                    ? "animate-zoom-in opacity-100"
                    : "opacity-0 scale-75"
                }`}
              >
                <Marquee
                  className="py-4 sm:py-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-400/20 rounded-xl backdrop-blur-sm overflow-hidden mb-6"
                  reverse={false}
                  pauseOnHover={true}
                  speed={40}
                >
                  {coderData.skills.map((skill, index) => {
                    // Image URL mapping for each skill
                    const getSkillImage = (skillName) => {
                      const images = {
                        React:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                        JavaScript:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                        PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                        Laravel:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
                        TailwindCSS:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                        Figma:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                        GitHub:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                        "C++":
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                        "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                        Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                        Oracle:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
                        MySQL:
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                        "SQL Server":
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
                        Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                      };

                      return (
                        images[skillName] ||
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      );
                    };

                    return (
                      <span
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-base font-medium whitespace-nowrap mx-4 hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-3"
                        style={{
                          animationDelay: scrollTriggeredSections.has(
                            "features"
                          )
                            ? `${index * 100}ms`
                            : "0ms",
                        }}
                      >
                        <img
                          src={getSkillImage(skill)}
                          alt={`${skill} icon`}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            // Fallback to a default icon if image fails to load
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "inline-block";
                          }}
                        />
                        <span className="w-5 h-5 text-blue-300 hidden">⚡</span>
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </Marquee>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="aboutme"
            className={`transform transition-all duration-1000 ease-out ${
              scrollTriggeredSections.has("aboutme") || isPageLoaded
                ? "animate-slide-in-right opacity-100"
                : "opacity-0 translate-x-20"
            }`}
          >
            <About />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className={`w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 sm:py-20 md:py-24 border-t border-gray-700/50 transform transition-all duration-1000 ease-out ${
              scrollTriggeredSections.has("contact")
                ? "animate-slide-in-up opacity-100"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center transform transition-all duration-800 delay-200 ease-out ${
                  scrollTriggeredSections.has("contact")
                    ? "animate-bounce-in opacity-100"
                    : "opacity-0 scale-50"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Get In{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                  Ready to start your next project? Let's discuss how we can
                  work together to bring your ideas to life.
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ease-out ${
                    scrollTriggeredSections.has("contact")
                      ? "animate-zoom-in opacity-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  <a
                    href="https://t.me/nan_fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Contact on Telegram
                  </a>
                  <a
                    href="mailto:khemsopheanandev@gmail.com"
                    className="px-6 py-3 bg-transparent hover:bg-gray-800 border border-gray-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              scrollTriggeredSections.has("contact")
                ? "animate-slide-in-down opacity-100"
                : "opacity-0 -translate-y-20"
            }`}
          >
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
