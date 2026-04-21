import { motion } from "framer-motion";

const ClientDashboard = () => {
  const name = localStorage.getItem("name");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold text-[#0F172A]"
      >
        Welcome {name}, I am Client.
      </motion.h1>

    </div>
  );
};

export default ClientDashboard;