import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import "../styles/register.css";
const API_URL = "http://localhost:5000";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-bg">
        <div className="register-box">
      <h2 className="heading">Create Account</h2>
      <form onSubmit={handleRegister}>
        <input
        className="register-name"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
        className="register-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        className="register-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
        className="register-password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="register" type="submit">Create Account</button>
        <div className="register-para">Already have an account?<Link to="/login">Login</Link></div>
      </form>
      </div>
      </div>
    </div>
  );
}
