import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/logo.jpeg";
import { useLogin } from "../../context/login-context";
import "./header.css";

function Header() {
   const { isLoggedIn, setIsLoggedIn } = useLogin();

   return (
      <div className="header">
         <div className="logo-wrapper">
            <img src={Logo} alt="brand logo" className="logo" />
            <span>ARS Foods</span>
         </div>
         <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/contact">Contact Us</Link>
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
