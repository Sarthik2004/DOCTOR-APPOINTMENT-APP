import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Doctors from "./pages/user/Doctors";
import DoctorDetails from "./pages/user/DoctorDetails";
import BookAppointment from "./pages/user/BookAppointment";
import MyAppointments from "./pages/user/MyAppointments";

import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManageAppointments from "./pages/admin/ManageAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/doctor/:id" element={<DoctorDetails />} />

        <Route path="/book/:id" element={<BookAppointment />} />

        <Route path="/my-appointments" element={<MyAppointments />} />

        {/* Admin */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/doctors" element={<ManageDoctors />} />

        <Route path="/admin/appointments" element={<ManageAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
