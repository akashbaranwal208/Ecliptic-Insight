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

// 🔥 Helper to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F8FAFC]">

      {/* 🔹 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A]">
          What Our Clients Say
        </h2>
        <p className="text-[#64748B] mt-3 text-lg">
          Trusted by businesses across industries and regions
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE]"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition h-full">

              {/* 🔥 Quote Icon */}
              <FaQuoteLeft className="text-[#2563EB] text-xl mb-4 opacity-70" />

              {/* 🔹 Text */}
              <p className="text-[#475569] text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              {/* 🔹 User */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white text-sm font-semibold">
                  {getInitials(item.name)}
                </div>

                {/* Info */}
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