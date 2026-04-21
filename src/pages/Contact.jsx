import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import contactBg from "../assets/images/contact-bg.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      console.log("Form Data:", data);
      toast.success("Message submitted successfully 🚀");
      reset();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-24 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] min-h-screen">

      {/* 🔥 HERO WITH CLEAN BACKGROUND IMAGE */}
      <section className="relative py-28 px-6 md:px-16 overflow-hidden min-h-[60vh] flex items-center">

        {/* CLEAN BACKGROUND IMAGE - NO SCALING, NO OPACITY */}
        <div className="absolute inset-0">
          <img
            src={contactBg}
            alt="Contact background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* SINGLE SUBTLE OVERLAY - ONLY FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Let's Build Something
            <br />
            Great Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind or need consultation? Reach out or schedule a meeting with our experts.
          </motion.p>

        </div>

      </section>

      {/* 🔹 CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 -mt-12 relative z-20 mb-20">
        {[
          { icon: Mail, title: "Email", value: "info@eclipticinsight.com" },
          { icon: Phone, title: "Phone", value: "+91 7897830124" },
          { icon: MapPin, title: "Location", value: "B-810, Tower-4, NX-One, TechZone-IV, Greater Noida West" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <item.icon className="text-[#2563EB] mb-3" size={28} />
            <h3 className="font-semibold text-lg text-[#0F172A]">{item.title}</h3>
            <p className="text-[#475569] text-sm mt-1">{item.value}</p>
          </motion.div>
        ))}
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">

        {/* 📝 FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#0F172A]">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                placeholder="Your Email"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                placeholder="Your Message"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 shadow-md font-medium"
            >
              {loading ? (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </motion.div>

        {/* 📅 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >

          <div className="bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white p-8 rounded-3xl shadow-xl">
            <Calendar className="mb-4" size={32} />

            <h3 className="text-xl font-semibold mb-2">
              Schedule a Meeting
            </h3>

            <p className="text-sm opacity-90 mb-5">
              Book a free consultation with our experts.
            </p>

            <button
              onClick={() => window.open("https://calendly.com/", "_blank")}
              className="bg-white text-[#2563EB] px-6 py-2.5 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-md"
            >
              Book Now
            </button>
          </div>

          {/* Map with Google Maps Link */}
  <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.034180405848!2d77.441446!3d28.593699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced166f47a1f1%3A0x9b3e6f2c0e6b3a0!2sNX%20One%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
      className="w-full h-[260px] border-0"
      loading="lazy"
      title="Our Office Location - NX One, Greater Noida West"
    ></iframe>
    
    <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
      <a
        href="https://www.google.com/maps/search/?api=1&query=B-803+Tower-4+NX-One+TechZone-iv+Greater+Noida+West"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1E40AF] text-sm font-medium transition-colors"
      >
        <MapPin className="w-4 h-4" />
        View full map & get directions on Google Maps →
      </a>
    </div>
  </div>

        </motion.div>

      </section>

    </div>
  );
};

export default Contact;