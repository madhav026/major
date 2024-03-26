import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import "./navbar.css";
import Login from './Login';
const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <div className='imagetag'>
                <div>
                    <img src='../image/digixam.jpg' />
                    </div>
                    <div className='digihead'>
                    <h3><span>D</span>igi<span>X</span>am</h3>
              </div>
                    </div>
                </Link>

                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/what-we-do" className="navbar-link">
                            What We Do
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login" className="navbar-link">
                            Login
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact-us" className="navbar-link">
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
