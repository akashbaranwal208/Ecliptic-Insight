import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex pt-20">
      <AdminSidebar />

      <div className="ml-64 w-full min-h-screen bg-gray-100">

        {/* HEADER */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {name}
            </span>

          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;