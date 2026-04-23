import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FaDraftingCompass, FaPalette, FaCube, FaCity, 
  FaLeaf, FaComments, FaArrowRight, FaStar, 
  FaTrophy, FaClock, FaUsers, FaCheckCircle,
  FaRulerCombined, FaBuilding, FaHome, FaGem,
  FaShieldAlt, FaGift, FaMedal
} from "react-icons/fa";
import archiImg from "../../assets/images/archi-logo.png";
import goldBg from "../../assets/images/golds.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const Archi = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">

      {/* ================= HERO - WITH PARALLAX EFFECT AND PROPER TOP PADDING ================= */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ scale }}
        >
          <img
            src={goldBg}
            alt="Luxury Architecture Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-yellow-500/15 to-amber-500/15 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
            <span className="text-white/95 text-xs font-semibold tracking-wider uppercase">
              Premium Silver & Lifestyle Brand
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Archi
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent mt-3">
              Premium Silver & Gifting Collection
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Archi brings together the elegance of pure silver with a curated range of 
            premium gifting and lifestyle products designed for modern living.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-7 h-11 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN PRODUCT IMAGE SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={scaleUp}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center border border-white/50"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src={archiImg}
                alt="Archi Architecture"
                className="w-full max-w-md h-auto object-contain mx-auto mb-6 relative z-10"
              />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-sm font-medium">Innovative Architectural Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-full mb-6">
            <FaGem className="text-amber-600 text-xs" />
            <span className="text-amber-600 text-xs font-semibold tracking-wider uppercase">Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-5">
            About <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Archi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <div className="space-y-6 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            <p>
              Archi is a premium lifestyle and gifting brand that blends the timeless elegance 
              of pure silver with a thoughtfully curated selection of artificial and contemporary products.
            </p>
            <p>
              While silver forms a core part of our identity, our collections extend beyond 
              traditional gifting to include décor and lifestyle pieces designed for everyday sophistication.
            </p>
            <p>
              Each Archi product reflects superior quality, refined craftsmanship, and modern aesthetics—
              whether it's a classic silver article or a beautifully designed artificial piece.
            </p>
            <p>
              Our goal is to create versatile collections that add meaning, elegance, and style 
              to celebrations, personal spaces, and modern lifestyles.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-r from-amber-50/50 via-orange-50/30 to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Products Sold", icon: <FaStar />, color: "from-amber-500 to-orange-500", delay: 0 },
              { value: "200+", label: "Happy Customers", icon: <FaUsers />, color: "from-green-500 to-emerald-500", delay: 0.1 },
              { value: "100%", label: "Quality Assurance", icon: <FaShieldAlt />, color: "from-purple-500 to-pink-500", delay: 0.2 },
              { value: "Premium", label: "Silver Collection", icon: <FaMedal />, color: "from-orange-500 to-red-500", delay: 0.3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={item.delay}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{item.value}</h3>
                <p className="text-gray-500 text-sm font-medium mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-full mb-6">
            <FaRulerCombined className="text-amber-600 text-xs" />
            <span className="text-amber-600 text-xs font-semibold tracking-wider uppercase">Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Craft & Collection
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Design", desc: "Modern and elegant product concepts", color: "from-amber-500 to-orange-500", icon: <FaPalette />, delay: 0 },
            { step: "02", title: "Crafting", desc: "Precision craftsmanship in every detail", color: "from-purple-500 to-pink-500", icon: <FaCube />, delay: 0.1 },
            { step: "03", title: "Curation", desc: "Carefully selected premium collections", color: "from-green-500 to-emerald-500", icon: <FaGift />, delay: 0.2 },
            { step: "04", title: "Delivery", desc: "Beautifully packaged for every occasion", color: "from-orange-500 to-red-500", icon: <FaTrophy />, delay: 0.3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              custom={item.delay}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <FaArrowRight className="text-amber-400 text-xl opacity-50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 md:px-16 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0 0 rgba(245, 158, 11, 0.4)", "0 0 0 20px rgba(245, 158, 11, 0)", "0 0 0 0 rgba(245, 158, 11, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <FaBuilding className="text-white text-3xl" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore More About Archi
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our premium silver and gifting collections designed 
            to bring elegance, meaning, and style to every occasion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Visit Official Website
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
              <FaComments className="text-sm" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Custom styles for smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Archi;