import React, { useEffect } from "react";
import "./searxhbox.css";

export function Searchbox({ width }) {
   useEffect(() => {
      setWidth();
   }, [width]);

   const setWidth = () => {
      if (width) {
         document.getElementsByClassName(
            "search-wrapper"
         )[0].style.width = `${width}%`;
      } else {
         document.getElementsByClassName("search-wrapper")[0].style.width =
            "100%";
      }
   };

   return (
      <div className={`search-wrapper`}>
         <input className="search" type="text" placeholder="search..." />
      </div>
   );
}
