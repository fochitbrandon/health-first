import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome, Dr. {user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate("/my-profile")}
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          <p className="text-gray-600">View and update your profile.</p>
        </div>
        <div
          onClick={() => navigate("/manage-appointments")}
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Appointments</h2>
          <p className="text-gray-600">View and manage your appointments.</p>
        </div>
        <div
          onClick={() => navigate("/patient-details")}
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Patient Details</h2>
          <p className="text-gray-600">View details of your patients.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;