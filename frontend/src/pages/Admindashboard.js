import React from 'react'

import "../styles/admindashboard.css";
import { Link} from "react-router-dom";
const Admindashboard = () => {
  return (
    <div className="container mt-4">
        <p className="text">Welcome!!</p>
      <h2 className="adminhead">Admin Dashboard</h2>

      <ul className="admincontainer">
        <li className="adminlink"><Link className="decor" to="/user">Manage Users</Link></li>
        <li className="adminlink"><Link className="decor" to="/booking">Appointments</Link></li>
         </ul>
    </div>
    
             

           
  );
}

export default Admindashboard