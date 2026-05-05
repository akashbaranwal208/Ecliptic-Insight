import AuthLayout from "../components/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, role, name } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);

      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "employee") {
        navigate("/employee-dashboard");
      } else {
        navigate("/client-dashboard");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Sign In" subtitle="Welcome back!">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" autoComplete="off">
        
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5 sm:mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5 sm:mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition text-sm sm:text-base"
            required
          />
        </div>

        <div className="flex justify-end">
          <Link to="/" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base"
        >
          Login
        </button>

        <p className="text-center text-xs sm:text-sm text-[#64748B] pt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700 transition font-medium">
            Signup
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
};

export default Login;