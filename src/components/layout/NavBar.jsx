import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaChevronDown,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const menuData = {
    who: {
      label: "Who we are",
      description:
        "We deliver excellence through innovative solutions, strategic thinking, and a commitment to creating long-term value for our customers and communities.",
      buttons: [
        { label: "About Us", link: "/about" },
        { label: "Why Ecliptic?", link: "/why-ecliptic" },
      ],
    },
    services: {
      label: "Services",
      description:
        "We deliver comprehensive business solutions designed to drive efficiency, innovation, and sustainable growth.",
      link: "/services",
      showExplore: true,
      links: [
        "Business Consulting",
        "E-commerce Solutions",
        "Manufacturing Solutions",
        "Import & Export",
      ],
    },
    brands: {
      label: "Brands",
      description:
        "We build and manage a diverse portfolio of brands across industries.",
      link: "/brands",
      showExplore: true,
      links: ["Archi", "Polychem"],
    },
    careers: {
      label: "Careers",
      description:
        "Join our team and build a meaningful career with growth opportunities.",
      showExplore: false,
      links: ["Open Positions", "Life at Company", "Internships"],
    },
    resources: {
      label: "Resources",
      description:
        "Explore insights, articles, and company updates.",
      showExplore: false,
      links: ["Blog", "Gallery"],
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      bg-gradient-to-r from-[#93C5FD] to-[#60A5FA] border-b border-[#3B82F6]
      ${scrolled ? "py-2 shadow-md" : "py-4"}`}
    >
      {/* Navbar */}
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-[auto_1fr_auto] items-center">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="h-14 w-14 rounded-full overflow-hidden border border-[#60A5FA] shadow-sm bg-white flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="h-[150%] w-[150%] object-contain translate-x-[-10%]"
              />
            </div>
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-[15px] text-[#0F172A] font-medium">
          {Object.keys(menuData).map((key) => (
            <li
              key={key}
              className="relative cursor-pointer group flex items-center gap-1 hover:text-[#1E40AF]"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              {menuData[key].label}
              <FaChevronDown className="text-xs" />

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div className="hidden md:flex justify-end">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#DBEAFE] cursor-pointer transition">
            <FaEnvelope className="text-sm" />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* 🔥 MEGA MENU */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 w-full bg-[#E6EEFF]/95 backdrop-blur-xl border-t border-[#93C5FD] shadow-2xl animate-[fadeIn_0.25s_ease]"
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1200px] mx-auto px-8 py-10 grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="bg-[#F0F5FF]/90 p-6 rounded-2xl border border-[#DCE7FF] shadow-sm">
              <p className="text-[#334155] text-base leading-relaxed">
                {menuData[activeMenu].description}
              </p>

              {menuData[activeMenu].buttons ? (
                <div className="flex gap-3 mt-5">
                  {menuData[activeMenu].buttons.map((btn, index) => (
                    <Link
                      key={index}
                      to={btn.link}
                      className="px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 text-sm"
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              ) : menuData[activeMenu].showExplore ? (
                <div className="mt-5">
                  <Link
                    to={menuData[activeMenu].link}
                    className="px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 text-sm"
                  >
                    Explore More →
                  </Link>
                </div>
              ) : null}
            </div>

            {/* RIGHT */}
            {menuData[activeMenu]?.links && (
              <div className="grid sm:grid-cols-2 gap-4">
                {menuData[activeMenu].links.map((link, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-4 rounded-xl bg-[#F0F5FF]/90 border border-[#DCE7FF] hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white text-sm shadow-md animate-[float_3s_ease-in-out_infinite]">
                        <FaArrowRight />
                      </div>

                      <span className="text-[#0F172A] font-medium group-hover:text-[#2563EB] transition">
                        {link}
                      </span>
                    </div>

                    <FaArrowRight className="text-[#94A3B8] group-hover:text-[#2563EB] transform group-hover:translate-x-1 transition" />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;