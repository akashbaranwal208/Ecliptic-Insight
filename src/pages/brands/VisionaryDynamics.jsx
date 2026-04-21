import { motion } from "framer-motion";
import { 
  FaLightbulb, FaChartLine, FaRocket, FaGlobe, 
  FaArrowRight, FaCheckCircle, FaStar, FaShieldAlt,
  FaUsers, FaBrain, FaCogs, FaBullseye, FaTrophy,
  FaMedal, FaHandshake, FaClock, FaSearch
} from "react-icons/fa";
import vdImg from "../../assets/images/VisionaryDynamics.jpg";
import vdLogo from "../../assets/images/VD.jpg"; // Main logo image

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

const VisionaryDynamics = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* HERO SECTION - Full screen with fixed positioning */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        {/* Background Image - Full cover */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={vdImg}
            alt="Visionary Dynamics"
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
            <span className="text-white/90 text-xs font-semibold tracking-wider">VISIONARY DYNAMICS</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Driving Innovation with
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Visionary Strategy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
          >
            Visionary Dynamics empowers businesses with strategic consulting,
            digital transformation, and innovation-driven growth solutions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8"
          >
            <a
              href="https://visionarydynamicsas-axbyczf9cnb8e4a8.eastus-01.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Visit Official Website
              <FaArrowRight className="text-sm" />
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

      {/* ABOUT SECTION - Enhanced */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
            <FaLightbulb className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">WHO WE ARE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Visionary Dynamics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Visionary Dynamics is focused on transforming businesses through
            forward-thinking strategies, digital innovation, and scalable
            solutions that drive sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* MAIN LOGO SECTION - Added here for prominence */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 text-center"
          >
            <img
              src={vdLogo}
              alt="Visionary Dynamics Logo"
              className="w-full max-w-md h-auto object-contain mx-auto mb-6"
            />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 text-sm mt-4">Empowering Innovation Worldwide</p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - Added */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Delivered", icon: <FaRocket className="text-2xl" />, color: "from-blue-500 to-cyan-500" },
              { value: "30+", label: "Global Clients", icon: <FaGlobe className="text-2xl" />, color: "from-green-500 to-emerald-500" },
              { value: "98%", label: "Client Satisfaction", icon: <FaStar className="text-2xl" />, color: "from-purple-500 to-pink-500" },
              { value: "15+", label: "Industry Experts", icon: <FaUsers className="text-2xl" />, color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.value}</h3>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
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
              <FaCogs className="text-cyan-400 text-xs" />
              <span className="text-white/80 text-xs font-semibold tracking-wider">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Business Strategy & Consulting", icon: <FaBrain className="text-2xl" />, color: "from-blue-500 to-cyan-500", desc: "Strategic planning for sustainable growth" },
              { title: "Digital Transformation", icon: <FaRocket className="text-2xl" />, color: "from-purple-500 to-pink-500", desc: "Embrace the future with digital innovation" },
              { title: "Operational Optimization", icon: <FaCogs className="text-2xl" />, color: "from-green-500 to-emerald-500", desc: "Streamline processes for efficiency" },
              { title: "Market Expansion", icon: <FaGlobe className="text-2xl" />, color: "from-orange-500 to-red-500", desc: "Enter new markets with confidence" },
              { title: "Innovation & Product Strategy", icon: <FaLightbulb className="text-2xl" />, color: "from-indigo-500 to-purple-500", desc: "Turn ideas into market-leading products" },
              { title: "Data-driven Decision Making", icon: <FaChartLine className="text-2xl" />, color: "from-cyan-500 to-blue-500", desc: "Leverage analytics for better outcomes" },
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
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH - Enhanced Timeline */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
            <FaBullseye className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Analyze", desc: "Deep dive into your business challenges", icon: <FaSearch className="text-xl" />, color: "from-blue-500 to-cyan-500" },
            { step: "02", title: "Strategize", desc: "Develop data-driven actionable plans", icon: <FaBrain className="text-xl" />, color: "from-purple-500 to-pink-500" },
            { step: "03", title: "Execute", desc: "Implement solutions with precision", icon: <FaRocket className="text-xl" />, color: "from-green-500 to-emerald-500" },
            { step: "04", title: "Scale", desc: "Grow and expand your success", icon: <FaChartLine className="text-xl" />, color: "from-orange-500 to-red-500" },
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
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY VISIONARY DYNAMICS - Enhanced */}
      <section className="py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-5">
              <FaMedal className="text-white text-xs" />
              <span className="text-white text-xs font-semibold tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Visionary Dynamics?
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Innovative thinking", desc: "Cutting-edge solutions for modern challenges", icon: <FaLightbulb className="text-2xl" />, color: "from-yellow-500 to-orange-500" },
              { title: "Client-centric approach", desc: "Your success is our top priority", icon: <FaHandshake className="text-2xl" />, color: "from-blue-500 to-cyan-500" },
              { title: "Scalable solutions", desc: "Grow with flexible, adaptable strategies", icon: <FaRocket className="text-2xl" />, color: "from-green-500 to-emerald-500" },
              { title: "Proven industry expertise", desc: "Years of experience across sectors", icon: <FaTrophy className="text-2xl" />, color: "from-purple-500 to-pink-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={4}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {[
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Commitment" },
              { value: "0", label: "Hidden Costs" },
              { value: "Fast", label: "Turnaround" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <h3 className="text-white font-bold text-lg">{item.value}</h3>
                <p className="text-white/60 text-xs">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <FaRocket className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Visionary Growth
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover how Visionary Dynamics can transform your business with innovative strategies and proven expertise.
          </p>
          <a
            href="https://visionarydynamicsas-axbyczf9cnb8e4a8.eastus-01.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Explore More
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default VisionaryDynamics;