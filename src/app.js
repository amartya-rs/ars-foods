import React from "react";
import { Header } from "./components/Header/Header.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./app.css";

function App() {
   return (
      <div className="app">
         <Header />
         <Body />
         <Footer />
      </div>
   );
}

export { App };
