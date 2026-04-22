import { motion } from "framer-motion";
import { 
  FaDraftingCompass, FaPalette, FaCube, FaCity, 
  FaLeaf, FaComments, FaArrowRight, FaStar, 
  FaTrophy, FaClock, FaUsers, FaCheckCircle,
  FaRulerCombined, FaBuilding, FaHome
} from "react-icons/fa";
import archiImg from "../../assets/images/archi-logo.png";
import goldBg from "../../assets/images/golds.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Archi = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* ================= HERO - WITH BACKGROUND IMAGE ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={goldBg}
            alt="Luxury Architecture Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-yellow-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
            <span className="text-white/90 text-xs font-semibold tracking-wider">PREMIUM ARCHITECTURE</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Archi
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent mt-2">
              Design & Architecture Excellence
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed"
          >
            Creating modern, functional, and aesthetic architectural solutions
            that transform spaces into experiences.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PRODUCT IMAGE SECTION - SIZE DECREASED ================= */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center"
          >
            <img
              src={archiImg}
              alt="Archi Architecture"
              className="w-full max-w-md h-auto object-contain mx-auto mb-6 rounded-2xl"
            />
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 text-sm mt-4">Innovative Architectural Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-full mb-5">
            <FaDraftingCompass className="text-amber-600 text-xs" />
            <span className="text-amber-600 text-xs font-semibold tracking-wider">WHO WE ARE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
            About <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Archi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Archi is a premium architectural and design brand focused on
            delivering modern, innovative, and sustainable design solutions.
            From concept to execution, we ensure every project reflects
            precision, creativity, and functionality.
          </p>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "150+", label: "Projects Completed", icon: <FaBuilding className="text-2xl" />, color: "from-amber-500 to-orange-500" },
              { value: "50+", label: "Happy Clients", icon: <FaUsers className="text-2xl" />, color: "from-green-500 to-emerald-500" },
              { value: "98%", label: "Satisfaction Rate", icon: <FaStar className="text-2xl" />, color: "from-purple-500 to-pink-500" },
              { value: "10+", label: "Years Experience", icon: <FaClock className="text-2xl" />, color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={i * 0.1}
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

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-full mb-5">
            <FaRulerCombined className="text-amber-600 text-xs" />
            <span className="text-amber-600 text-xs font-semibold tracking-wider">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Concept", desc: "Initial ideas and vision development", color: "from-amber-500 to-orange-500" },
            { step: "02", title: "Design", desc: "Detailed planning and blueprints", color: "from-purple-500 to-pink-500" },
            { step: "03", title: "Execution", desc: "Precision construction and implementation", color: "from-green-500 to-emerald-500" },
            { step: "04", title: "Delivery", desc: "Final touches and project handover", color: "from-orange-500 to-red-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              custom={i * 0.1}
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

      

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <FaBuilding className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore More About Archi
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover how Archi can transform your architectural vision into reality.
          </p>
          <a
            href="https://archi-website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Visit Official Website
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Archi;