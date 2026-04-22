import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const getDashboardRoute = () => {
    if (role === "admin") return "/admin-dashboard";
    if (role === "employee") return "/employee-dashboard";
    if (role === "client") return "/client-dashboard";
    return "/";
  };

  const menuData = {
    who: {
      label: "Who we are",
      description:
        "Learn more about our journey, leadership, innovation, and the culture that drives our success.",
      showExplore: false,
      links: [
        { name: "About Company", path: "/about" },
        { name: "Leadership Team", path: "/team" },
        { name: "Our Businesses", path: "/business" },
        { name: "Our Locations", path: "/locations" },
      ],
    },
    services: {
      label: "Services",
      description:
        "We deliver comprehensive business solutions designed to drive efficiency, innovation, and sustainable growth.",
      link: "/services",
      showExplore: false,
      links: [
        { name: "Recruitment Consulting", path: "/recruitment" },
        { name: "Marketing Consulting", path: "/professional" },
        { name: "Business Analytics", path: "/business-consulting" },
         { name: "Web Development", path: "/web-development" },
      ],
    },
    brands: {
      label: "Brands",
      description:
        "We build and manage a diverse portfolio of brands across industries.",
      link: "/brands",
      showExplore: true,
      links: [{ name: "Visionary Dynamics", path: "/vd" },
        { name: "Polycheme", path: "/polycheme" },
        { name: "Archi", path: "/archi" },
        ],
    },
    careers: {
      label: "Careers",
      description:
        "Join our team and build a meaningful career with growth opportunities.",
      showExplore: false,
      links: ["Open Positions", "Internships"],
    },
    resources: {
      label: "Resources",
      description:
        "Explore insights, articles, and company updates.",
      showExplore: false,
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Life at Ecliptic", path: "/life" },
      ],
    },
  };

  return (
  <nav className="fixed top-0 left-0 w-full z-50">
    {/* NAVBAR */}
    <div
      className={`w-full transition-all duration-300
      bg-gradient-to-r from-[#7AA2CC] to-[#5C88B5]
      border-b border-white/20 shadow-sm
      ${scrolled ? "py-1.5" : "py-2.5"}
      `}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center">

        {/* LEFT - LOGO */}
        <div className="flex-shrink-0">
          <Link to="/">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white p-1 flex items-center justify-center shadow-md hover:scale-105 transition">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* CENTER - MENU */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-[#0F172A]">

            {/* HOME */}
            <li className="relative group">
              <Link
                to="/"
                className={`hover:text-[#1E40AF] transition ${
                  location.pathname === "/" ? "text-[#1E40AF]" : ""
                }`}
              >
                Home
              </Link>
              <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#1E40AF] group-hover:w-full transition-all duration-300"></span>
            </li>

            {/* OTHER MENUS */}
            {Object.keys(menuData).map((key) => (
              <li
                key={key}
                className="relative cursor-pointer group flex items-center gap-1 hover:text-[#1E40AF] transition"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                {menuData[key].label}
                <FaChevronDown className="text-[10px] opacity-60" />

                <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#1E40AF] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">

          {token ? (
            <>
              <span className="text-xs font-medium text-white bg-white/20 px-3 py-1 rounded-md backdrop-blur">
                Hello, {name}
              </span>

              <Link
                to={getDashboardRoute()}
                className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-red-500 text-white text-xs font-medium hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xs font-medium text-[#0F172A] hover:text-[#1E40AF] transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-3 py-1 rounded-md bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white text-xs font-medium hover:scale-105 transition"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* CONTACT */}
          <Link
            to="/contact"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition
            backdrop-blur-md border border-white/30
            ${
              location.pathname === "/contact"
                ? "bg-white/70 text-[#1E40AF]"
                : "bg-white/30 text-[#0F172A] hover:bg-white/60 hover:text-[#1E40AF]"
            }`}
          >
            <FaEnvelope className="text-xs" />
            <span className="text-xs">Contact</span>
          </Link>

        </div>
      </div>
    </div>

      {/* DROPDOWN */}
      {activeMenu && menuData[activeMenu] && (
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="rounded-lg backdrop-blur-xl bg-gradient-to-br from-[#DBEAFE]/95 to-[#BFDBFE]/85 border border-white/40 shadow-lg">

              <div className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* LEFT */}
                <div className="bg-white/60 p-4 rounded-lg border border-white/30">
                  <p className="text-[#334155] text-[13px]">
                    {menuData[activeMenu]?.description}
                  </p>

                  {menuData[activeMenu]?.showExplore && (
                    <div className="mt-3">
                      <Link
                        to={menuData[activeMenu]?.link}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-md text-[12px]"
                      >
                        Explore More <FaArrowRight />
                      </Link>
                    </div>
                  )}
                </div>

                {/* RIGHT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {menuData[activeMenu]?.links?.map((link, index) => (
                    <Link
                      key={index}
                      to={typeof link === "string" ? "#" : link.path}
                      className="group flex items-center justify-between p-2.5 rounded-lg bg-white/60 border border-white/30 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white">
                          <FaArrowRight className="text-[10px]" />
                        </div>

                        <span className="text-[#0F172A] text-xs font-medium group-hover:text-[#2563EB]">
                          {typeof link === "string" ? link : link.name}
                        </span>
                      </div>

                      <FaArrowRight className="text-[#94A3B8] text-[10px] group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;