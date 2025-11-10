import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
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
      user.bookedDoctors.push({ doctorId, date, time });
      localStorage.setItem("user", JSON.stringify(user));
      alert("Doctor booked!");
      setUser({ ...user });
    }
  };

  const handleUnbook = async (doctorId) => {
    const res = await fetch("http://localhost:5000/api/doctors/unbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user._id, doctorId }),
    });
    if (res.ok) {
      user.bookedDoctors = user.bookedDoctors.filter(d => d.doctorId !== doctorId);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Doctor unbooked!");
      setUser({ ...user });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={() => setShowProfile(!showProfile)}>My Profile</button>
      </header>

      {showProfile && (
        <section className={styles.profile}>
          <h2>My Profile</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <h3>Booked Doctors</h3>
          <div className={styles.doctorList}>
            {doctors.map(doc => {
              const booked = user.bookedDoctors.find(b => b.doctorId === doc._id);
              return booked ? (
                <DoctorCard
                  key={doc._id}
                  doctor={doc}
                  booked={booked}
                  onBook={handleBook}
                  onUnbook={handleUnbook}
                />
              ) : null;
            })}
          </div>
        </section>
      )}

      <section className={styles.hospitalInfo}>
        <marquee behavior="scroll" direction="left" className={styles.marquee}>
          <h1>BM Hospital - Best Care for Your Health</h1>
        </marquee>

        <div className={styles.infoBoxes}>
          <div className={styles.infoBox}>
            <h3>About Us</h3>
            <p>BM Hospital is committed to providing world-class healthcare.</p>
          </div>
          <div className={styles.infoBox}>
            <h3>Contact</h3>
            <p>Email: contact@bmhospital.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: 123 Health St, Chennai</p>
          </div>
          <div className={styles.infoBox}>
            <h3>Specialities</h3>
            <ul>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
              <li>Dermatology</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.doctorListSection}>
        <h2>Book Your Doctor</h2>
        <div className={styles.doctorList}>
          {doctors.map(doc => {
            const booked = user.bookedDoctors.find(b => b.doctorId === doc._id);
            return (
              <DoctorCard
                key={doc._id}
                doctor={doc}
                booked={booked}
                onBook={handleBook}
                onUnbook={handleUnbook}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
