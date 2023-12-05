import React from "react";
import { IMG_URL } from "../../utils/constants";
import "./card.css";

function Card({ data }) {
   const {
      info: {
         name,
         cloudinaryImageId,
         cuisines,
         areaName,
         avgRating,
         sla: { deliveryTime },
      },
   } = data;

   return (
      <div className="card">
         <img
            className="card-img"
            src={`${IMG_URL}${cloudinaryImageId}`}
            alt="food item"
         />
         <h3>{name}</h3>
         <div>
            <span>{avgRating}</span> • <span>{deliveryTime} mins</span>
         </div>
         <div>{cuisines.join(", ")}</div>
         <div>{areaName}</div>
      </div>
   );
}

export { Card };
