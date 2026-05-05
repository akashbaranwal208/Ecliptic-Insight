import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaUserTie, FaClock } from "react-icons/fa";

const EmployeeSidebar = () => {
  const location = useLocation();

  const handleATSClick = (e) => {
    e.preventDefault(); // stop normal routing

    const token = localStorage.getItem("token");

    if (!token || token === "undefined") {
  alert("Session expired. Please login again.");
  return;
}

    // 🔥 redirect to ATS with token
    window.location.href = `http://localhost:5173/sso-login?token=${encodeURIComponent(token)}`;
  };

  const menu = [
    { name: "Dashboard", path: "/employee-dashboard", icon: <FaHome /> },
    { name: "ATS", path: "/employee-dashboard/ats", icon: <FaUsers /> },
    { name: "HRMS", path: "/employee-dashboard/hrms", icon: <FaUserTie /> },
    { name: "TimeSheet", path: "/employee-dashboard/timesheet", icon: <FaClock /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] shadow-xl">

      <div className="p-5">
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Employee Panel</h2>
          <p className="text-xs text-white/40 mt-1">Manage your workspace</p>
        </div>

        {/* Menu */}
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.name === "ATS" ? "#" : item.path}
                onClick={item.name === "ATS" ? handleATSClick : undefined}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>

                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500 text-white font-semibold">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default EmployeeSidebar;