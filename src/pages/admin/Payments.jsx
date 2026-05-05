import { useEffect, useState } from "react";
import axios from "axios";

const AdminPayments = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchPayments = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5001/api/admin/payments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
        setFilteredData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPayments();
  }, []);

  // 🔥 FILTER LOGIC
  useEffect(() => {
    let temp = data;

    // search filter
    if (search) {
      temp = temp.filter((item) =>
        item.userName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // status filter
    if (statusFilter !== "all") {
      temp = temp.filter((item) => item.status === statusFilter);
    }

    setFilteredData(temp);
  }, [search, statusFilter, data]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">All Payments</h1>

      {/* 🔥 FILTERS */}
      <div className="flex gap-4 mb-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-64"
        />

        {/* STATUS FILTER */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">User</th>
              <th className="p-4">Service</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-4">{item.userName}</td>
                <td className="p-4">{item.serviceName}</td>
                <td className="p-4">₹{item.amount}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "success"
                        ? "bg-green-100 text-green-600"
                        : item.status === "pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <p className="p-6 text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default AdminPayments;