import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getAllAppointments,
  getMyAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Book Appointment
router.post("/", protect, bookAppointment);
router.get("/my", protect, getMyAppointments);
router.get("/", protect, isAdmin, getAllAppointments);
router.put("/:id", protect, isAdmin, updateAppointmentStatus);
router.delete("/:id", protect, cancelAppointment);

export default router;
