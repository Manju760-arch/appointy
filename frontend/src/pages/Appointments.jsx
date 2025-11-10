import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

export default function Appointments() {
  const [doctors, setDoctors] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const res = await fetch("http://localhost:5000/api/doctors");
    const data = await res.json();
    setDoctors(data);
  };

  const handleBook = async (doctorId) => {
    const date = document.getElementById(`date-${doctorId}`).value;
    const time = document.getElementById(`time-${doctorId}`).value;
    if (!date || !time) { alert("Select date and time"); return; }
    const res = await fetch("http://localhost:5000/api/doctors/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user._id, doctorId, date, time }),
    });
    if (res.ok) {
      alert("Doctor booked!");
      user.bookedDoctors.push({ doctorId, date, time });
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const handleUnbook = async (doctorId) => {
    const res = await fetch("http://localhost:5000/api/doctors/unbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user._id, doctorId }),
    });
    if (res.ok) {
      alert("Doctor unbooked!");
      user.bookedDoctors = user.bookedDoctors.filter(d => d.doctorId !== doctorId);
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Book Doctor</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {doctors.map(doc => {
          const booked = user.bookedDoctors.find(b => b.doctorId === doc._id);
          return <DoctorCard key={doc._id} doctor={doc} booked={booked} onBook={handleBook} onUnbook={handleUnbook} />;
        })}
      </div>
    </div>
  );
}
