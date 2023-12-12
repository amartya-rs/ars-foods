import React, { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./app.css";
import { Outlet } from "react-router-dom";
import { useCheckOnline } from "./utils/custom hooks/useCheckOnline.js";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const onlineStatus = useCheckOnline();

   return (
      <div className="app">
         <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         {onlineStatus ? (
            <Outlet />
         ) : (
            <h2>
               Seems you are offline. Please check your internet connection.
            </h2>
         )}
         <Footer />
      </div>
   );
}

export { App };
