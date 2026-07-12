import express from "express";
import { addDoctor, getDoctors } from "../controllers/doctorController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", addDoctor, protect, isAdmin);
router.get("/", getDoctors);

export default router;
