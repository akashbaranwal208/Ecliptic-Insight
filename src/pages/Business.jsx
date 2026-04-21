import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Globe,
  Factory,
  Briefcase,
  ShoppingCart,
  Users,
  Shield,
  Award,
  Star,
  CheckCircle,
  Clock,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";
import { useRef } from "react";
import businessBg from "../assets/images/business-bg.jpg";

const Business = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const businesses = [
    {
      title: "Global Outsourcing Services",
      description:
        "Comprehensive outsourcing solutions tailored to global business needs across multiple domains.",
      icon: Globe,
      color: "blue",
      stats: "20+ Clients",
      details: [
        "Accounting & Bookkeeping",
        "Digital Marketing",
        "IT Consulting",
        "Recruitment Process Outsourcing",
      ],
      expertise: "15+ Years Experience",
      coverage: "Global Reach",
    },
    {
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing and packaging solutions for automotive and household products.",
      icon: Factory,
      color: "emerald",
      stats: "10+ Products",
      details: [
        "Tyre Sealant Manufacturing",
        "Tyre Valve Production",
        "Home Care Products",
        "Custom Packaging Solutions",
      ],
      expertise: "ISO Certified",
      coverage: "Pan-India Distribution",
    },
    {
      title: "Business / Professional Consulting",
      description:
        "Strategic consulting services that help businesses optimize operations and accelerate growth.",
      icon: Briefcase,
      color: "purple",
      stats: "30+ Projects",
      details: [
        "Virtual CFO Services",
        "Digital Marketing Strategy",
        "Web & Mobile Development",
        "Business Process Optimization",
      ],
      expertise: "Certified Consultants",
      coverage: "Across Industries",
    },
    {
      title: "E-Commerce",
      description:
        "Multi-platform e-commerce solutions connecting quality products with customers worldwide.",
      icon: ShoppingCart,
      color: "orange",
      stats: "Multi-Platform",
      details: [
        "Direct-to-Consumer Sales",
        "Marketplace Integration",
        "Inventory Management",
        "Global Shipping Network",
      ],
      expertise: "Seamless Experience",
      coverage: "Nationwide Delivery",
    },
    {
      title: "Domestic RPO",
      description:
        "Strategic recruitment solutions helping Indian companies build exceptional teams.",
      icon: Users,
      color: "rose",
      stats: "500+ Hires",
      details: [
        "Manpower Consulting",
        "Talent Acquisition",
        "Workforce Planning",
        "Executive Search",
      ],
      expertise: "Pan-India Network",
      coverage: "All Major Cities",
    },
  ];

  const colorMap = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      light: "from-blue-50 to-blue-100",
      text: "text-blue-600",
      bg: "bg-blue-500",
      hover: "group-hover:border-blue-200",
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      light: "from-emerald-50 to-emerald-100",
      text: "text-emerald-600",
      bg: "bg-emerald-500",
      hover: "group-hover:border-emerald-200",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      light: "from-purple-50 to-purple-100",
      text: "text-purple-600",
      bg: "bg-purple-500",
      hover: "group-hover:border-purple-200",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      light: "from-orange-50 to-orange-100",
      text: "text-orange-600",
      bg: "bg-orange-500",
      hover: "group-hover:border-orange-200",
    },
    rose: {
      gradient: "from-rose-500 to-rose-600",
      light: "from-rose-50 to-rose-100",
      text: "text-rose-600",
      bg: "bg-rose-500",
      hover: "group-hover:border-rose-200",
    },
  };

  return (
    <div className="relative bg-white" ref={targetRef}>

      {/* ================= HERO SECTION - CLEAN TRANSITION ================= */}
      <div className="relative min-h-[85vh] overflow-hidden">
        
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${businessBg})` }}
          />
          {/* Clean gradient overlays - no blur at bottom */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-[85vh] flex items-center">
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium text-white tracking-wide">
                  Our Ecosystem
                </span>
                <div className="w-1 h-1 rounded-full bg-blue-300/50" />
                <span className="text-xs text-white/60">Est. 2020</span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.15] tracking-tight">
                  Our Business
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent mt-3">
                    Ecosystem
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                A unified network of businesses delivering impact across industries.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/20 inline-flex flex-wrap justify-center gap-8"
              >
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Award className="w-4 h-4 text-blue-300" />
                  <span>Industry Leader</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Star className="w-4 h-4 text-blue-300" />
                  <span>Trusted Partner</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="w-4 h-4 text-blue-300" />
                  <span>Global Reach</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* CLEAN BOTTOM TRANSITION - NO BLUR, JUST SOLID WHITE */}
        <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ height: "80px" }} />
      </div>

      {/* ================= BUSINESSES SECTION - ENHANCED CARDS ================= */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Our Protfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
              A diverse ecosystem of services and capabilities designed to support modern businesses.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              const colors = colorMap[business.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${colors.hover}`}
                >
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  <div className="p-8">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-gray-800">{business.stats}</span>
                          <span className="text-xs text-gray-400">Active Engagement</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${colors.text}`}>
                      {business.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed mb-5">
                      {business.description}
                    </p>

                    {/* Key Details Section */}
                    <div className="mb-5 pt-3 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Key Services / Products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {business.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expertise & Coverage Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <TrendingUpIcon className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{business.expertise}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{business.coverage}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-50 border border-gray-100">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-500">Integrated Solutions</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm text-gray-500">Unified Vision</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm text-gray-500">Global Impact</span>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Business;