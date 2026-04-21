import { motion } from "framer-motion";
import { 
  FaSearch, FaUsers, FaChartLine, FaSmile, FaHandshake, FaBuilding, 
  FaRocket, FaClock, FaTrophy, FaUserCheck, FaGlobe, FaBrain, 
  FaShieldAlt, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLaptopCode, FaHeartbeat, FaChartBar, FaIndustry, FaShoppingCart,
  FaBolt, FaCheckCircle, FaCalendarAlt, FaUserTie, FaNetworkWired,
  FaCompass, FaLightbulb, FaFileAlt, FaComments, FaFileSignature, FaUserGraduate
} from "react-icons/fa";

// Import background image
import recruitmentBg from "../assets/images/recruitment.jpg";

const services = [
  {
    title: "Sourcing & Screening",
    desc: "AI-powered candidate matching and thorough vetting process",
    icon: <FaSearch className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Talent Pipeline Management",
    desc: "Build and nurture a strong talent pool for future hiring needs",
    icon: <FaUsers className="text-2xl" />,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Analytics & Reporting",
    desc: "Data-driven insights to optimize recruitment strategies",
    icon: <FaChartLine className="text-2xl" />,
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "Candidate Experience",
    desc: "Seamless communication and engagement throughout hiring",
    icon: <FaSmile className="text-2xl" />,
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Onboarding Support",
    desc: "Smooth transition from offer acceptance to day one",
    icon: <FaHandshake className="text-2xl" />,
    color: "from-indigo-500 to-purple-500",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Employer Branding",
    desc: "Enhance your company image to attract top talent",
    icon: <FaBuilding className="text-2xl" />,
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-600 to-rose-600"
  },
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery", 
    desc: "Understand your hiring needs, company culture, and role requirements.",
    icon: <FaCompass className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    details: "Deep dive into your business goals"
  },
  { 
    step: "02", 
    title: "Sourcing", 
    desc: "Identify top candidates through multiple sourcing channels.",
    icon: <FaUsers className="text-2xl" />,
    color: "from-purple-500 to-pink-500",
    details: "Multi-channel talent acquisition"
  },
  { 
    step: "03", 
    title: "Screening", 
    desc: "Evaluate candidates with structured assessments and interviews.",
    icon: <FaFileAlt className="text-2xl" />,
    color: "from-green-500 to-emerald-500",
    details: "Thorough evaluation process"
  },
  { 
    step: "04", 
    title: "Interview", 
    desc: "Coordinate interviews and streamline communication.",
    icon: <FaComments className="text-2xl" />,
    color: "from-orange-500 to-red-500",
    details: "Seamless coordination"
  },
  { 
    step: "05", 
    title: "Offers", 
    desc: "Manage offer process and negotiations efficiently.",
    icon: <FaFileSignature className="text-2xl" />,
    color: "from-indigo-500 to-purple-500",
    details: "Streamlined offer management"
  },
  { 
    step: "06", 
    title: "Onboarding", 
    desc: "Ensure smooth onboarding and candidate experience.",
    icon: <FaUserGraduate className="text-2xl" />,
    color: "from-pink-500 to-rose-500",
    details: "Exceptional candidate experience"
  },
];

const RecruitmentConsulting = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* HERO SECTION - WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={recruitmentBg} 
            alt="Recruitment Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
          {/* Additional gradient overlay for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          {/* Brand color overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-white/90 text-xs font-semibold tracking-wider">RPO SOLUTIONS</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Hiring with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Strategic RPO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-gray-200 text-lg mb-8"
            >
              Scale your workforce efficiently, reduce time-to-hire, and access top talent globally.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Start Free Consultation
              <FaArrowRight className="text-sm" />
            </motion.button>
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
            Comprehensive RPO Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end recruitment solutions tailored to your business needs
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
                <h3 className="font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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

      {/* METRICS SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-yellow-400 text-xs font-semibold tracking-wider">PROVEN RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results That Speak Volumes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Delivering measurable impact for businesses worldwide
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "40%", label: "Faster Time-to-Hire", icon: <FaClock className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
              { value: "95%", label: "Client Retention", icon: <FaUserCheck className="text-3xl" />, color: "from-green-500 to-emerald-500" },
              { value: "10k+", label: "Qualified Candidates", icon: <FaUsers className="text-3xl" />, color: "from-purple-500 to-pink-500" },
              { value: "85%", label: "Cost Savings", icon: <FaChartBar className="text-3xl" />, color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
                </div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                  <p className="text-gray-300 text-sm mt-1">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-4">
              <span className="text-blue-600 text-xs font-semibold tracking-wider">HOW WE WORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our RPO Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to finding your perfect candidates
            </p>
          </motion.div>

          {/* Desktop Zig-zag layout */}
          <div className="hidden md:block relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`group relative ${index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'} transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[1]} 0%, ${step.color.split(' ')[3]} 100%)` }}>
                    </div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                          {step.icon}
                        </div>
                        <div>
                          <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            STEP {step.step}
                          </span>
                          <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{step.desc}</p>
                      <p className="text-gray-400 text-xs">{step.details}</p>
                    </div>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`}></div>
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg z-10`}>
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b ${step.color}`}></div>
                    )}
                  </div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet view */}
          <div className="md:hidden grid sm:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${step.color.split(' ')[1]} 0%, ${step.color.split(' ')[3]} 100%)` }}>
                </div>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div>
                      <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{step.desc}</p>
                  <p className="text-gray-400 text-xs">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-10 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-0 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-blue-400 text-xs font-semibold tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We become an extension of your team, delivering measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Dedicated Teams", desc: "Industry-specific recruitment experts who understand your domain and requirements", icon: <FaUsers className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
              { title: "AI-Powered Matching", desc: "Advanced algorithms ensure high accuracy in candidate-job alignment", icon: <FaBrain className="text-3xl" />, color: "from-purple-500 to-pink-500" },
              { title: "Global Network", desc: "Access top talent across multiple countries with diverse skill sets", icon: <FaGlobe className="text-3xl" />, color: "from-green-500 to-emerald-500" },
              { title: "Scalable Solutions", desc: "Flexible hiring models that grow with your business", icon: <FaBuilding className="text-3xl" />, color: "from-orange-500 to-red-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
                </div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "94%", label: "Match Accuracy", color: "from-blue-500 to-cyan-500" },
              { value: "40%", label: "Faster Hiring", color: "from-green-500 to-emerald-500" },
              { value: "98%", label: "Satisfaction", color: "from-purple-500 to-pink-500" },
              { value: "87%", label: "Retention", color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.value}
                </h3>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTORS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-4">
            <span className="text-blue-600 text-xs font-semibold tracking-wider">INDUSTRIES WE SERVE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Expertise Across All Major Sectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized recruitment solutions tailored to your industry needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Technology & IT", desc: "Developers, engineers, IT specialists, and tech leaders", tags: ["Full-Stack", "DevOps", "Cloud", "AI/ML"], icon: <FaLaptopCode className="text-2xl" />, color: "from-blue-500 to-cyan-500" },
            { title: "Healthcare & Life Sciences", desc: "Medical professionals, researchers, and healthcare admins", tags: ["Physicians", "Nurses", "Research", "Admin"], icon: <FaHeartbeat className="text-2xl" />, color: "from-green-500 to-emerald-500" },
            { title: "Finance & Banking", desc: "Analysts, accountants, bankers, and compliance experts", tags: ["Analysts", "Accounts", "Compliance", "Risk"], icon: <FaChartBar className="text-2xl" />, color: "from-purple-500 to-pink-500" },
            { title: "Manufacturing & Engineering", desc: "Engineers, production managers, and quality specialists", tags: ["Engineers", "Production", "QC", "Supply Chain"], icon: <FaIndustry className="text-2xl" />, color: "from-orange-500 to-red-500" },
            { title: "Retail & E-commerce", desc: "Store managers and digital commerce experts", tags: ["Store", "Merchandising", "Digital", "Logistics"], icon: <FaShoppingCart className="text-2xl" />, color: "from-indigo-500 to-purple-500" },
            { title: "Energy & Utilities", desc: "Engineers, project managers, and sustainability experts", tags: ["Renewable", "Oil & Gas", "Utilities", "Sustainability"], icon: <FaBolt className="text-2xl" />, color: "from-pink-500 to-rose-500" },
          ].map((item, index) => (
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
                style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}>
              </div>
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-gray-700 text-xs px-3 py-1 rounded-full bg-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's discuss how our RPO solutions can help you scale efficiently
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
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

export default RecruitmentConsulting;