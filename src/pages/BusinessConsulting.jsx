import { motion } from "framer-motion";
import { 
  FaChartLine, FaUsers, FaLightbulb, FaCheckCircle, FaArrowRight, 
  FaEnvelope, FaPhone, FaCalendarAlt, FaAward, FaTrophy, FaSmile, 
  FaClock, FaDatabase, FaSearch, FaHandshake, FaCogs, FaBrain, 
  FaClipboardList, FaRocket, FaShieldAlt, FaChartBar, FaCode, FaBriefcase
} from "react-icons/fa";

// Import your background image (adjust the path as needed)
import heroBg from "../assets/images/business-consulting.jpg"; // Add your image path here

const services = [
  {
    title: "Data Analysis",
    desc: "Transform raw data into actionable insights using advanced analytics.",
    icon: <FaDatabase className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Market Research",
    desc: "Identify opportunities and optimize business strategies.",
    icon: <FaSearch className="text-2xl" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Stakeholder Management",
    desc: "Bridge the gap between technical teams and business stakeholders.",
    icon: <FaHandshake className="text-2xl" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "Process Optimization",
    desc: "Improve efficiency and reduce operational costs.",
    icon: <FaCogs className="text-2xl" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Strategic Planning",
    desc: "Align business goals with data-driven strategies.",
    icon: <FaBrain className="text-2xl" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Requirements Analysis",
    desc: "Gather and define clear business requirements.",
    icon: <FaClipboardList className="text-2xl" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    gradient: "from-pink-600 to-rose-600"
  },
];

const stats = [
  { value: "50+", label: "Projects Completed", icon: <FaTrophy className="text-3xl" />, color: "from-yellow-500 to-orange-500" },
  { value: "30+", label: "Happy Clients", icon: <FaSmile className="text-3xl" />, color: "from-green-500 to-emerald-500" },
  { value: "5+", label: "Years Experience", icon: <FaClock className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
  { value: "95%", label: "Success Rate", icon: <FaAward className="text-3xl" />, color: "from-purple-500 to-pink-500" },
];

const skills = [
  { name: "Data Analysis", value: "95%", color: "from-blue-500 to-cyan-500" },
  { name: "Business Strategy", value: "90%", color: "from-purple-500 to-pink-500" },
  { name: "Requirements Gathering", value: "92%", color: "from-green-500 to-emerald-500" },
  { name: "Process Modeling", value: "88%", color: "from-orange-500 to-red-500" },
  { name: "Stakeholder Management", value: "94%", color: "from-indigo-500 to-purple-500" },
];

const competencies = [
  "Agile Methodologies", "SQL & Databases", "Data Visualization", "Process Modeling",
  "Requirements Management", "Risk Analysis", "Cost-Benefit Analysis", "Stakeholder Management"
];

const BusinessConsulting = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* HERO SECTION - With Background Image */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Business Analytics Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
          {/* Additional overlay gradient for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        {/* Decorative blurred circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-xs font-semibold tracking-wider">
                  EXPERT BUSINESS ANALYSIS
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Business Analyst
              </h1>
              <p className="text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-4">
                Turning Data into Decisions
              </p>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Unlock your business potential with data-driven insights and strategic analysis.
                Transform complex problems into actionable solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Consultation
                <FaCalendarAlt className="text-sm" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="dashboard"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-4">
            <span className="text-blue-600 text-xs font-semibold tracking-wider">WHAT WE OFFER</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Comprehensive Business Analysis Services
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I provide end-to-end business analysis solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${item.gradient.split(' ')[1]} 0%, ${item.gradient.split(' ')[3]} 100%)` }}>
              </div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-2xl`}></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`text-xs font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent inline-flex items-center gap-1`}>
                    Learn more <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        
        <div className="relative max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full mb-5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-yellow-600 text-xs font-semibold tracking-wider">OUR ACHIEVEMENTS</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Impact in Numbers
              </span>
            </h2>

            <div className="flex justify-center mb-4">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivering measurable results for businesses worldwide
            </p>

            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
                </div>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl transition-all border border-gray-100">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & COMPETENCIES SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50"></div>
        
        <div className="relative max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xs font-semibold tracking-wider">
                MY EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical & Business Expertise
              </span>
            </h2>

            <div className="flex justify-center mb-5">
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              With years of experience across various industries, I bring a unique blend of 
              <span className="font-semibold text-indigo-600"> technical knowledge</span> and 
              <span className="font-semibold text-purple-600"> business acumen</span> to every project.
            </p>

            <div className="absolute -top-10 left-0 w-40 h-40 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 right-0 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT - Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-4">
                <span className="text-blue-600 text-xs font-semibold tracking-wider">EXPERTISE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Professional Skills
              </h2>

              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className={`font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT - Core Competencies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full mb-4">
                <span className="text-purple-600 text-xs font-semibold tracking-wider">STRENGTHS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Core Competencies
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {competencies.map((item, i) => {
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-green-500 to-emerald-500",
                    "from-orange-500 to-red-500",
                    "from-indigo-500 to-purple-500",
                    "from-pink-500 to-rose-500",
                    "from-teal-500 to-cyan-500",
                    "from-yellow-500 to-orange-500",
                  ];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                        style={{ background: `linear-gradient(135deg, ${colors[i % colors.length].split(' ')[1]} 0%, ${colors[i % colors.length].split(' ')[3]} 100%)` }}>
                      </div>
                      <div className="relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group-hover:border-transparent">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center`}>
                            <FaCheckCircle className="text-white text-[10px]" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Discuss Your Business Needs
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ready to take your business to the next level? Get in touch for a free consultation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span>connect@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span>+91 XXXXXXXX</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4">Send us a message</h3>
            <form className="space-y-4">
              <input 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Full Name" 
              />
              <input 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Email" 
              />
              <input 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Phone" 
              />
              <textarea 
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                rows="3"
                placeholder="Your message"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;