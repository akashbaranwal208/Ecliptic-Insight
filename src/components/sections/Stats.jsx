import { motion } from "framer-motion";
import {
  FaRegCalendarCheck,
  FaUsers,
  FaGlobeAsia,
  FaCheckDouble,
  FaIndustry,
  FaStar,
} from "react-icons/fa";

import indiaFlag from "../../assets/images/in.png";
import usaFlag from "../../assets/images/us.png";
import canadaFlag from "../../assets/images/ca.png";

const stats = [
  {
    icon: <FaRegCalendarCheck />,
    value: "2023",
    label: "Founded",
    sub: "Year of Establishment",
  },
  {
    icon: <FaStar />,
    value: "100+",
    label: "Client Reviews",
    sub: "Trusted by clients worldwide",
    highlight: true,
  },
  {
    icon: <FaUsers />,
    value: "20+",
    label: "Global Clients",
    sub: "Across multiple industries",
  },
  {
    icon: <FaCheckDouble />,
    value: "30+",
    label: "Projects Delivered",
    sub: "Successfully completed",
  },
  {
    icon: <FaGlobeAsia />,
    value: "3",
    label: "Countries",
    sub: "International presence",
    flags: [indiaFlag, usaFlag, canadaFlag],
  },
  {
    icon: <FaIndustry />,
    value: "10+",
    label: "Industries",
    sub: "Diverse expertise",
  },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#F8FAFC] to-[#EAF2FF]">

      {/* 🔹 Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A]">
          Driving Results at Scale
        </h2>
        <p className="text-[#64748B] mt-3 text-lg">
          A snapshot of our growth, trust, and global impact
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className={`rounded-2xl border ${
              item.highlight
                ? "border-blue-400 shadow-lg"
                : "border-[#E2E8F0]"
            } bg-white px-8 py-8 text-center flex flex-col justify-center hover:shadow-xl transition-all duration-300`}
          >

            {/* 🔥 Icon */}
            <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white text-xl shadow-md">
              {item.icon}
            </div>

            {/* 🔹 Label */}
            <p className="text-xs uppercase tracking-wide text-[#94A3B8] mb-1">
              {item.label}
            </p>

            {/* 🔹 Value */}
            <h3 className="text-3xl font-bold text-[#0F172A]">
              {item.value}
            </h3>

            {/* 🔹 Description */}
            <p className="text-[#64748B] text-sm mt-2">
              {item.sub}
            </p>

            {/* 🔥 FLAGS */}
            {item.flags && (
              <div className="flex justify-center gap-3 mt-4">
                {item.flags.map((flag, i) => (
                  <img
                    key={i}
                    src={flag}
                    alt="flag"
                    className="w-8 h-5 object-cover rounded-sm"
                  />
                ))}
              </div>
            )}

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Stats;