import { useEffect, useState } from "react";
import axios from "axios";

const Employees = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  // 🔥 FETCH (ONLY ONE useEffect)
  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5001/api/admin/employees",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setData(res.data);
        setFilteredData(res.data);
      } catch (err) {
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // 🔍 SEARCH
  useEffect(() => {
    const temp = data.filter((item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(temp);
  }, [search, data]);

  // ❌ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete employee?")) return;

    const token = localStorage.getItem("token");

    try {
      await axios.delete(
        `http://localhost:5001/api/admin/user/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updated = data.filter((u) => u._id !== id);
      setData(updated);
      setFilteredData(updated);
    } catch (err) {
      alert("Delete failed");
    }
  };

  // ✏️ EDIT OPEN
  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setFormData({
      fullName: user.fullName,
      email: user.email,
    });
  };

  // 💾 UPDATE
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.put(
        `http://localhost:5001/api/admin/user/${editingUser}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedList = data.map((u) =>
        u._id === editingUser ? res.data : u
      );

      setData(updatedList);
      setFilteredData(updatedList);
      setEditingUser(null);
    } catch (err) {
      alert("Update failed");
    }
  };

  // 🔥 LOADING UI
  if (loading) return <p className="p-6">Loading employees...</p>;

  // 🔥 ERROR UI
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Employees</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-lg mb-4 w-64"
      />

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                <td className="p-4">{user.fullName}</td>
                <td className="p-4">{user.email}</td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <p className="p-6 text-gray-400 text-center">
            No data available
          </p>
        )}
      </div>

      {/* MODAL */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Employee</h2>

            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingUser(null)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;