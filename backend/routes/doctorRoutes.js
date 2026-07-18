import express from "express";
import {
  addDoctor,
  deleteDoctor,
  getDoctorById,
  getDoctors,
  updateDoctor,
} from "../controllers/doctorController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", protect, isAdmin, upload.single("image"), addDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", protect, isAdmin, upload.single("image"), updateDoctor);
router.delete("/:id", protect, isAdmin, deleteDoctor);

export default router;
