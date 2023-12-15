import React, { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./app.css";
import { Outlet } from "react-router-dom";
import { useCheckOnline } from "./utils/custom hooks/useCheckOnline.js";
import { LoginProvider } from "./context/login-context";

function App() {
   const onlineStatus = useCheckOnline();

   return (
      <LoginProvider>
         <div className="app">
            <Header />
            {onlineStatus ? (
               <Outlet />
            ) : (
               <h2>
                  Seems you are offline. Please check your internet connection.
               </h2>
            )}
            <Footer />
         </div>
      </LoginProvider>
   );
}

export { App };
