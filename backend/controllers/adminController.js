import Appointment from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import User from "../models/user.js";

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = User.countDocuments();
    const totalDoctors = Doctor.countDocuments();
    const totalAppointments = Appointment.countDocuments();
    const pendingAppointments = await Appointment.countDocuments({
      status: "Pending",
    });

    const approvedAppointments = await Appointment.countDocuments({
      status: "Approved",
    });

    const cancelledAppointments = await Appointment.countDocuments({
      status: "Cancelled",
    });
    res.status(200).json({
      success: true,
      dashboard: {
        totalUsers,
        totalDoctors,
        totalAppointments,
        pendingAppointments,
        approvedAppointments,
        cancelledAppointments,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
