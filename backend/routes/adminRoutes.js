import express from "express";
import { getEmployees, getClients , getAllPayments, getAdminStats, getRevenueChart,deleteUser, updateUser} from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// EMPLOYEES
router.get("/employees", verifyToken, getEmployees);

// CLIENTS
router.get("/clients", verifyToken, getClients);

router.get("/payments", verifyToken, getAllPayments);

router.get("/stats", verifyToken, getAdminStats);

router.get("/revenue-chart", verifyToken, getRevenueChart);

router.delete("/user/:id", verifyToken, deleteUser);

router.put("/user/:id", verifyToken, updateUser);

export default router;