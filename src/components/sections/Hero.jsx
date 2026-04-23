import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import heroImage from "../../assets/images/hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden -mt-[60px]">

      {/* Background image */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Business consulting"
          className="h-full w-full object-cover object-[78%_center] sm:object-[70%_center] md:object-[65%_center] lg:object-[78%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/88 via-[#1E3A8A]/52 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.15),rgba(15,23,42,0.08),rgba(255,255,255,0.18))]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-24">
        
        <div className="w-full">
          
          <motion.div
            style={{ rotateX, rotateY }}
            initial="hidden"
            animate="show"
            className="w-full sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
          >
            
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-white/20 bg-white/5 p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              
              <div className="relative">
                
                <motion.div
                  custom={0}
                  variants={fadeUp}
                  className="mb-3 sm:mb-4 md:mb-5 h-[2px] sm:h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-[#38BDF8]"
                />

                <motion.p
                  custom={0.08}
                  variants={fadeUp}
                  className="mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] md:tracking-[0.22em] text-white"
                >
                  Strategic Growth Partner
                </motion.p>

                <motion.h1
                  custom={0.14}
                  variants={fadeUp}
                  className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.05] md:leading-[0.95] text-white"
                >
                  Transform Your
                  <br />
                  Business with{" "}
                  <span className="bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
                    Smart Strategy
                  </span>
                </motion.h1>

                <motion.p
                  custom={0.22}
                  variants={fadeUp}
                  className="mb-5 sm:mb-6 max-w-xl text-base sm:text-lg leading-relaxed sm:leading-8 text-white"
                >
                  We help companies grow faster with innovative solutions,
                  expert consulting, and scalable business strategies.
                </motion.p>

                {/* Features list */}
                <motion.div
                  custom={0.3}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-[#38BDF8] text-base sm:text-lg">✔</span>
                    <span>Scalable Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#38BDF8] text-base sm:text-lg">✔</span>
                    <span>Trusted Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#38BDF8] text-base sm:text-lg">✔</span>
                    <span>Data-driven Growth</span>
                  </div>
                </motion.div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 sm:h-20 w-full bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
    </section>
  );
};

export default Hero;