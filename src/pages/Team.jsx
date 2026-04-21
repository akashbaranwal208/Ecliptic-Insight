import { motion } from "framer-motion";

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
  },
  {
    name: "Anjali Dhandhania",
    role: "Marketing Head",
    desc: "Specializes in strategic planning and helping businesses scale through data-driven decision making.",
    img: img2,
    highlight: false,
  },
];

const Team = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(#93C5FD_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* 🔥 HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-4"
        >
          Leadership Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#64748B] max-w-2xl mx-auto"
        >
          A team of experienced professionals driving innovation, strategy, and growth.
        </motion.p>
      </section>

      {/* 🔥 CEO HIGHLIGHT */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        {teamMembers
          .filter((m) => m.highlight)
          .map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-10 items-center 
              bg-white/60 backdrop-blur-xl border border-white/40 
              rounded-3xl p-8 shadow-lg"
            >

              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-2">
                  {member.name}
                </h2>

                <p className="text-[#2563EB] font-medium mb-4">
                  {member.role}
                </p>

                <p className="text-[#64748B] leading-relaxed">
                  {member.desc}
                </p>
              </div>

            </motion.div>
          ))}
      </section>

      {/* 🔥 TEAM GRID (ONLY MARKETING HEAD NOW) */}
      <section className="max-w-[600px] mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-1 gap-8">

          {teamMembers
            .filter((m) => !m.highlight)
            .map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group rounded-3xl overflow-hidden 
                bg-white/60 backdrop-blur-xl border border-white/40
                shadow-md hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">

                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {member.name}
                  </h3>

                  <p className="text-[#2563EB] text-sm font-medium mb-2">
                    {member.role}
                  </p>

                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {member.desc}
                  </p>

                </div>

              </motion.div>
            ))}

        </div>
      </section>

    </div>
  );
};

export default Team;