import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

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
import EditDoctor from "./pages/admin/EditDoctor";
import AddDoctor from "./pages/admin/AddDoctor";
import ManageAppointments from "./pages/admin/ManageAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected User Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/:id"
          element={
            <ProtectedRoute>
              <DoctorDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-appointments"
          element={
            <ProtectedRoute>
              <MyAppointments />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Routes (abhi temporary) */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/doctors"
          element={
            <ProtectedRoute>
              <ManageDoctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/doctors/edit/:id"
          element={
            <ProtectedRoute>
              <EditDoctor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/doctors/add"
          element={
            <ProtectedRoute>
              <AddDoctor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <ProtectedRoute>
              <ManageAppointments />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
