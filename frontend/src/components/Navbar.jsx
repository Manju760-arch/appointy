import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>BM Hospital</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Create Account</Link>
      </div>
    </nav>
  );
}
