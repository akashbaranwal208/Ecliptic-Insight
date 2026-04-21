import { useEffect, useState } from "react";
import axios from "axios";
import { FaCreditCard, FaRupeeSign, FaCalendarAlt, FaFileInvoice } from "react-icons/fa";

const Payments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5000/api/payments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPayments();
  }, []);
const handleInvoiceDownload = async (item) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `http://localhost:5000/api/payments/${item._id}/invoice`,
      {
        responseType: "blob", // VERY IMPORTANT
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // ✅ Create download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", `invoice_${item._id}.pdf`);
    document.body.appendChild(link);
    link.click();

    link.remove();
  } catch (error) {
    console.error("Error downloading invoice", error);
  }
};

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Payment History</h1>
        <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
          Total Transactions: {data.length}
        </div>
      </div>

      {data.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-12 text-center text-gray-500">
          <FaCreditCard className="text-5xl mx-auto mb-3 text-gray-300" />
          <p>No payment history found.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    <FaCreditCard className="inline mr-2" />
                    Service
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    <FaRupeeSign className="inline mr-1" />
                    Amount
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    <FaCalendarAlt className="inline mr-1" />
                    Date
                  </th>

                  {/* ✅ NEW COLUMN */}
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    <FaFileInvoice className="inline mr-1" />
                    Invoice
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`border-t hover:bg-gray-50 transition ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {item.serviceName}
                    </td>

                    <td className="p-4 font-semibold text-gray-700">
                      ₹{item.amount}
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "success"
                            ? "bg-green-100 text-green-700"
                            : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            item.status === "success"
                              ? "bg-green-500"
                              : item.status === "pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>

                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    {/* ✅ NEW COLUMN DATA */}
                    <td className="p-4">
                      <button
                        onClick={() => handleInvoiceDownload(item)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm hover:bg-blue-200 transition"
                      >
                        <FaFileInvoice />
                        Invoice
                      </button>

                      {/* Optional: Invoice ID */}
                      <p className="text-xs text-gray-400 mt-1">
                        ID: {item._id.slice(-6)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;