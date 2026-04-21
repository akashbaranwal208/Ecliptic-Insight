import { motion } from "framer-motion";
import { 
  Target, 
  Rocket, 
  Award, 
  TrendingUp, 
  Users, 
  Globe,
  Calendar,
  ChevronRight,
  Eye,
  Compass,
  Star
} from "lucide-react";
import aboutBg from "../assets/images/aboutcompany.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* PREMIUM BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* HERO SECTION - PREMIUM */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutBg}
            alt="About Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6">
              <Compass className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-white">Our Story</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              About Ecliptic Insight
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              We empower businesses with innovative strategies, scalable solutions,
              and a commitment to long-term success.
            </p>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-8"
              style={{ width: "100px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION / JOURNEY - PREMIUM CARDS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              desc: "To be a globally recognized organization that empowers businesses through innovation, strategic thinking, and sustainable growth.",
              gradient: "from-teal-600 to-emerald-500",
              icon: Eye,
              bgGradient: "from-teal-500/20 to-emerald-500/20",
            },
            {
              title: "Our Mission",
              desc: "Our mission is to deliver high-impact business solutions by combining industry expertise, modern technology, and a client-first approach.",
              gradient: "from-orange-600 to-red-500",
              icon: Target,
              bgGradient: "from-orange-500/20 to-red-500/20",
            },
            {
              title: "Our Journey",
              desc: "From a startup idea to a growing global company, our journey reflects innovation, trust, and consistent excellence.",
              gradient: "from-blue-600 to-cyan-500",
              icon: Rocket,
              bgGradient: "from-blue-500/20 to-cyan-500/20",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION - PREMIUM VERSION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 mb-4">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Timeline
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Built on vision, driven by innovation, and shaped by continuous growth.
            </p>
            
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* Timeline Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Timeline Events */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                { year: "2023", title: "Foundation", desc: "Ecliptic Insight was established with a vision to deliver innovative and scalable business solutions.", icon: Rocket },
                { year: "2024", title: "Expansion", desc: "Expanded services across consulting, e-commerce, and manufacturing solutions.", icon: TrendingUp },
                { year: "2025", title: "Global Reach", desc: "Started working with international clients and expanded operations globally.", icon: Globe },
                { year: "2026", title: "Innovation Focus", desc: "Focused on building scalable, data-driven solutions for modern businesses.", icon: Award },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Year Badge */}
                    <div className="absolute -left-3 top-6">
                      <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-16">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                          <item.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Premium Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Glow Effects */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Our Journey"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-medium">Our Growth Story</p>
                  <p className="text-white/80 text-xs">From foundation to global recognition</p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - PREMIUM */}
      <section className="relative py-20 mb-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 -right-4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey With Us?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's work together to bring your business vision to life.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Get in Touch
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;