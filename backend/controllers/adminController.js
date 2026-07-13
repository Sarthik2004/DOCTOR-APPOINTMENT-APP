import Appointment from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import User from "../models/user.js";

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = User.countDocuments();
    const totalDoctors = Doctor.countDocuments();
    const totalAppointments = Appointment.countDocuments();
    res.status(200).json({
      success: true,
      totalUsers,
      totalDoctors,
      totalAppointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
