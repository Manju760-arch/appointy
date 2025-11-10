import React from "react";
import styles from "../styles/DoctorList.css";

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 60px 20px;
  background-color: #121212;
  min-height: 100vh;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #1f1f1f;
  padding: 20px;
  width: 220px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.7);
  transition: all 0.3s ease;
  cursor: pointer;
  color: #fff;

  &:hover {
    transform: translateY(-5px);
    background: #2c2c2c;
  }
`;

const DoctorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #ff6f61;
`;

const BookButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.booked ? "#4caf50" : "#ff6f61")};
  color: #fff;
  cursor: ${props => (props.booked ? "not-allowed" : "pointer")};
  transition: 0.3s;

  &:hover {
    background-color: ${props => (props.booked ? "#4caf50" : "#ff3b2f")};
  }
`;

export default function DoctorList() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [bookedDoctors, setBookedDoctors] = useState([]); // IDs of booked doctors

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error(err));

    if (user) {
      fetch(`http://localhost:5000/api/users/${user._id}/bookedDoctors`)
        .then(res => res.json())
        .then(data => setBookedDoctors(data.map(d => d._id)))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleBook = async (doctorId) => {
    if (!user) {
      alert("You must be logged in to book an appointment!");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/users/${user._id}/bookDoctor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId }),
      });
      const data = await res.json();

      if (res.ok) {
        alert(`Doctor ${data.name} booked successfully!`);
        setBookedDoctors(prev => [...prev, doctorId]);
      } else {
        alert(data.message || "Booking failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <Container>
      {doctors.map(doc => (
        <Card key={doc._id}>
          <DoctorImage src={doc.image || "https://via.placeholder.com/120"} alt={doc.name} />
          <p>{doc.name}</p>
          <p>{doc.speciality}</p>
          <BookButton
            booked={bookedDoctors.includes(doc._id)}
            onClick={() => handleBook(doc._id)}
            disabled={bookedDoctors.includes(doc._id)}
          >
            {bookedDoctors.includes(doc._id) ? "Booked" : "Book Doctor"}
          </BookButton>
        </Card>
      ))}
    </Container>
  );
}
