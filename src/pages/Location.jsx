import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building, Navigation } from "lucide-react";
import locationImg from "../assets/images/location.jpg";
import { FaArrowRight } from "react-icons/fa";

const Locations = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* PREMIUM BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-16 text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 mb-6">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Visit Us
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Our Office Location
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Visit us at our headquarters where innovation meets execution.
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"
            style={{ width: "100px" }}
          />
        </motion.div>
      </section>

      {/* MAIN CARD SECTION */}
      <section className="flex justify-center items-center px-4 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="relative group"
        >
          {/* Card Container */}
          <div className="relative max-w-2xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/50">
            
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-10"></div>
            
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <div className="p-4 pb-0">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={locationImg}
                    alt="Office Location"
                    className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Location Badge on Image */}
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-slate-700">Head Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              {/* Office Title */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                  Greater Noida Office
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Address */}
              <div className="flex gap-3 mb-6">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    B-804, Tower-4, NX-One, TechZone-IV,<br />
                    Greater Noida West, India
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid gap-4 mb-6">
                {/* Phone */}
                <div className="flex items-center gap-3 group/item">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 transition-all duration-300 group-hover/item:scale-110">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Phone</p>
                    <p className="text-slate-700 font-medium">+91 9217358338</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group/item">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 transition-all duration-300 group-hover/item:scale-110">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email</p>
                    <p className="text-slate-700 font-medium">info@eclipticinsight.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 group/item">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 transition-all duration-300 group-hover/item:scale-110">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Working Hours</p>
                    <p className="text-slate-700 font-medium">Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.a
                href="https://maps.google.com/?q=B-810+Tower-4+NX-One+TechZone-IV+Greater+Noida+West"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Navigation className="w-4 h-4 group-hover:translate-x-0 group-hover:-translate-y-0 transition" />
                Get Directions
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </motion.a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </section>

      {/* MAP SECTION - OPTIONAL PREMIUM ADDITION */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3502.876987654321!2d77.456789!3d28.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a1b2c3d4e5%3A0x6f7e8d9a0b1c2d3e!2sNX%20One%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="rounded-2xl"
            ></iframe>
            
            {/* Map Overlay Gradient */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Locations;

// Add this to your tailwind.config.js if you want custom animations
// For now, using existing Tailwind classes