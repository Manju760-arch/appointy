import styles from "../styles/DoctorCard.module.css";

export default function DoctorCard({ doctor, booked, onBook, onUnbook }) {
  return (
    <div className={styles.card}>
      <img src={doctor.image} alt={doctor.name} />
      <p>{doctor.name}</p>
      {booked ? (
        <>
          <p>{booked.date} {booked.time}</p>
          <button onClick={() => onUnbook(doctor._id)}>Unbook</button>
        </>
      ) : (
        <>
          <input type="date" id={`date-${doctor._id}`} />
          <input type="time" id={`time-${doctor._id}`} />
          <button onClick={() => onBook(doctor._id)}>Book Appointment</button>
        </>
      )}
    </div>
  );
}
