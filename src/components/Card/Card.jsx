import React from "react";
import "./card.css";

function Card() {
   return (
      <div className="card">
         <img
            className="card-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
            alt="food item"
         />
         <h3>Restaurant name</h3>
         <div>
            <span>4.5</span> • <span>30 mins</span>
         </div>
         <div>Cuisine</div>
         <div>Address</div>
      </div>
   );
}

export { Card };
