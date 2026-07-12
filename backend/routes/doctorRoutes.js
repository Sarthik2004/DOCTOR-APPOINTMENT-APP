import express from "express";
import {
  addDoctor,
  deleteDoctor,
  getDoctorById,
  getDoctors,
  updateDoctor,
} from "../controllers/doctorController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", addDoctor, protect, isAdmin);
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", protect, isAdmin, updateDoctor);
router.delete("/:id", protect, isAdmin, deleteDoctor);

export default router;
