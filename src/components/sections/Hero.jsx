import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg";
import aboutImage from "../../assets/images/about.jpg"; // 

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE] px-6 md:px-16 pt-28 pb-20 overflow-hidden">

      {/* 🔹 HERO TOP */}
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#0F172A] mb-6">
            Transforming Businesses Through{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Innovation & Strategy
            </span>
          </h1>

          <p className="text-[#475569] text-lg mb-8 max-w-xl">
            We empower organizations with scalable solutions, industry expertise,
            and forward-thinking strategies to drive growth and long-term success.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#2563EB] text-white rounded-md hover:bg-[#1D4ED8] transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-[#BFDBFE] text-[#1E293B] rounded-md hover:bg-[#EFF6FF] transition">
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[400px] h-[400px] bg-[#93C5FD] blur-3xl opacity-30 rounded-full"></div>

          <div className="relative w-[380px] md:w-[550px] h-[280px] md:h-[360px] rounded-[30px] overflow-hidden border border-[#E2E8F0] shadow-2xl bg-white">
            <img
              src={heroImage}
              alt="Business"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* 🔥 NEW PROFESSIONAL SECTION */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT IMAGE (Stylish) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -top-6 -left-6 w-[200px] h-[200px] bg-[#60A5FA] blur-2xl opacity-30 rounded-full"></div>

          {/* Image Card */}
          <div className="relative rounded-[25px] overflow-hidden shadow-xl border border-[#E2E8F0]">
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-[300px] md:h-[380px] object-cover"
            />
          </div>
        </motion.div>

        {/* 🔹 RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6">

            {/* Block 1 */}
            <div className="border-l-4 border-[#2563EB] pl-4">
              <p className="text-[#475569] leading-relaxed">
                For individuals, we offer comprehensive financial services including financial planning, tax optimization, and bookkeeping to build a strong financial foundation.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Ecliptic Insight Ventures
              </h3>
              <p className="text-[#475569] leading-relaxed">
                A client-focused company driven by innovation, trust, and sustainable growth, operating across multiple industries under one unified vision.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <p className="text-[#475569] leading-relaxed">
                We prioritize long-term relationships, professionalism, and delivering value through personalized and scalable solutions.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;