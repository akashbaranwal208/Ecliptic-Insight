import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

const DashboardLayout = () => {
  const name = localStorage.getItem("name");

  return (
    <div className="flex pt-20 bg-gray-50">
      <Sidebar />

      <main className="ml-64 w-full min-h-screen">
        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-20 z-10">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Client Dashboard
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">Manage your account & services</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative text-gray-400 hover:text-gray-600 transition">
              <FaBell className="text-lg" />
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Section */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="text-right">
                <p className="text-sm text-gray-500">Welcome back,</p>
                <p className="text-sm font-semibold text-gray-800">{name || "Guest"}</p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                <FaUserCircle className="text-xl" />
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;