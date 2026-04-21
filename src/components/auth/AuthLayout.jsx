import businessBg from "../../assets/images/business-bg.jpg";
import { motion } from "framer-motion";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* LEFT SIDE - HERO SECTION */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">

        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={businessBg}
            alt="auth"
            className="w-full h-full object-cover scale-105 transition-transform duration-10000 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5 rounded-full" />

        {/* Content */}
        <div className="relative z-10 p-12 flex flex-col justify-end min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6" />
            
            <h2 className="text-4xl font-bold text-white leading-tight">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Ecliptic
              </span>
            </h2>

            <p className="mt-4 text-white/70 text-base max-w-sm leading-relaxed">
              Build, scale and grow your business with our ecosystem.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
                <span className="text-white/50 text-xs">Trusted Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                <span className="text-white/50 text-xs">Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM AREA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#F8FBFF] to-white px-4 sm:px-6 lg:px-8">

        {/* Scrollable Form Container */}
        <div className="w-full max-w-md h-full overflow-y-auto hide-scrollbar py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4" />
              <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                {title}
              </h1>
              <p className="text-[#64748B] text-sm mt-2">
                {subtitle}
              </p>
            </div>

            {/* Form Content */}
            {children}
          </motion.div>
        </div>

      </div>

      {/* Custom Scrollbar Hide Styles */}
      <style>{`
          .hide-scrollbar::-webkit-scrollbar {
          display: none;
          }
          .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          }
`     }</style>
    </div>
  );
};

export default AuthLayout;