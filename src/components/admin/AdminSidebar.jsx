import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaUserTie, FaMoneyBill } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <FaHome /> },
    { name: "Employees", path: "/admin-dashboard/employees", icon: <FaUserTie /> },
    { name: "Clients", path: "/admin-dashboard/clients", icon: <FaUsers /> },
    { name: "Payments", path: "/admin-dashboard/payments", icon: <FaMoneyBill /> },
  ];

  return (
    <div className="w-64 h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] lg:h-[calc(100vh-112px)] bg-[#0B1320] text-white fixed left-0 top-20 md:top-24 lg:top-28 overflow-y-auto p-6">
      <h1 className="text-lg font-semibold mb-8">Admin Panel</h1>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-600 shadow"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;