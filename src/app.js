import React, { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./app.css";
import { Outlet } from "react-router-dom";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <div className="app">
         <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         <Outlet />
         <Footer />
      </div>
   );
}

export { App };
