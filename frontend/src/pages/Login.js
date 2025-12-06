import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import "../styles/login.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  alert(data.message);

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/overview");
  }
};


  return (
    <div className="login-container">
      <div className="login-bg">
        <div className="login-box">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleLogin}>
        <input
        className="name"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit" type="submit">Login</button>
        <div className="login-para">Don't have an account? <Link to="/register">Register</Link></div>
      </form>
      </div>
      </div>
    </div>
  );
}
