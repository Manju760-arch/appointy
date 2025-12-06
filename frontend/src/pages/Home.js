// Home.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");   // or "/products"
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);  
  }, []);

  return (
    <div className="home-container">
      <div className="logo">🧬</div>
      <div className="title">Davis Health Care</div>
      
       </div>
  );
}
