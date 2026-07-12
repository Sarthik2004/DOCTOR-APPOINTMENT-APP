import Doctor from "../models/doctor.js";

export const addDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, fees, image } = req.body;
    if (!name || !specialization || !experience || !fees) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const doctor = await Doctor.create({
      name,
      specialization,
      experience,
      fees,
      image,
    });
    res.status(201).json({ message: "Doctor Added Successfully", doctor });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Doctor
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Doctor Updated Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    await doctor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Doctor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
