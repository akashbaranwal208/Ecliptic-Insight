import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaUserTie,
  FaMoneyBill,
  FaChartLine,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        // 🔹 Stats API
        const res = await axios.get(
          "http://localhost:5000/api/admin/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);

        // 🔹 Chart API
        const res2 = await axios.get(
          "http://localhost:5000/api/admin/revenue-chart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setChartData(res2.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Admin Overview</h1>

      {/* 🔥 CARDS */}
      <div className="grid grid-cols-4 gap-6">

        {/* Employees */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaUserTie className="text-blue-500 text-xl mb-2" />
          <p className="text-sm text-gray-500">Employees</p>
          <h2 className="text-xl font-semibold">{stats.totalEmployees}</h2>
        </div>

        {/* Clients */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-purple-500 text-xl mb-2" />
          <p className="text-sm text-gray-500">Clients</p>
          <h2 className="text-xl font-semibold">{stats.totalClients}</h2>
        </div>

        {/* Payments */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaChartLine className="text-yellow-500 text-xl mb-2" />
          <p className="text-sm text-gray-500">Total Payments</p>
          <h2 className="text-xl font-semibold">{stats.totalPayments}</h2>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaMoneyBill className="text-green-500 text-xl mb-2" />
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-xl font-semibold">
            ₹{stats.totalRevenue}
          </h2>
        </div>

      </div>

      {/* 🔥 CHART SECTION (OUTSIDE GRID) */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Revenue Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AdminDashboard;