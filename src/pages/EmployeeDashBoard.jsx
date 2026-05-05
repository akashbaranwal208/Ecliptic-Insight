import { motion } from "framer-motion";
import { FaBriefcase, FaTasks, FaChartLine, FaUserCircle, FaEnvelope, FaCheckCircle, FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const EmployeeDashboard = () => {
  const name = localStorage.getItem("name") || "Employee";
  const role = localStorage.getItem("role") || "employee";
  const email = localStorage.getItem("email") || "employee@ecliptic.com";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
    })
  };

  

  return (
    <div >
      <div className="p-4 sm:p-6">
        
        {/* Welcome Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6"
        >
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Welcome back, <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{name}</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Here's what's happening with your work today.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.1}
          className="bg-white rounded-xl shadow-md mb-6 overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3">
            <h2 className="text-white font-semibold text-md flex items-center gap-2">
              <FaUserCircle />
              Profile Details
            </h2>
          </div>
          
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase">Full Name</p>
                <p className="text-sm font-semibold text-slate-800">{name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email Address</p>
                <p className="text-sm font-semibold text-slate-800">{email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Role</p>
                <p className="text-sm font-semibold text-slate-800">{role}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Status</p>
                <p className="text-sm font-semibold text-green-600 flex items-center gap-2">
                  Active
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        

        {/* Date Display */}
        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
          <FaCalendarAlt />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;