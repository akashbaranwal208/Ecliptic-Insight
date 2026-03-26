import { motion } from "framer-motion";

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

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F8FAFC]">

      {/* 🔹 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A]">
          Our Core Services
        </h2>
        <p className="text-[#64748B] mt-3 text-lg">
          Delivering innovative solutions across industries
        </p>
      </div>

      {/* 🔹 Grid */}
      <div className="max-w-[1200px] mx-auto grid sm:grid-cols-4 gap-10">

        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >

            {/* 🔥 Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-[300px] h-[200px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* 🔥 Softer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* 🔥 Content */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                {service.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Services;