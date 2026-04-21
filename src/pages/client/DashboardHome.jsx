import { FaChartLine, FaMoneyBill, FaCheckCircle, FaArrowUp } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back! Here's your dashboard summary
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Active Plan Card */}
        <div className="group bg-gradient-to-br from-blue-50 via-white to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-1">
          <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 transition">
            <FaChartLine className="text-blue-600 text-xl" />
          </div>

          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Active Plan
          </h2>

          <p className="text-2xl font-bold text-gray-800 mt-1">
            Basic Plan
          </p>

          <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
            <FaArrowUp className="text-xs" />
            <span>Active since Jan 2025</span>
          </div>
        </div>

        {/* Total Payments Card */}
        <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 hover:-translate-y-1">
          <div className="bg-green-50 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-100 transition">
            <FaMoneyBill className="text-green-500 text-xl" />
          </div>

          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Total Payments
          </h2>

          <p className="text-2xl font-bold text-gray-800 mt-1">
            ₹15,000
          </p>

          <div className="mt-3 text-xs text-green-600">
            <span className="bg-green-50 px-2 py-0.5 rounded-full">
              +12% from last month
            </span>
          </div>
        </div>

        {/* Status Card */}
        <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 hover:-translate-y-1">
          <div className="bg-green-50 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-100 transition">
            <FaCheckCircle className="text-green-600 text-xl" />
          </div>

          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Account Status
          </h2>

          <p className="text-2xl font-bold text-green-600 mt-1">
            Active
          </p>

          <div className="mt-3">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"></span>
            <span className="text-xs text-gray-500">
              All services operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;