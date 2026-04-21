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
<section className="relative min-h-screen w-full overflow-hidden -mt-[60px]">
      {/* Background image */}
<motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
>
<img
          src={heroImage}
          alt="Business consulting"
          className="h-full w-full object-cover object-[78%_center]"
        />
<div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/88 via-[#1E3A8A]/52 to-transparent" />
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.15),rgba(15,23,42,0.08),rgba(255,255,255,0.18))]" />
</motion.div>
 
      {/* Content */}
<div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 md:px-16 pt-20 md:pt-24">
<div className="grid w-full grid-cols-12">
<motion.div
            style={{ rotateX, rotateY }}
            initial="hidden"
            animate="show"
            className="col-span-12 md:col-span-6 lg:col-span-5"
>
<div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:p-10">
 
              <div className="relative">
<motion.div
                  custom={0}
                  variants={fadeUp}
                  className="mb-5 h-[3px] w-14 rounded-full bg-[#38BDF8]"
                />
 
                <motion.p
                  custom={0.08}
                  variants={fadeUp}
                  className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/90"
>
                  Strategic Growth Partner
</motion.p>
 
                <motion.h1
                  custom={0.14}
                  variants={fadeUp}
                  className="mb-6 text-4xl font-bold leading-[0.95] text-white md:text-5xl lg:text-6xl"
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
                  className="mb-6 max-w-xl text-lg leading-8 text-white/95"
>
                  We help companies grow faster with innovative solutions,
                  expert consulting, and scalable business strategies.
</motion.p>
 
                {/* Features list */}
<motion.div
                  custom={0.3}
                  variants={fadeUp}
                  className="flex flex-col gap-2 text-xm text-white/100"
>
<div>✔ Scalable Solutions</div>
<div>✔ Trusted Expertise</div>
<div>✔ Data-driven Growth</div>
</motion.div>
 
              </div>
</div>
</motion.div>
</div>
</div>
 
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
</section>
  );
};
 
export default Hero;    