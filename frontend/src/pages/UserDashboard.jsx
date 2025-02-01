import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Dummy data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. John Doe",
      specialty: "Cardiologist",
      date: "2024-03-15",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Jane Smith",
      specialty: "Dermatologist",
      date: "2024-03-20",
      time: "02:00 PM",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8">Welcome, {user?.name}</h1>

      {/* User Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name: {user?.name}</p>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600">Phone: {user?.tel}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/my-profile")}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Book Appointment Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Appointment</h2>
        <p className="text-gray-600 mb-4">
          Schedule an appointment with a doctor today.
        </p>
        <button
          onClick={() => navigate("/doctors")}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Find a Doctor
        </button>
      </div>

      {/* Upcoming Appointments Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h2>
        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800 font-medium">{appointment.doctor}</p>
                <p className="text-gray-600">{appointment.specialty}</p>
                <p className="text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No upcoming appointments.</p>
        )}
      </div>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
};

export default UserDashboard;