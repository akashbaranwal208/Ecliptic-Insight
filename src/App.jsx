import Navbar from "./components/layout/NavBar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Team from "./pages/Team";
import Life from "./pages/Life";
import Location from "./pages/Location";
import Business from "./pages/Business";
import EmployeeDashboard from "./pages/EmployeeDashBoard";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import OurBrands from "./pages/OurBrands";
import BusinessConsulting from "./pages/BusinessConsulting";
import ProfessionalConsulting from "./pages/ProfessionalConsulting";


// CLIENT DASHBOARD
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/client/DashboardHome";
import Services from "./pages/client/Services";
import Profile from "./pages/client/Profile";
import ClientPayments from "./pages/client/Payments";

// ADMIN DASHBOARD
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPayments from "./pages/admin/Payments";
import Employees from "./pages/admin/Employees";
import Clients from "./pages/admin/Clients";

// AUTH
import Login from "./pages/LogIn";
import Signup from "./pages/Singup";
import RecruitmentConsulting from "./pages/RecruitmentConsulting";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/life" element={<Life />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/brands" element={<OurBrands />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/business-consulting" element={<BusinessConsulting />} />
        <Route path="/recruitment" element={<RecruitmentConsulting />} />
        <Route path="/professional" element={<ProfessionalConsulting />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="clients" element={<Clients />} />
          <Route path="payments" element={<AdminPayments />} />
        </Route>

        {/* EMPLOYEE DASHBOARD */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* CLIENT DASHBOARD */}
        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="services" element={<Services />} />
          <Route path="payments" element={<ClientPayments />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;