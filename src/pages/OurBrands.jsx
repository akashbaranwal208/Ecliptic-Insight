import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaArrowRight,
  FaPalette,
  FaIndustry,
  FaRocket
} from "react-icons/fa";

import archiLogo from "../assets/images/archi.png";
import polychemeLogo from "../assets/images/polycheme.jpg";
import vdLogo from "../assets/images/VD.jpg"; // ✅ ADD THIS

const brands = [
  {
    name: "Archi",
    tagline: "Innovating Modern Architecture",
    desc: "Archi delivers cutting-edge architectural and design solutions, focusing on sustainability, aesthetics, and functionality. We help businesses and individuals bring their vision to life through modern infrastructure and creative design.",
    highlights: [
      "Sustainable building design",
      "Modern infrastructure solutions",
      "Residential & commercial projects"
    ],
    industry: "Architecture & Design",
    logo: archiLogo,
    link: "https://archi.com",
    gradient: "from-blue-600 to-cyan-600",
    lightBg: "bg-blue-50",
    icon: <FaPalette className="text-blue-600" />
  },
  {
    name: "Polycheme",
    tagline: "Advanced Chemical Solutions",
    desc: "Polycheme specializes in high-performance chemical solutions designed for industrial excellence. Our products ensure quality, safety, and scalability for modern manufacturing and production needs.",
    highlights: [
      "Industrial-grade chemical products",
      "High safety and quality standards",
      "Scalable manufacturing support"
    ],
    industry: "Chemical Industry",
    logo: polychemeLogo,
    link: "https://polycheme.com",
    gradient: "from-purple-600 to-pink-600",
    lightBg: "bg-purple-50",
    icon: <FaIndustry className="text-purple-600" />
  },
  {
    name: "Visionary Dynamics",
    tagline: "Driving Smart Business Transformation",
    desc: "Visionary Dynamics empowers businesses with strategic consulting, digital solutions, and scalable systems designed to accelerate growth. From IT infrastructure to marketing and operational optimization, we help organizations build future-ready ecosystems.",
    highlights: [
      "Digital transformation & IT solutions",
      "Marketing & growth strategies",
      "Business process optimization"
    ],
    industry: "Business Consulting & Technology",
    logo: vdLogo,
    link: "https://visionarydynamicsas-axbyczf9cnb8e4a8.eastus-01.azurewebsites.net/",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    lightBg: "bg-cyan-50",
    icon: <FaRocket className="text-cyan-600" />
  }
];

const OurBrands = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 px-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="text-gray-600 text-xs font-medium tracking-wider">
              OUR PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight"
          >
            Our Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base max-w-2xl mx-auto"
          >
            Explore our portfolio of brands that drive innovation, excellence, and
            long-term impact across industries.
          </motion.p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${brand.gradient} blur-xl opacity-20`}></div>
              </div>

              {/* Top Line */}
              <div className={`h-1 w-full bg-gradient-to-r ${brand.gradient}`}></div>

              <div className="p-8 md:p-10">

                {/* LOGO */}
                <div className="mb-10">
                  <div className={`w-full ${brand.lightBg} rounded-2xl p-10 md:p-12 flex justify-center items-center`}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full max-w-lg object-contain"
                      style={{ maxHeight: "220px" }}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                    {brand.name}
                  </h2>
                  <p className={`text-base font-semibold bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}>
                    {brand.tagline}
                  </p>
                </div>

                {/* INDUSTRY */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span className="text-xs font-medium text-gray-700">
                      {brand.industry}
                    </span>
                  </div>
                </div>

                {/* DESC */}
                <p className="text-gray-600 text-sm text-center mb-8 max-w-3xl mx-auto">
                  {brand.desc}
                </p>

                {/* HIGHLIGHTS */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {brand.highlights.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border"
                    >
                      <FaCheckCircle className="text-green-500 text-xs" />
                      <span className="text-gray-700 text-xs font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <FaRocket className="mx-auto text-3xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-slate-800 mb-3">
          Ready to collaborate?
        </h3>
        <p className="text-gray-500 mb-6">
          Partner with our brands to drive innovation and excellence.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white border rounded-xl shadow-md hover:bg-gray-50"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default OurBrands;