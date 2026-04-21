import { motion } from "framer-motion";
import { 
  FaCode, FaSearch, FaBullhorn, FaEnvelope, FaLinkedin,
  FaArrowRight, FaCheckCircle, FaRocket, FaChartLine, 
  FaUsers, FaTrophy, FaClock, FaGlobe, FaMobile, 
  FaDatabase, FaPalette, FaRobot, FaAd, FaVideo,
  FaComments, FaChartBar, FaCog, FaShieldAlt,
  FaStar, FaMedal, FaHandshake, FaAward
} from "react-icons/fa";

// Import background image
import professionalBg from "../assets/images/professional.jpg";

const ProfessionalConsulting = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={professionalBg} 
            alt="Professional Consulting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-indigo-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/30 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-white font-semibold text-xs tracking-wider">PROFESSIONAL CONSULTING</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Professional Consulting <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed"
          >
            From building powerful digital platforms to scaling your brand through
            data-driven marketing — we provide complete business growth solutions.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="relative py-14 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Delivered", icon: <FaRocket className="text-2xl" />, color: "text-blue-600" },
              { value: "98%", label: "Client Satisfaction", icon: <FaUsers className="text-2xl" />, color: "text-emerald-600" },
              { value: "50+", label: "Expert Team", icon: <FaTrophy className="text-2xl" />, color: "text-amber-600" },
              { value: "24/7", label: "Support Available", icon: <FaClock className="text-2xl" />, color: "text-purple-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <div className={`w-14 h-14 rounded-full ${item.color.replace('text', 'bg')}/10 flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-800">{item.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-5">
            <FaStar className="text-blue-600 text-xs" />
            <span className="text-blue-600 text-xs font-semibold tracking-wider">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-5"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer end-to-end digital services to help your business thrive in the modern era
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { icon: <FaCode className="text-3xl" />, title: "Web Development", desc: "Custom, scalable websites built with modern tech", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
            { icon: <FaSearch className="text-3xl" />, title: "SEO", desc: "Boost rankings & drive organic traffic", color: "from-green-500 to-emerald-500", bg: "bg-green-50" },
            { icon: <FaBullhorn className="text-3xl" />, title: "Social Media", desc: "Engage audiences across all platforms", color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
            { icon: <FaEnvelope className="text-3xl" />, title: "Email Marketing", desc: "Personalized campaigns that convert", color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
            { icon: <FaLinkedin className="text-3xl" />, title: "LinkedIn Marketing", desc: "B2B lead generation at scale", color: "from-indigo-500 to-purple-500", bg: "bg-indigo-50" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEBSITE DEVELOPMENT */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-5">
                <FaCode className="text-blue-600 text-xs" />
                <span className="text-blue-600 text-xs font-semibold tracking-wider">TECHNOLOGY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
                Website Design & Development
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We build scalable, high-performance websites using modern technologies
                and industry best practices. Our development process ensures your website 
                is fast, secure, and optimized for conversions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Learn more about development <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { icon: <FaCode className="text-xl" />, title: "Frontend", desc: "React, HTML, CSS, Tailwind, JavaScript", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
                { icon: <FaDatabase className="text-xl" />, title: "Backend", desc: "Node.js, Express, APIs, Database", color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
                { icon: <FaMobile className="text-xl" />, title: "Mobile Optimization", desc: "Fully responsive across all devices", color: "from-green-500 to-emerald-500", bg: "bg-green-50" },
                { icon: <FaCog className="text-xl" />, title: "Development Process", desc: "Planning → Design → Development → Testing → Deployment", color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 text-white`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-5">
                <FaSearch className="text-emerald-400 text-xs" />
                <span className="text-emerald-400 text-xs font-semibold tracking-wider">RANK HIGHER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Search Engine Optimization (SEO)
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Improve your search rankings and drive organic traffic with our
                advanced SEO strategies. We use data-driven approaches to ensure 
                your business appears in front of the right audience at the right time.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Keyword Research & Strategy",
                  "On-page Optimization",
                  "Technical SEO",
                  "Link Building",
                  "Local SEO",
                  "Performance Tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400 text-sm" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Boost your rankings today <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto text-white shadow-xl">
                    <FaChartLine className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-6">SEO Results You Can Measure</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Organic Traffic Increase</span>
                      <span className="text-emerald-400 font-semibold">150%+</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Keyword Rankings</span>
                      <span className="text-emerald-400 font-semibold">200+</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA MARKETING */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full mb-5">
              <FaBullhorn className="text-purple-600 text-xs" />
              <span className="text-purple-600 text-xs font-semibold tracking-wider">SOCIAL MEDIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Social Media Marketing
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Grow your brand and engage your audience across all major platforms with our comprehensive social media strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Facebook Marketing", desc: "Targeted campaigns to increase reach and engagement", icon: <FaAd className="text-2xl" />, color: "from-blue-500 to-cyan-500" },
              { title: "Instagram Growth", desc: "Visual storytelling and engagement strategies", icon: <FaPalette className="text-2xl" />, color: "from-purple-500 to-pink-500" },
              { title: "Twitter Marketing", desc: "Real-time engagement and brand awareness", icon: <FaComments className="text-2xl" />, color: "from-sky-500 to-blue-500" },
              { title: "TikTok Marketing", desc: "Short-form video content for viral growth", icon: <FaVideo className="text-2xl" />, color: "from-pink-500 to-rose-500" },
              { title: "Video Marketing", desc: "Engaging video content across platforms", icon: <FaRobot className="text-2xl" />, color: "from-red-500 to-orange-500" },
              { title: "Targeted Advertising", desc: "Precision targeting for maximum ROI", icon: <FaChartBar className="text-2xl" />, color: "from-green-500 to-emerald-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL MARKETING */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-full mb-5">
                <FaEnvelope className="text-orange-600 text-xs" />
                <span className="text-orange-600 text-xs font-semibold tracking-wider">EMAIL MARKETING</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
                Email Marketing
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Build relationships with your customers through personalized and
                automated email campaigns. Our email marketing strategies drive engagement,
                nurture leads, and increase customer lifetime value.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Campaign Strategy",
                  "Automation & Funnels",
                  "Lead Nurturing",
                  "Analytics & Optimization",
                  "A/B Testing",
                  "List Segmentation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-orange-500 text-sm" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Start your email campaign <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto text-white shadow-xl">
                  <FaEnvelope className="text-3xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Email Marketing Metrics</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Open Rate</span>
                    <span className="text-orange-600 font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Click-through Rate</span>
                    <span className="text-orange-600 font-semibold">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Conversion Rate</span>
                    <span className="text-orange-600 font-semibold">8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LINKEDIN MARKETING */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-md">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                  <FaLinkedin className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">B2B Lead Generation</h3>
                <div className="space-y-4">
                  {[
                    { label: "Leads Generated", value: "5000+", color: "text-blue-600" },
                    { label: "Conversion Rate", value: "15%", color: "text-emerald-600" },
                    { label: "ROI", value: "300%", color: "text-purple-600" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                      <span className="text-gray-600 font-medium">{item.label}</span>
                      <span className={`font-bold ${item.color} text-lg`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full mb-5">
                <FaLinkedin className="text-blue-600 text-xs" />
                <span className="text-blue-600 text-xs font-semibold tracking-wider">B2B MARKETING</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5">
                LinkedIn Marketing
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Generate high-quality B2B leads and build authority in your industry.
                Our LinkedIn marketing strategies help you connect with decision-makers
                and grow your professional network.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Profile Optimization",
                  "Lead Generation",
                  "Content Strategy",
                  "Outreach Campaigns",
                  "Sales Navigator",
                  "Analytics & Reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500 text-sm" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Start LinkedIn marketing <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-5 backdrop-blur-sm">
              <FaMedal className="text-blue-400 text-xs" />
              <span className="text-blue-400 text-xs font-semibold tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Businesses Trust Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We deliver measurable results and exceptional service to help your business grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Data-Driven Approach", desc: "Every decision is backed by data and analytics", icon: <FaChartLine className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
              { title: "Experienced Team", desc: "Industry experts with years of proven success", icon: <FaUsers className="text-3xl" />, color: "from-purple-500 to-pink-500" },
              { title: "Proven Results", desc: "Track record of delivering measurable ROI", icon: <FaAward className="text-3xl" />, color: "from-green-500 to-emerald-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all h-full">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <FaHandshake className="text-white text-3xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Let's Grow Your Business Together
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Get in touch for a free consultation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              Get Free Consultation
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalConsulting;