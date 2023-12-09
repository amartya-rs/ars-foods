import React from "react";
import "./header.css";
import Logo from "../../asset/logo.jpeg";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn }) {
   return (
      <div className="header">
         <div className="logo-wrapper">
            <img src={Logo} alt="brand logo" className="logo" />
            <span>ARS Foods</span>
         </div>
         <div className="nav-links">
            <Link to="/">Home</Link>
            <span>About Us</span>
            <Link to="/contact">Contact Us</Link>
            <span></span>
            {isLoggedIn ? (
               <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
         </div>
      </div>
   );
}

export { Header };
