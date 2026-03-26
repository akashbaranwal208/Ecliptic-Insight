import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const points = [
  {
    icon: <FaLightbulb />,
    title: "Innovative Approach",
    desc: "We leverage modern strategies and technologies to deliver forward-thinking solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric",
    desc: "Our focus is on building long-term relationships through personalized solutions.",
    highlight: true, // ⭐ highlighted card
  },
  {
    icon: <FaChartLine />,
    title: "Proven Results",
    desc: "We deliver measurable outcomes that drive growth and business success.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliability & Trust",
    desc: "We ensure transparency, consistency, and trust in every project we deliver.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#EAF2FF] to-[#F8FAFC] overflow-hidden">

      {/* 🔥 Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#93C5FD_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-6">
            Why Choose Us
          </h2>

          <p className="text-[#475569] text-lg leading-relaxed">
            We combine expertise, innovation, and a client-first approach to
            deliver impactful solutions. Our focus is not just on delivering
            services, but on creating long-term value and sustainable growth
            for our clients.
          </p>
        </div>

        {/* 🔹 RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6 relative">

          {/* Divider lines */}
          <div className="hidden sm:block absolute top-1/2 left-0 w-full h-[1px] bg-[#E2E8F0]"></div>
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[1px] bg-[#E2E8F0]"></div>

          {points.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative p-[1px] rounded-2xl ${
                item.highlight
                  ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"
                  : "bg-[#E2E8F0]"
              }`}
            >
              <div
                className={`rounded-2xl p-6 h-full transition ${
                  item.highlight
                    ? "bg-white shadow-xl scale-[1.03]"
                    : "bg-white shadow-sm hover:shadow-lg"
                }`}
              >

                {/* 🔥 Animated Icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-lg ${
                    item.highlight
                      ? "bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white"
                      : "bg-[#DBEAFE] text-[#2563EB]"
                  }`}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0F172A] mb-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;