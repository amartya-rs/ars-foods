import React from "react";
import "./header.css";
import Logo from "../../asset/logo.jpeg";

function Header({ isLoggedIn, setIsLoggedIn }) {
   return (
      <div className="header">
         <div className="logo-wrapper">
            <img src={Logo} alt="brand logo" className="logo" />
            <span>ARS Foods</span>
         </div>
         <div className="nav-links">
            <span>Home</span>
            <span>About Us</span>
            <span>Contact Us</span>
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
