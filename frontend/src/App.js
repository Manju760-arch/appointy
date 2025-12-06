import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Blog from "./pages/Blog";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Services from "./pages/Services";
import Hearing from "./pages/Hearing";
import Admin from "./pages/Admin";
import Layout from "./component/Layout";   // ⬅️ EXACT PATH
import Admindashboard from "./pages/Admindashboard";
import User from "./pages/User";
import Booking from "./pages/Booking";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* No-navbar pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* With navbar */}
        <Route element={<Layout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hearing" element={<Hearing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
           <Route path="/user" element={<User />} />
            <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}
