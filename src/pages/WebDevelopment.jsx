import { motion } from "framer-motion";
import { 
  FaCode, FaMobile, FaDatabase, FaFigma, FaReact, 
  FaVuejs, FaNodeJs, FaWordpress, FaArrowRight, 
  FaCheckCircle, FaStar, FaClock, FaRocket,
  FaDesktop, FaServer, FaShieldAlt, FaTachometerAlt
} from "react-icons/fa";

// Try to import images with fallback handling
let webImg, frontendImg, backendImg, mobileImg;

try {
  webImg = require("../../assets/images/web.jpg");
} catch (e) {
  webImg = null;
}

try {
  frontendImg = require("../../assets/images/frontend.jpg");
} catch (e) {
  frontendImg = null;
}

try {
  backendImg = require("../../assets/images/backend.jpg");
} catch (e) {
  backendImg = null;
}

try {
  mobileImg = require("../../assets/images/mobile.jpg");
} catch (e) {
  mobileImg = null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const WebDevelopment = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-24 px-6 md:px-16 pt-32">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
              <FaCode className="text-blue-600 text-xs" />
              <span className="text-blue-600 text-xs font-semibold tracking-wider">TECHNOLOGY</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              Website Design &
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Development</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We build scalable, high-performance websites using modern
              technologies and industry best practices. Our development
              process ensures your website is fast, secure, and optimized
              for conversions.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500 text-sm" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Learn more
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.2}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { title: "Frontend", icon: <FaDesktop className="text-2xl" />, desc: "React, Vue, Angular", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
              { title: "Backend", icon: <FaServer className="text-2xl" />, desc: "Node.js, Python, PHP", color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
              { title: "Mobile Optimization", icon: <FaMobile className="text-2xl" />, desc: "Fully responsive design", color: "from-green-500 to-emerald-500", bg: "bg-green-50" },
              { title: "Development Process", icon: <FaRocket className="text-2xl" />, desc: "Agile & efficient workflow", color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION WITH IMAGES (FALLBACK TO GRADIENTS) ================= */}
      {[
        {
          title: "Custom Website Design",
          desc: "Unique, brand-focused designs that create lasting impressions.",
          color: "from-pink-500 to-purple-500",
          image: webImg,
          icon: <FaStar className="text-4xl" />,
          features: ["Unique branding", "User-centered design", "Modern aesthetics"]
        },
        {
          title: "Frontend Development",
          desc: "Modern UI development with fast, responsive interfaces.",
          color: "from-blue-500 to-cyan-500",
          image: frontendImg,
          icon: <FaCode className="text-4xl" />,
          features: ["React/Vue/Angular", "Responsive layouts", "Interactive components"]
        },
        {
          title: "Mobile Optimization",
          desc: "Perfect experience across all devices and screen sizes.",
          color: "from-green-500 to-teal-500",
          image: mobileImg,
          icon: <FaMobile className="text-4xl" />,
          features: ["Touch-friendly", "Fast loading", "Cross-device testing"]
        },
        {
          title: "Backend Development",
          desc: "Secure, scalable backend systems and APIs.",
          color: "from-purple-500 to-indigo-500",
          image: backendImg,
          icon: <FaDatabase className="text-4xl" />,
          features: ["RESTful APIs", "Database design", "Security best practices"]
        },
      ].map((item, i) => (
        <section key={i} className="py-20 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={i * 0.1}
                className={i % 2 !== 0 ? 'md:order-2' : ''}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white mb-5`}>
                  <span className="text-xs font-semibold tracking-wider">Service {i + 1} / 4</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-500 text-sm" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={i * 0.1 + 0.2}
                className={`h-80 rounded-2xl overflow-hidden shadow-xl relative ${i % 2 !== 0 ? 'md:order-1' : ''}`}
              >
                {item.image ? (
                  <>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40`}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white font-semibold text-xl">{item.title}</p>
                    </div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center text-white`}>
                    <div className="mb-4">{item.icon}</div>
                    <p className="text-white font-semibold text-xl">{item.title}</p>
                    <p className="text-white/80 text-sm mt-2">Coming Soon</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ================= TIMELINE SECTION ================= */}
      <section className="py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-5">
              <FaClock className="text-cyan-400 text-xs" />
              <span className="text-white/80 text-xs font-semibold tracking-wider">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Development Timeline
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-12"></div>
          </motion.div>

          <div className="grid md:grid-cols-7 gap-4">
            {[
              { step: "01", title: "Planning", icon: <FaRocket className="text-xl" /> },
              { step: "02", title: "Design", icon: <FaFigma className="text-xl" /> },
              { step: "03", title: "Content", icon: <FaCode className="text-xl" /> },
              { step: "04", title: "Development", icon: <FaDesktop className="text-xl" /> },
              { step: "05", title: "Testing", icon: <FaShieldAlt className="text-xl" /> },
              { step: "06", title: "Launch", icon: <FaRocket className="text-xl" /> },
              { step: "07", title: "Maintenance", icon: <FaTachometerAlt className="text-xl" /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={i * 0.05}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <p className="text-white font-semibold text-sm">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES SECTION ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
            <FaCode className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Technologies We Use
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", icon: <FaReact className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
            { name: "Vue", icon: <FaVuejs className="text-3xl" />, color: "from-green-500 to-emerald-500" },
            { name: "Node.js", icon: <FaNodeJs className="text-3xl" />, color: "from-green-600 to-teal-600" },
            { name: "MongoDB", icon: <FaDatabase className="text-3xl" />, color: "from-green-500 to-emerald-500" },
            { name: "Next.js", icon: <FaReact className="text-3xl" />, color: "from-gray-700 to-gray-900" },
            { name: "Figma", icon: <FaFigma className="text-3xl" />, color: "from-purple-500 to-pink-500" },
            { name: "WordPress", icon: <FaWordpress className="text-3xl" />, color: "from-blue-600 to-cyan-600" },
            { name: "Tailwind", icon: <FaCode className="text-3xl" />, color: "from-cyan-500 to-blue-500" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              custom={i * 0.05}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${tech.color.split(' ')[1]} 0%, ${tech.color.split(' ')[3]} 100%)` }}>
              </div>
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-3 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-white text-3xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch for a free consultation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;