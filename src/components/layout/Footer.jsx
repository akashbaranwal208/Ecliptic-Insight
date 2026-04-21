import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { Link } from "react-router-dom"; // ✅ IMPORTANT

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Company", path: "/about" },
    { name: "Our Business", path: "/business" },
    { name: "Our Brands", path: "/brands" }, // adjust if different
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/life" }, // or /careers if exists
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-300 pt-16 pb-8 px-6 md:px-16">

      {/* 🔹 Top Section */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-12">

        {/* 🔥 ABOUT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Ecliptic Insight
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Ecliptic empowers bold ideas and excellence to drive meaningful progress.
            We focus on delivering innovative solutions that create long-term value.
          </p>
        </div>

        {/* 🔥 QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-[#38BDF8] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 text-[#38BDF8]" />
              <span>+91 9217358338</span>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-[#38BDF8]" />
              <span>info@eclipticinsight.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#38BDF8]" />
              <span>
                B-804, Tower-4, NX-One, TechZone-IV, Greater Noida West
              </span>
            </div>

            {/* 🔥 Social Icons */}
            <div className="flex gap-4 pt-3 text-lg">

              <a
                href="https://www.linkedin.com/company/eclipticinsight/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/ecliptic_insight?igsh=bWNkMXd1dHh5dzd0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/people/Ecliptic-Insight-Ventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition"
              >
                <FaFacebook />
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* 🔹 Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ecliptic Insight Ventures. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;