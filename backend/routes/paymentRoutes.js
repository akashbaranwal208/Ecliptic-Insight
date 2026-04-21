import express from "express";
import {
  createPayment,
  getUserPayments,
  downloadInvoice,
} from "../controllers/paymentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createPayment);
router.get("/", verifyToken, getUserPayments);

// ✅ NEW ROUTE (IMPORTANT)
router.get("/:id/invoice", verifyToken, downloadInvoice);

export default router;