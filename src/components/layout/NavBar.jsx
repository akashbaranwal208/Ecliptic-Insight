import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaChevronDown,
  FaEnvelope,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
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
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
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

  const toggleMobileDropdown = (key) => {
    if (mobileDropdownOpen === key) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(key);
    }
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
      links: [
        { name: "Visionary Dynamics", path: "/vd" },
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
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-10 flex items-center justify-between">
          
          {/* LEFT - LOGO (Bigger & No White Background) */}
          <div className="flex-shrink-0">
            <Link to="/">
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 flex items-center justify-center transition hover:scale-105">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* CENTER - MENU (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-4 lg:gap-6 xl:gap-10 text-[13px] lg:text-[15px] font-medium">
              {/* HOME */}
              <li className="relative group">
  <Link
    to="/"
    className="text-[#0F172A] hover:text-[#1E40AF] transition"
  >
    Home
  </Link>

  <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#1E40AF] group-hover:w-full transition-all duration-300"></span>
</li>

              {/* OTHER MENUS */}
              {Object.keys(menuData).map((key) => (
                <li
                  key={key}
                  className="relative cursor-pointer group flex items-center gap-1 transition text-[#0F172A] hover:text-[#1E40AF]"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menuData[key].label}
                  <FaChevronDown className="text-[8px] lg:text-[10px] opacity-60" />

                  <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#1E40AF] group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE (Desktop) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
            {token ? (
              <>
                <span className="text-xs font-medium text-white bg-white/20 px-2 py-1 lg:px-3 lg:py-1 rounded-md backdrop-blur">
                  Hello, {name}
                </span>

                <Link
                  to={getDashboardRoute()}
                  className="px-2 py-1 lg:px-3 lg:py-1 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-2 py-1 lg:px-3 lg:py-1 rounded-md bg-red-500 text-white text-xs font-medium hover:bg-red-600 transition"
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
                  className="px-2 py-1 lg:px-3 lg:py-1 rounded-md bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white text-xs font-medium hover:scale-105 transition"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`flex items-center gap-1.5 px-2 py-1 lg:px-3 lg:py-1 rounded-md transition
              backdrop-blur-md border border-white/30
              ${
                location.pathname === "/contact"
                  ? "bg-white/70 text-[#1E40AF]"
                  : "bg-white/30 text-[#0F172A] hover:bg-white/60 hover:text-[#1E40AF]"
              }`}
            >
              <FaEnvelope className="text-xs" />
              <span className="text-xs hidden sm:inline">Contact</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0F172A] text-xl p-2 hover:bg-white/20 rounded-lg transition"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* DESKTOP DROPDOWN */}
      {activeMenu && menuData[activeMenu] && (
        <div
          className="hidden md:block absolute top-full left-0 w-full"
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="rounded-lg backdrop-blur-xl bg-gradient-to-br from-[#DBEAFE]/95 to-[#BFDBFE]/85 border border-white/40 shadow-lg">
              <div className="px-4 py-4 md:px-5 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* LEFT */}
                <div className="bg-white/60 p-3 md:p-4 rounded-lg border border-white/30">
                  <p className="text-[#334155] text-[12px] md:text-[13px]">
                    {menuData[activeMenu]?.description}
                  </p>
                  {menuData[activeMenu]?.showExplore && (
                    <div className="mt-3">
                      <Link
                        to={menuData[activeMenu]?.link}
                        className="inline-flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-md text-[11px] md:text-[12px]"
                      >
                        Explore More <FaArrowRight />
                      </Link>
                    </div>
                  )}
                </div>
                {/* RIGHT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {menuData[activeMenu]?.links?.map((link, index) => (
                    <Link
                      key={index}
                      to={typeof link === "string" ? "#" : link.path}
                      className="group flex items-center justify-between p-2 md:p-2.5 rounded-lg bg-white/60 border border-white/30 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white">
                          <FaArrowRight className="text-[8px] md:text-[10px]" />
                        </div>
                        <span className="text-[#0F172A] text-[11px] md:text-xs font-medium group-hover:text-[#2563EB]">
                          {typeof link === "string" ? link : link.name}
                        </span>
                      </div>
                      <FaArrowRight className="text-[#94A3B8] text-[8px] md:text-[10px] group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE] backdrop-blur-xl border-b border-white/40 shadow-lg">
            <div className="p-4 space-y-3">
              
              {/* Mobile Home Link */}
              <Link
                to="/"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === "/"
                    ? "bg-white/60 text-[#1E3A8A] font-semibold"
                    : "text-[#0F172A] hover:bg-white/40"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Menu Items */}
              {Object.keys(menuData).map((key) => (
                <div key={key} className="border-t border-white/30 pt-2">
                  <button
                    onClick={() => toggleMobileDropdown(key)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-white/40 transition"
                  >
                    {menuData[key].label}
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-300 ${
                        mobileDropdownOpen === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {mobileDropdownOpen === key && (
                    <div className="ml-4 mt-2 space-y-2">
                      {/* Description */}
                      <div className="px-3 py-2 bg-white/50 rounded-lg">
                        <p className="text-[#334155] text-xs">
                          {menuData[key].description}
                        </p>
                      </div>
                      
                      {/* Links */}
                      {menuData[key].links?.map((link, index) => (
                        <Link
                          key={index}
                          to={typeof link === "string" ? "#" : link.path}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/40 hover:bg-white/60 transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white">
                            <FaArrowRight className="text-[8px]" />
                          </div>
                          <span className="text-[#0F172A] text-xs">
                            {typeof link === "string" ? link : link.name}
                          </span>
                        </Link>
                      ))}
                      
                      {/* Explore More Button */}
                      {menuData[key].showExplore && menuData[key].link && (
                        <Link
                          to={menuData[key].link}
                          className="inline-flex items-center gap-1.5 ml-3 px-3 py-1.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-md text-xs"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Explore More <FaArrowRight />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="border-t border-white/30 pt-3 space-y-2">
                {token ? (
                  <>
                    <div className="px-3 py-2 text-xs font-medium text-white bg-white/20 rounded-md backdrop-blur">
                      Hello, {name}
                    </div>
                    <Link
                      to={getDashboardRoute()}
                      className="block px-3 py-2 rounded-md bg-blue-600 text-white text-xs text-center hover:bg-blue-700 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 rounded-md bg-red-500 text-white text-xs font-medium hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md text-xs font-medium text-[#0F172A] hover:bg-white/40 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-3 py-2 rounded-md bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white text-xs font-medium text-center hover:scale-105 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                
                {/* Mobile Contact Button */}
                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-md transition text-xs font-medium
                  backdrop-blur-md border border-white/30
                  ${
                    location.pathname === "/contact"
                      ? "bg-white/70 text-[#1E40AF]"
                      : "bg-white/30 text-[#0F172A] hover:bg-white/60"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaEnvelope className="text-xs" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;