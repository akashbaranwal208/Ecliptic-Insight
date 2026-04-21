import { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaUserCircle, FaSpinner } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <FaSpinner className="text-4xl text-blue-500 animate-spin mx-auto mb-3" />
          <p className="text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4 flex items-center gap-3">
          <FaUserCircle className="text-4xl text-white" />
          <div>
            <h2 className="text-md font-semibold text-white">{user.fullName}</h2>
            <p className="text-blue-100 text-xs">Client Member</p>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <FaUser className="text-blue-500 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Full Name</p>
              <p className="text-sm text-gray-700">{user.fullName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-full">
              <FaEnvelope className="text-green-500 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Email Address</p>
              <p className="text-sm text-gray-700">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-3 bg-gray-50">
          <p className="text-xs text-gray-400 text-center">
            Member since {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;