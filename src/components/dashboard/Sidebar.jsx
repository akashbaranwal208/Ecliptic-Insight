import { Link, useLocation } from "react-router-dom";
import { FaHome, FaServicestack, FaCreditCard, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/client-dashboard", icon: <FaHome /> },
    { name: "Services", path: "/client-dashboard/services", icon: <FaServicestack /> },
    { name: "Payments", path: "/client-dashboard/payments", icon: <FaCreditCard /> },
    { name: "Profile", path: "/client-dashboard/profile", icon: <FaUser /> },
  ];

  return (
    <aside className="w-64 h-[calc(100vh-80px)] bg-[#0F172A] text-white fixed left-0 top-20 p-6">
      <h2 className="text-lg font-semibold mb-8">Client Panel</h2>

      <nav>
        <ul className="space-y-3">
          {menuItems.map((item) => (
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
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;