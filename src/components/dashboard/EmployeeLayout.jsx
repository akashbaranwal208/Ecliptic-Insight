import { Outlet } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 md:pt-24 lg:pt-28">

      {/* Sidebar */}
      <EmployeeSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>

    </div>
  );
};

export default EmployeeLayout;