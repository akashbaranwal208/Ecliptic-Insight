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
    highlight: true,
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
    <section className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#EAF2FF] to-[#F8FAFC] overflow-hidden">

      {/* 🔥 Subtle Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#93C5FD_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔹 LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Why Choose Us
          </h2>

          <p className="text-[#475569] text-lg leading-relaxed">
            We combine expertise, innovation, and a client-first approach to
            deliver impactful solutions. Our focus is not just on delivering
            services, but on creating long-term value and sustainable growth
            for our clients.
          </p>
        </motion.div>

        {/* 🔹 RIGHT */}
        <div className="grid sm:grid-cols-2 gap-8">

          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative rounded-3xl p-[1px]
                ${
                  item.highlight
                    ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"
                    : "bg-white/40"
                }
              `}
            >

              <div
                className={`h-full rounded-3xl p-6 transition-all duration-300
                  ${
                    item.highlight
                      ? "bg-white shadow-xl"
                      : "bg-white/80 backdrop-blur-md shadow-sm hover:shadow-lg"
                  }
                `}
              >

                {/* ICON */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-lg
                  ${
                    item.highlight
                      ? "bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white"
                      : "bg-[#DBEAFE] text-[#2563EB]"
                  }
                  `}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
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