import React from "react";
import "./shimmer.css";

function Shimmer() {
   return (
      <div className="shimmer-container">
         <div>
            <div className="shimmer-card"></div>
            <div className="circle"></div>
         </div>
         <div>
            <div className="shimmer-card"></div>
            <div className="circle"></div>
         </div>
         <div>
            <div className="shimmer-card"></div>
            <div className="circle"></div>
         </div>
         <div>
            <div className="shimmer-card"></div>
            <div className="circle"></div>
         </div>
         <div>
            <div className="shimmer-card"></div>
            <div className="circle"></div>
         </div>
      </div>
   );
}

export { Shimmer };
