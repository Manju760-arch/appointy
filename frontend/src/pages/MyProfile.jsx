import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function MyProfile() {
  const { user } = useContext(AppContext); // logged-in user
  const [bookedAppointments, setBookedAppointments] = useState([]);

  useEffect(() => {
    if (!user) return;

    // Fetch booked appointments for this user
    fetch(`http://localhost:5000/api/users/${user._id}/bookedDoctors`)
      .then(res => res.json())
      .then(data => setBookedAppointments(data))
      .catch(err => console.error(err));
  }, [user]);

  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#121212", color: "#fff" }}>
      <h1>My Profile</h1>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>

      <h2 style={{ marginTop: "30px" }}>Booked Appointments</h2>
      {bookedAppointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #fff", padding: "10px" }}>Doctor Name</th>
              <th style={{ borderBottom: "1px solid #fff", padding: "10px" }}>Date</th>
              <th style={{ borderBottom: "1px solid #fff", padding: "10px" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookedAppointments.map((appointment) => (
              <tr key={appointment._id}>
                <td style={{ padding: "10px" }}>{appointment.doctorName}</td>
                <td style={{ padding: "10px" }}>{appointment.date}</td>
                <td style={{ padding: "10px" }}>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
