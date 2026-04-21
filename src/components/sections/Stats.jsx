import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import {
  FaRegCalendarCheck,
  FaUsers,
  FaGlobeAsia,
  FaCheckDouble,
  FaIndustry,
  FaStar,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

import indiaFlag from "../../assets/images/in.png";
import usaFlag from "../../assets/images/us.png";
import canadaFlag from "../../assets/images/ca.png";

const stats = [
  {
    icon: <FaRegCalendarCheck />,
    value: 2023,
    label: "Founded",
    sub: "Year of Establishment",
  },
  {
    icon: <FaStar />,
    value: 100,
    suffix: "+",
    label: "Client Reviews",
    sub: "Trusted by clients worldwide",
    highlight: true,
  },
  {
    icon: <FaUsers />,
    value: 20,
    suffix: "+",
    label: "Global Clients",
    sub: "Across multiple industries",
  },
  {
    icon: <FaCheckDouble />,
    value: 30,
    suffix: "+",
    label: "Projects Delivered",
    sub: "Successfully completed",
  },
  {
    icon: <FaGlobeAsia />,
    value: 3,
    label: "Countries",
    sub: "International presence",
    flags: [indiaFlag, usaFlag, canadaFlag],
  },
  {
    icon: <FaIndustry />,
    value: 10,
    suffix: "+",
    label: "Industries",
    sub: "Diverse expertise",
  },
];

// 🔥 CUSTOM COUNTER HOOK
const useCountUp = (end, duration = 1500, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, trigger]);

  return count;
};

const StatCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const count = useCountUp(item.value, 1500, visible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer
        ${
          item.highlight
            ? "bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#38BDF8] shadow-xl hover:shadow-2xl"
            : "bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-xl"
        }
      `}
    >
      {/* Decorative corner element for highlighted card */}
      {item.highlight && (
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-3xl"></div>
        </>
      )}

      {/* Non-highlight card decorative hover effect */}
      {!item.highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#38BDF8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}

      {/* ICON */}
      <div
        className={`relative mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110
        ${
          item.highlight
            ? "bg-white/20 backdrop-blur-sm text-white shadow-lg"
            : "bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white shadow-md"
        }
        `}
      >
        {item.icon}
      </div>

      {/* LABEL */}
      <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${item.highlight ? "text-white/70" : "text-[#2563EB]"}`}>
        {item.label}
      </p>

      {/* 🔥 COUNTER */}
      <h3 className={`text-4xl font-bold tracking-tight ${item.highlight ? "text-white" : "text-[#0F172A]"}`}>
        {count}{item.suffix || ""}
      </h3>

      {/* DESC */}
      <p className={`text-sm mt-2 font-medium ${item.highlight ? "text-white/80" : "text-[#64748B]"}`}>
        {item.sub}
      </p>

      {/* FLAGS */}
      {item.flags && (
        <div className="flex justify-center gap-3 mt-4">
          {item.flags.map((flag, i) => (
            <div key={i} className="w-10 h-6 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src={flag} alt="flag" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Decorative shine effect on hover */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}>
      </div>

      {/* HEADING */}
      <div className="relative text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#2563EB]/10 to-[#38BDF8]/10 rounded-full mb-5">
            <FaChartLine className="text-[#2563EB] text-xs" />
            <span className="text-[#2563EB] text-xs font-semibold tracking-wider">OUR IMPACT</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
            Driving Results <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">at Scale</span>
          </h2>
          
          {/* Decorative underline */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full"></div>
          </div>
          
          {/* Subheading */}
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            A snapshot of our growth, trust, and global impact
          </p>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <StatCard key={index} item={item} index={index} />
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="relative mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-[#64748B]">
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#2563EB]"></span>
          <span>Trusted by businesses worldwide</span>
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#2563EB]"></span>
        </div>
      </div>
    </section>
  );
};

export default Stats;