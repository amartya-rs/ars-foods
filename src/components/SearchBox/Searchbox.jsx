import React from "react";
import "./searxhbox.css";

export function Searchbox() {
   return (
      <div className="search-wrapper">
         <input className="search" type="text" placeholder="search..." />
      </div>
   );
}
