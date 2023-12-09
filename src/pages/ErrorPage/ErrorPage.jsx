import React from "react";
import { useRouteError } from "react-router-dom";
import "./error-page.css";

export const ErrorPage = () => {
   const err = useRouteError();

   return (
      <div className="error-container">
         <h2>Oops! {err.status}</h2>
         <h2>Something went wrong</h2>
         <h2>{err.statusText}</h2>
      </div>
   );
};
