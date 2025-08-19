"use client";
import React from "react";

// A simple utility to conditionally join class names, similar to the 'clsx' library.
const clsx = (...args) => args.filter(Boolean).join(" ");

// The MagicContainer component creates a container with a glowing border effect that follows the mouse.
const MagicContainer = ({ children, className }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative rounded-3xl p-[1px] transition-all duration-300",
        className
      )}
      style={{
        background: isHovered
          ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, #9E7AFF, #38bdf8, #FF5C5C, #FE8BBB, transparent 80%)`
          : "rgba(255, 255, 255, 0.05)", // Faint border for non-hovered state
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

// About Section Component
const About = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [animatedElements, setAnimatedElements] = React.useState(new Set());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("About component loaded"); // Debug log
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for individual elements within About section
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedElements(
            (prev) => new Set([...prev, entry.target.dataset.animateId])
          );
        }
      });
    }, observerOptions);

    // Observe elements after a delay to ensure DOM is ready
    const observeTimer = setTimeout(() => {
      const elementsToObserve = [
        "header",
        "story",
        "skills",
        "experience",
        "cta",
      ];
      elementsToObserve.forEach((id) => {
        const element = document.querySelector(`[data-animate-id="${id}"]`);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(observeTimer);
    };
  }, [isLoaded]);

  // Skills data
  const skills = [
    {
      name: "Frontend Development",
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    { name: "React", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
    {
      name: "UI/UX Design (Figma)",
      level: 75,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Backend Development",
      level: 70,
      color: "from-red-500 to-rose-500",
    },
    {
      name: "Database Management",
      level: 80,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "BookingTicketMovie",
      company: "Khem Sopheanan",
      period: "2022 - Present",
      description:
      "Leading frontend development projects using Tailwind, and poppular backend framework is laravel with Mysql as a database.",
      technologies: ["Laravel", "Tailwind CSS", "Javascript", "MySQL"],
      link: ["https://www.nandaimondsale.online"],
    },
    {
      title: "Ecommerce Website",
      company: "Khem Sopheanan",
      period: "2021 - 2022",
      description:
        "Developed and maintained web applications with focus on user experience and performance.",
      technologies: ["Laravel", "Tailwind CSS", "Javascript", "MySQL"],
      link: ["https://www.nanecommerce.baby"],
    },
    {
      title: "React Js Calling API Project",
      company: "Khem Sopheanan",
      period: "2020 - 2021",
      description:
      "Started in web development, learning and building with open-source projects.",
      technologies: ["React Js ", "Tailwind CSS", 'Javascript'],
      link: ["https://nan-market.vercel.app"],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          data-animate-id="header"
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ease-out ${
            animatedElements.has("header") || isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology, problem-solving, and building real-world projects. Eager to learn with clean code
            and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* About Content */}
          <MagicContainer
            data-animate-id="story"
            className={`transform transition-all duration-1000 delay-200 ease-out ${
              animatedElements.has("story") || isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm{" "}
                  <span className="text-blue-400 font-semibold">
                    Khem Sopheanan
                  </span>
                  , I am a highly motivated and self-taught web developer
                  skilled in React, Laravel Rest API, and MySQL. I am currently
                  a third-year, first-semester (Y3S1) Software Engineering
                  student. Passionate about technology, problem-solving, and
                  building real-world projects. Eager to learn, grow, and
                  contribute to a collaborative development team.
                </p>
              </div>
            </div>
          </MagicContainer>

          {/* Skills Section */}
          <MagicContainer
            data-animate-id="skills"
            className={`transform transition-all duration-1000 delay-400 ease-out ${
              animatedElements.has("skills") || isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width:
                            animatedElements.has("skills") || isLoaded
                              ? `${skill.level}%`
                              : "0%",
                          transitionDelay: `${200 + index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MagicContainer>
        </div>

        {/* Experience Section */}
        <div
          data-animate-id="experience"
          className={`transform transition-all duration-1000 delay-600 ease-out ${
            animatedElements.has("experience") || isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <MagicContainer
                key={index}
                className={`h-full transform transition-all duration-800 ease-out ${
                  animatedElements.has("experience") || isLoaded
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-10 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay:
                    animatedElements.has("experience") || isLoaded
                      ? `${index * 150}ms`
                      : "0ms",
                }}
              >
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className=" font-semibold mb-1">
                      By: <span className="text-blue-400">{exp.company}</span>
                    </p>
                    {/* <p className="text-gray-500 text-sm">{exp.period}</p> */}
                  </div>

                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 ">
                    {exp.link &&
                      exp.link.map((link, techIndex) => (
                        <a
                          key={techIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs font-semibold border border-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          Live Demo
                        </a>
                      ))}
                  </div>
                </div>
              </MagicContainer>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          data-animate-id="cta"
          className={`text-center mt-16 transform transition-all duration-1000 delay-800 ease-out ${
            animatedElements.has("cta") || isLoaded
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
        >
        </div>
      </div>
    </section>
  );
};

export { MagicContainer };
export default About;
