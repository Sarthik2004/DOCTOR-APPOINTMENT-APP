import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/dashboard", protect, isAdmin, getDashboard);

export default router;
