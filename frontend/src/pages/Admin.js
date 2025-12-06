import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Admin login successful!");
      navigate("/admindashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admine">
        <div className="admin">
    <div
      className="adminlogin" >
    
                <h1 className="adminhead">Admin Login</h1>
               <form onSubmit={handleLogin}>
          <label className="form-label fw-bold">Email</label>
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter Email "
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="form-label fw-bold">Password</label>
          <input
            className="form-control mb-3"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <button
            className="btn w-100 mt-2"
            style={{
              background: "#0d6efd",
              color: "white",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
            }}
          >
            Login
          </button>
        </form>

            </div>
            <div class="imageadmin">
                <img src="/images/logo.webp" className="imad" alt=""/>
            </div>
            </div>
            </div>
    )}