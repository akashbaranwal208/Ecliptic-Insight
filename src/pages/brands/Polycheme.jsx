import { motion } from "framer-motion";
import { 
  FaShieldAlt, FaClock, FaCar, FaTractor, FaIndustry, 
  FaArrowRight, FaCheckCircle, FaStar, FaChartLine,
  FaUserCheck, FaThumbsUp, FaFlask, FaMicroscope,
  FaExternalLinkAlt
} from "react-icons/fa";
import tyreImg from "../../assets/images/polycheme-tyre.jpg";
import polychemeLogo from "../../assets/images/polycheme-logo.jpg";
import polychemeProduct from "../../assets/images/polycheme.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Polycheme = () => {
  // External website link
  const polychemeWebsite = "https://polycheme.com/";

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* HERO SECTION - Full screen image with cover */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-24">
        {/* Background Image - Full cover with proper positioning */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={tyreImg}
            alt="Polycheme Tyre Sealant"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          {/* Logo badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-white/90 text-xs font-semibold tracking-wider">POLYCHEME INNOVATION</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Advanced Tyre
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sealant Technology
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
          >
            Prevent punctures, reduce downtime, and maximize tyre life with
            Polycheme's high-performance sealant solutions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href={polychemeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Visit Official Website
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* REST OF THE SECTIONS REMAIN THE SAME */}
      {/* WHAT IS TYRE SEALANT */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
            <FaFlask className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">THE TECHNOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
            What is <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Tyre Sealant?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Polycheme tyre sealant is a liquid solution that coats the inside of
            your tyres, instantly sealing punctures and maintaining air pressure,
            ensuring uninterrupted performance.
          </p>
        </motion.div>
      </section>

      {/* LOGO & PRODUCT IMAGES SECTION */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={polychemeLogo}
                alt="Polycheme Logo"
                className="w-full h-auto object-contain max-h-48 mx-auto"
              />
              <p className="text-center text-gray-600 mt-4 text-sm">Trusted Chemical Innovation</p>
            </motion.div>

            {/* Product Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={polychemeProduct}
                alt="Polycheme Product"
                className="w-full h-auto object-contain max-h-48 mx-auto"
              />
              <p className="text-center text-gray-600 mt-4 text-sm">Advanced Sealant Formula</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-5">
              <FaStar className="text-yellow-400 text-xs" />
              <span className="text-white/80 text-xs font-semibold tracking-wider">WHY CHOOSE POLYCHEME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Instant puncture sealing", icon: <FaShieldAlt className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
              { title: "Reduced maintenance cost", icon: <FaChartLine className="text-3xl" />, color: "from-green-500 to-emerald-500" },
              { title: "Extended tyre lifespan", icon: <FaClock className="text-3xl" />, color: "from-purple-500 to-pink-500" },
              { title: "Improved safety", icon: <FaUserCheck className="text-3xl" />, color: "from-orange-500 to-red-500" },
              { title: "Works in extreme conditions", icon: <FaMicroscope className="text-3xl" />, color: "from-indigo-500 to-purple-500" },
              { title: "Suitable for all vehicles", icon: <FaCar className="text-3xl" />, color: "from-cyan-500 to-blue-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
                </div>
                <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
            <FaIndustry className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">MARKETS WE SERVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Logistics & Fleet", icon: <FaTractor className="text-2xl" />, desc: "Heavy-duty fleet protection", color: "from-blue-500 to-cyan-500" },
            { title: "Agriculture", icon: <FaTractor className="text-2xl" />, desc: "Farm equipment reliability", color: "from-green-500 to-emerald-500" },
            { title: "Construction", icon: <FaIndustry className="text-2xl" />, desc: "Rough terrain durability", color: "from-orange-500 to-red-500" },
            { title: "Personal Vehicles", icon: <FaCar className="text-2xl" />, desc: "Everyday driving safety", color: "from-purple-500 to-pink-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
              </div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
              <FaCheckCircle className="text-blue-600 text-xs" />
              <span className="text-blue-600 text-xs font-semibold tracking-wider">SIMPLE PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Injected into tyre", desc: "Easy application process with our specialized equipment", icon: <FaFlask className="text-xl" /> },
              { step: "02", title: "Coats inner surface", desc: "Forms a protective layer inside the tyre", icon: <FaShieldAlt className="text-xl" /> },
              { step: "03", title: "Seals punctures instantly", desc: "Automatically seals holes up to 6mm in diameter", icon: <FaCheckCircle className="text-xl" /> },
              { step: "04", title: "Maintains pressure", desc: "Ensures consistent tyre performance and safety", icon: <FaChartLine className="text-xl" /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-slate-800">{step.title}</h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY POLYCHEME */}
      <section className="py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-5">
              <FaThumbsUp className="text-white text-xs" />
              <span className="text-white text-xs font-semibold tracking-wider">WHY US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Polycheme?
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-8"></div>
            <p className="text-white/95 text-lg max-w-3xl mx-auto leading-relaxed">
              Our advanced chemical formulation ensures long-lasting protection,
              superior sealing performance, and unmatched reliability in real-world
              conditions. Trusted by professionals worldwide.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "1M+", label: "Tyres Protected" },
                { value: "50+", label: "Countries Served" },
                { value: "99%", label: "Customer Satisfaction" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i + 4}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Explore More Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={8}
              className="mt-12"
            >
              <a
                href={polychemeWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Explore More on Official Website
                <FaArrowRight className="text-sm" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <FaShieldAlt className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Protect Your Tyres?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today for a free consultation and demo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Contact Us
            </button>
            <a
              href={polychemeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Visit Polycheme.com
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Polycheme;