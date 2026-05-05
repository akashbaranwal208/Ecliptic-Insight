import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

import consultingImg from "../../assets/images/consulting.jpg";
import ecommerceImg from "../../assets/images/ecommerce.jpg";
import manufacturingImg from "../../assets/images/manufacturing.jpg";
import exportImg from "../../assets/images/export.jpg";

const services = [
  {
    title: "Business Consulting",
    desc: "Strategic guidance to help businesses grow and scale efficiently.",
    image: consultingImg,
  },
  {
    title: "E-commerce Solutions",
    desc: "Build scalable online stores focused on performance and growth.",
    image: ecommerceImg,
  },
  {
    title: "Manufacturing Solutions",
    desc: "Optimize production processes and improve operational efficiency.",
    image: manufacturingImg,
  },
  {
    title: "Import & Export",
    desc: "Seamless global trade solutions for international expansion.",
    image: exportImg,
  },
];

const ServiceCard = ({ service, index }) => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);

    setPos({
      x: `${px}px`,
      y: `${py}px`,
    });
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setPos({ x: "50%", y: "50%" });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative h-[280px] rounded-3xl overflow-hidden group cursor-pointer"
    >

      {/* IMAGE */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.08]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-[#0F172A]/25 to-transparent"></div>

      {/* 🔥 CURSOR SPOTLIGHT */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x} ${pos.y}, rgba(56,189,248,0.18), transparent 60%)`,
        }}
      ></div>

      {/* GLASS LAYER */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] group-hover:backdrop-blur-[3px] transition"></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-400">

        <h3 className="text-xl font-semibold mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition duration-400 delay-100">
          {service.desc}
        </p>

        {/* LINE */}
        <div className="mt-4 h-[2px] w-0 bg-[#38BDF8] group-hover:w-12 transition-all duration-400 delay-150"></div>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#38BDF8]/40 transition"></div>

    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">

      {/* HEADING */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Our Core Businesses
        </h2>
        <p className="text-[#64748B] mt-5 text-lg">
          Delivering innovative solutions across industries
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}

      </div>

    </section>
  );
};

export default Services;