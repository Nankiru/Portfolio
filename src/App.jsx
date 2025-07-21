"use client";
import React, { useState, useEffect } from "react";

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
  role: "Frontend Developer",
  seniority: "3+ Years",
  location: "Cambodia",
  skills: [
    "React",
    "JavaScript",
    "PHP",
    "Laravel",
    "TailwindCSS",
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
    // Main container with gradient, border, and shadow - theme-aware
    <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 border-zinc-300 relative rounded-lg border shadow-lg">
      {/* Top gradient border element */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-red-400 animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-orange-300 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="h-3 w-3 rounded-full bg-green-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-green-300 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="text-xs text-zinc-600 font-mono">
          nanui.js
        </div>
      </div>

      {/* Code Content Area */}
      <div className="overflow-hidden border-t-[2px] border-zinc-300 px-4 lg:px-8 py-4 lg:py-8 relative">
        {/* Background blur effects */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {/* Line Numbers */}
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Snippet with theme-aware colors */}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500">
                const
              </span>
              <span className="mr-2 text-violet-500">
                coder
              </span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-zinc-600">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800">name:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderData.name}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800">role:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderData.role}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800">year:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderData.seniority}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800">location:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderData.location}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800">skills:</span>
              <span className="text-zinc-600">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600">
                      &#39;
                    </span>
                    <span className="text-cyan-600">
                      {skill}
                    </span>
                    <span className="text-zinc-600">
                      &#39;
                    </span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-zinc-600">
                        ,{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600">{"],"}</span>
            </div>
            <div>
              <span className="text-zinc-600">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Window Footer */}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 pt-3 text-xs text-zinc-600 flex justify-between items-center">
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
      isActive
        ? "text-orange-500"
        : "text-gray-600 hover:text-orange-500"
    }`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-200 focus:ring-gray-300 shadow-sm border border-gray-200",
    outline:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- MOBILE NAVIGATION --- //
const MobileMenu = ({ isOpen, navItems }) => (
  <div
    className={`
        md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg
        transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
    `}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="pt-4 pb-4 border-t border-gray-200">
      <div className="px-5">
        <Button variant="outline" className="w-full">
          Buy Template
        </Button>
      </div>
    </div>
  </div>
);

// --- HEADER SECTION (IMPROVED) --- //
const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState("About");
  const [isLoaded, setIsLoaded] = useState(false);
  const navItems = ["About", "Features", "Blog", "Pricing", "Contact"];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header
      className={`relative z-20 w-full transform transition-all duration-1000 ease-out ${
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      {/* Header Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/80 to-white/80 backdrop-blur-lg border-b border-gray-200/50"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className={`flex-shrink-0 flex items-center gap-2 transform transition-all duration-700 delay-200 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <LogoIcon />
            <span className="text-xl font-bold text-gray-900">
              Portfolio
            </span>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-1 bg-white/60 p-1 rounded-full backdrop-blur-sm border border-gray-200/80 shadow-lg transform transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
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
                <NavLink
                  href={`#${item.toLowerCase()}`}
                  isActive={activeLink === item}
                >
                  {item}
                </NavLink>
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
            <Button variant="outline"><a href="https://t.me/nan_fullstack">Contact Me</a></Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
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
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      {/* Single background for both light and dark modes */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div
            className={`flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 transform transition-all duration-1000 delay-800 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-200 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 transform ${
                isLoaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <DotIcon />
              Welcome to my universe
            </div>

            <div className="relative">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 transform transition-all duration-1000 delay-1000 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                Hello <br />
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Khem Sopheanan
                </span>
              </h1>
            </div>

            <div
              className={`flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4 transform transition-all duration-800 delay-1200 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 border border-gray-700 rounded-full text-gray-200 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 cursor-default">
                Learning MARN Stack
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 border border-gray-700 rounded-full text-gray-200 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 cursor-default">
                Clean Code
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 border border-gray-700 rounded-full text-gray-200 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 cursor-default">
                Innovation
              </span>
            </div>

            <p
              className={`text-gray-600 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed transform transition-all duration-800 delay-1400 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              JavaScript lover 🖋️ | Oracle creator ⚡ | Creating frameworks and
              coding the future ✨
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto transform transition-all duration-800 delay-1600 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Learn More
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                <a href="https://t.me/nan_fullstack" target="_blank">
                  Contact Me
                </a>
              </button>
            </div>
          </div>

          {/* Right Column: Code Editor */}
          <div
            className={`order-1 lg:order-2 transform transition-all duration-1000 delay-600 ease-out ${
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

  useEffect(() => {
    setIsPageLoaded(true);

    // Add custom CSS for animations
    const styles = `
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

      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }

      .hover\\:shadow-3xl:hover {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }
    `;

    // Inject styles
    if (typeof document !== "undefined") {
      const styleSheet = document.createElement("style");
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden transform transition-all duration-1000 ease-out ${
        isPageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* The Header and Hero components have their own z-index which places them above the gradients. */}
      <HeaderSection />
      <main className="w-full">
        <Portfolio />
      </main>
    </div>
  );
}
