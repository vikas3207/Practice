import React from "react";
import { FaFacebookSquare , FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import '../cssfiles/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h3><span>R</span>act <span>R</span>outer</h3>
                </div>
                <div className="menu-links">
                    <ul>
                        {/* <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li> */}
                        <Link to="/">Home</Link>
                        <Link to="/Aboutus">About Us</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link className="active" to="/Login">Login</Link>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="socail-media-desktop">
                        <li><a href="#"><FaFacebookSquare className="facebook"/></a></li>
                        <li><a href="#"><FaInstagramSquare className="instagram"/></a></li>
                        <li><a href="#"><FaYoutubeSquare className="youtube"/></a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar