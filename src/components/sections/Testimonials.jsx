import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Ecliptic helped us scale our business with clear strategy and execution. Their approach is highly professional and result-driven.",
  },
  {
    name: "Anjali Mehta",
    role: "E-commerce Owner",
    text: "Their team built a seamless online store for us. The experience was smooth and the results exceeded expectations.",
  },
  {
    name: "David Miller",
    role: "International Client",
    text: "Reliable, efficient, and highly responsive. They made our import-export operations much easier and faster.",
  },
];

// 🔥 Helper
const getInitials = (name) =>
  name.split(" ").map((w) => w[0]).join("");

const Testimonials = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF]">

      {/* 🔹 Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          What Our Clients Say
        </h2>
        <p className="text-[#64748B] mt-4 text-lg">
          Trusted by businesses across industries and regions
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#2563EB]/20 to-[#38BDF8]/20"
          >

            {/* CARD */}
            <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition">

              {/* 🔥 QUOTE */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB] mb-4">
                <FaQuoteLeft />
              </div>

              {/* TEXT */}
              <p className="text-[#475569] text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">

                {/* AVATAR */}
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white text-sm font-semibold shadow-md">
                  {getInitials(item.name)}
                </div>

                {/* INFO */}
                <div>
                  <p className="text-[#0F172A] font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-[#64748B] text-xs">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;