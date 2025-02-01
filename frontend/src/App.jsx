import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import Myappointments from "./pages/Myappointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import UserDashboard from "./pages/UserDashboard"; 
import DoctorDashboard from "./pages/DoctorDashboard"; 
import { useAuth } from "./context/AuthContext";


const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth(); // Use useAuth inside the component

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />; // Redirect to home if role doesn't match
  }

  return children;
};

// Dashboard component to conditionally render UserDashboard or DoctorDashboard
const Dashboard = () => {
  const { user } = useAuth(); // Use useAuth inside the component

  if (user?.role === "doctor") {
    return <DoctorDashboard />;
  } else {
    return <UserDashboard />;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard/> {/* Use the Dashboard component */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <Myprofile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-appointments"
            element={
              <ProtectedRoute>
                <Myappointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment/:docId"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;