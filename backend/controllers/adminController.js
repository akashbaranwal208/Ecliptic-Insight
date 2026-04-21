import User from "../models/User.js";
import Payment from "../models/Payment.js";

// GET ALL EMPLOYEES
export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" }).select("-password");

    if (req.user.role !== "admin") {
  return res.status(403).json({ message: "Access denied" });
}

    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL CLIENTS
export const getClients = async (req, res) => {
  try {
    // 🔐 only admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const clients = await User.find({ role: "client" }).select("-password");

    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL PAYMENTS (ADMIN)
export const getAllPayments = async (req, res) => {
  try {
    // 🔐 only admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const payments = await Payment.find()
      .sort({ createdAt: -1 });

    // 🔥 attach user name manually
    const result = await Promise.all(
      payments.map(async (p) => {
        const user = await User.findById(p.userId);
        return {
          ...p._doc,
          userName: user?.fullName || "Unknown",
        };
      })
    );

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAdminStats = async (req, res) => {
  try {
    // 🔐 only admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const totalEmployees = await User.countDocuments({ role: "employee" });
    const totalClients = await User.countDocuments({ role: "client" });

    const payments = await Payment.find();

    const totalPayments = payments.length;

    const totalRevenue = payments
      .filter(p => p.status === "success")
      .reduce((acc, curr) => acc + curr.amount, 0);

    res.json({
      totalEmployees,
      totalClients,
      totalPayments,
      totalRevenue,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getRevenueChart = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const payments = await Payment.find({ status: "success" });

    const monthlyData = {};

    payments.forEach((p) => {
      const date = new Date(p.createdAt);
      const month = date.toLocaleString("default", { month: "short" });

      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }

      monthlyData[month] += p.amount;
    });

    const result = Object.keys(monthlyData).map((month) => ({
      month,
      revenue: monthlyData[month],
    }));

    res.json(result);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    // 🔐 only admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const { fullName, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        email,
      },
      { new: true }
    );

    res.json(updatedUser);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};