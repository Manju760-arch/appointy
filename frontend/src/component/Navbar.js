import React from 'react'
import "../styles/navbar.css";
import { Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
    <div className='nav-title'>🧬Davis Family Hearing</div>
    <ul className="navbar">
                        
        <li className="navitem">
            <Link className="navlink" to="/overview">Overview</Link>
            <Link className="navlink" to="/blog">Blog  </Link>
            <Link className="navlink" to="/appointment">Schedule Appointment</Link>
             <Link className="navlink" to="/about">About  </Link>
                         <Link className="navlink" to="/locations">Locations  </Link>  
                        <Link className="navlink" to="/services">Services  </Link>  
                    <Link className="navlink" to="/hearing">Hearing Aids  </Link>    
                        <Link className="navlink" to="/admin">Admin  </Link>          
        </li>

        </ul>
        
    </div>
)
}

export default Navbar