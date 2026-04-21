import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaCreditCard } from "react-icons/fa";

const Services = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/services");
        setPlans(res.data);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchServices();
  }, []);

  const handleBuy = async (plan) => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/api/payments",
        {
          serviceId: plan._id,
          serviceName: plan.name,
          amount: plan.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Service selected. Redirecting to payment...");

      // 👉 later replace with real payment gateway
      // window.location.href = "PAYMENT_URL";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Choose Your Service Plan</h1>

      <div className="grid grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan._id}
            className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
              index === 0 ? "border-t-4 border-blue-500" : ""
            }`}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ₹{plan.price}
                <span className="text-sm font-normal text-gray-500"> / month</span>
              </p>

              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(plan)}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
              >
                <FaCreditCard className="text-sm" />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;