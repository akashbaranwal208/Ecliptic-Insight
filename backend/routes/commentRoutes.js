import express from "express";
import { addComment, getComments } from "../controllers/commentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addComment); // 🔥 protected
router.get("/:slug", getComments);

export default router;