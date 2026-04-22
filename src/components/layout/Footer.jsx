import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Company", path: "/about" },
    { name: "Our Business", path: "/business" },
    { name: "Our Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/life" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-16">
      
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        
        {/* ABOUT Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Ecliptic Insight
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-400 px-4 sm:px-0">
            Ecliptic empowers bold ideas and excellence to drive meaningful progress.
            We focus on delivering innovative solutions that create long-term value.
          </p>
        </div>

        {/* QUICK LINKS Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Quick Links
          </h3>
          
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-[#38BDF8] transition inline-block sm:inline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            
            {/* Phone */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaPhone className="text-[#38BDF8] text-sm sm:text-base flex-shrink-0" />
              <span className="break-all sm:break-normal">+91 9217358338</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaEnvelope className="text-[#38BDF8] text-sm sm:text-base flex-shrink-0" />
              <span className="break-all">info@eclipticinsight.com</span>
            </div>

            {/* Address */}
            <div className="flex items-start justify-center sm:justify-start gap-3">
              <FaMapMarkerAlt className="text-[#38BDF8] text-sm sm:text-base flex-shrink-0 mt-0.5" />
              <span className="text-left text-xs sm:text-sm">
                B-804, Tower-4, NX-One, TechZone-IV, Greater Noida West
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 sm:gap-5 pt-2 sm:pt-3 text-base sm:text-lg">
              
              <a
                href="https://www.linkedin.com/company/eclipticinsight/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/ecliptic_insight?igsh=bWNkMXd1dHh5dzd0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/people/Ecliptic-Insight-Ventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 sm:mt-12 pt-5 sm:pt-6">
        <div className="text-center text-xs sm:text-sm text-gray-400 px-4">
          © {new Date().getFullYear()} Ecliptic Insight Ventures. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;