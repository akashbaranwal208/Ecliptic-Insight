import { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    const fetchClients = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/clients",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setData(res.data);
      setFilteredData(res.data);
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const temp = data.filter((item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(temp);
  }, [search, data]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete client?")) return;

    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/admin/user/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const updated = data.filter((u) => u._id !== id);
    setData(updated);
    setFilteredData(updated);
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setFormData({
      fullName: user.fullName,
      email: user.email,
    });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.put(
      `http://localhost:5000/api/admin/user/${editingUser}`,
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
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Clients</h1>

      <input
        type="text"
        placeholder="Search client..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-lg mb-4 w-64"
      />

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
              <tr key={user._id} className="border-t">
                <td className="p-4">{user.fullName}</td>
                <td className="p-4">{user.email}</td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <p className="p-6 text-gray-500">No results found</p>
        )}
      </div>

      {editingUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Client</h2>

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

export default Clients;