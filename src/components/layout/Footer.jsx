import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
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
            {[
              "Home",
              "Who We Are",
              "Our Brands",
              "Business Consulting",
              "Contact",
              "Careers",
              "Resources",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#38BDF8] cursor-pointer transition"
              >
                {item}
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
              <span>+91 7897830124</span>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-[#38BDF8]" />
              <span>info@eclipticinsight.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#38BDF8]" />
              <span>
                B-810, Tower-4, NX-One, TechZone-IV, Greater Noida West
              </span>
            </div>

            {/* 🔥 Social Icons */}
            <div className="flex gap-4 pt-3 text-lg">

              <a className="hover:text-[#38BDF8] transition cursor-pointer">
                <FaLinkedin />
              </a>

              <a className="hover:text-[#38BDF8] transition cursor-pointer">
                <FaInstagram />
              </a>

              <a className="hover:text-[#38BDF8] transition cursor-pointer">
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