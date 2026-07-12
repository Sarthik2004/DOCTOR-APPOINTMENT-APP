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


