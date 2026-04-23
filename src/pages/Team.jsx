import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FaLinkedin, FaTwitter, FaEnvelope, 
  FaQuoteLeft, FaChartLine, FaLightbulb, 
  FaHandshake, FaTrophy, FaAward, FaUsers,
  FaArrowRight
} from "react-icons/fa";

// ✅ IMPORT LOCAL IMAGES
import img1 from "../assets/life/img1.jpg";
import img2 from "../assets/life/img2.jpg";

const teamMembers = [
  {
    name: "Akash Dhandhania",
    role: "Founder & CEO",
    desc: "Driving the vision and long-term strategy of Ecliptic Insight with a focus on innovation, scalability, and sustainable business growth.",
    img: img1,
    highlight: true,
    social: { linkedin: "#", twitter: "#", email: "#" },
    achievements: ["15+ Years Experience", "Industry Visionary", "Global Recognition"]
  },
  {
    name: "Anjali Dhandhania",
    role: "Marketing Head",
    desc: "Specializes in strategic planning and helping businesses scale through data-driven decision making.",
    img: img2,
    highlight: false,
    social: { linkedin: "#", twitter: "#", email: "#" },
    achievements: ["10+ Years Experience", "Strategic Expert", "Award Winner"]
  },
];

const Team = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={targetRef}>

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20" />
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 text-center px-4 sm:px-6 overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-semibold text-blue-600 tracking-wider">MEET THE TEAM</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-3 md:mb-4">
            Leadership{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 md:mb-6"></div>
          
          <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            A team of experienced professionals driving innovation, 
            strategy, and growth.
          </p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 md:w-7 md:h-11 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* TEAM CARDS - COMPACT AND RESPONSIVE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="space-y-8 md:space-y-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
              
              <div className="flex flex-col md:flex-row">
                {/* IMAGE SECTION */}
                <div className="relative md:w-2/5 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 z-10"></div>
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[280px] sm:h-[320px] md:h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  />
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 z-20 flex gap-2 md:gap-3">
                    <a href={member.social.linkedin} className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all">
                      <FaLinkedin className="text-xs md:text-sm" />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all">
                      <FaTwitter className="text-xs md:text-sm" />
                    </a>
                    <a href={member.social.email} className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all">
                      <FaEnvelope className="text-xs md:text-sm" />
                    </a>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="flex-1 p-5 sm:p-6 md:p-8 bg-white">
                  <div className="mb-3 md:mb-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1 bg-blue-50 rounded-full mb-3 md:mb-4">
                      <FaChartLine className="text-blue-500 text-[10px] md:text-xs" />
                      <span className="text-[10px] md:text-xs font-medium text-blue-600">
                        {member.role === "Founder & CEO" ? "Founder's Profile" : "Leadership Profile"}
                      </span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-1 md:mb-2">
                      {member.name}
                    </h2>
                    
                    <p className="text-blue-600 font-semibold text-sm md:text-base mb-2 md:mb-3">
                      {member.role}
                    </p>
                    
                    <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mb-3 md:mb-4"></div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4 md:mb-5">
                      {member.desc}
                    </p>
                    
                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {member.achievements.map((achievement, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-slate-50 rounded-full text-[10px] md:text-xs text-slate-600">
                          <FaAward className="text-amber-500 text-[8px] md:text-[10px]" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                    
                    {/* Quote - Only for Founder */}
                    {member.role === "Founder & CEO" && (
                      <div className="mt-4 md:mt-5 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                        <FaQuoteLeft className="text-blue-400 text-xs md:text-sm mb-1 md:mb-2" />
                        <p className="text-slate-600 text-xs md:text-sm italic">
                          "Building a legacy of innovation and excellence for the future of business."
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      

      
    </div>
  );
};

export default Team;