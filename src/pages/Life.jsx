import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// 🔥 IMPORT IMAGES
import img1 from "../assets/life/img1.jpg";
import img2 from "../assets/life/img2.jpg";
import img3 from "../assets/life/img3.jpg";
import img4 from "../assets/life/img4.jpg";
import img5 from "../assets/life/img5.jpg";
import img6 from "../assets/life/img6.jpg";

const Life = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, category: "festival", img: img1 },
    { id: 2, category: "fun", img: img2 },
    { id: 3, category: "office", img: img3 },
    { id: 4, category: "trip", img: img4 },
    { id: 5, category: "festival", img: img5 },
    { id: 6, category: "fun", img: img6 },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE] overflow-hidden">

      {/* 🔥 HERO (BACKGROUND IMAGE) */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden pt-24 md:pt-28">

  {/* 🔥 BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={img4}
      alt="hero"
      className="w-full h-full object-cover"
    />
  </div>

  {/* 🔥 OVERLAY */}
  <div className="absolute inset-0 bg-black/50" />

  {/* 🔥 CONTENT */} 
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
      Life at Ecliptic
    </h1>

    <p className="text-white/80 text-lg mb-8">
      A workplace where ideas grow, teams collaborate, and every moment builds something meaningful.
    </p>

    <button
  onClick={() => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-20 px-6 py-3 bg-white text-[#0F172A] rounded-full"
>
  Explore Moments ↓
</button>
  </div>

</section>

      {/* 🔥 LIFE SECTION */}
      <section className="max-w-[1100px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-[#0F172A]">
            A Culture That Drives Growth
          </h2>

          <p className="text-[#475569] leading-relaxed">
            At Ecliptic, we believe in building an environment where creativity,
            collaboration, and continuous learning thrive.
          </p>

          <p className="text-[#475569] leading-relaxed">
            From team activities to real-world problem solving, every moment is
            an opportunity to grow together.
          </p>

        </motion.div>

        {/* IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-4"
        >

          {[img1, img2, img3, img5].map((img, index) => (
            <div
              key={index}
              className="h-[150px] rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt="life"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </motion.div>

      </section>

      {/* 🔥 GALLERY (BOTTOM) */}
      <section id="gallery" className="max-w-[1100px] mx-auto px-6 pb-24">

        <h2 className="text-3xl font-semibold text-center text-[#0F172A] mb-8">
          Moments at Ecliptic
        </h2>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "festival", "fun", "office", "trip"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm capitalize transition
              ${
                activeFilter === filter
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#EFF6FF]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md"
              onClick={() => setSelectedImage(item.img)}
            >

              <img
                src={item.img}
                alt="gallery"
                className="w-full h-[230px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute bottom-3 left-3 text-white text-sm capitalize opacity-0 group-hover:opacity-100 transition">
                {item.category}
              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* 🔥 LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[90%] max-h-[80%] rounded-xl"
          />

        </div>
      )}

    </div>
  );
};

export default Life;